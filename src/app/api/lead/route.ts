import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      projectName,
      launchGoal,
      scopeSummary,
      currency,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "-";

    const formattedMessage = [
      `Target Launch: ${launchGoal || "Not specified"}`,
      scopeSummary
        ? `Calculated Scope: ${scopeSummary.platform} • ${scopeSummary.aiLevel} (${scopeSummary.screens} screens)`
        : "Scope: Direct Scoping Inquiry",
      scopeSummary
        ? `Estimated Budget: ${currency || "EUR"} ${scopeSummary.priceMin?.toLocaleString()} – ${scopeSummary.priceMax?.toLocaleString()} (${scopeSummary.weeksMin}–${scopeSummary.weeksMax} weeks)`
        : null,
      scopeSummary?.summary ? `Details: ${scopeSummary.summary}` : null,
      `UTM Source: ${utmSource || "direct"} / ${utmMedium || "none"} (${utmCampaign || "mvp_cost_2026"})`,
    ]
      .filter(Boolean)
      .join("\n");

    const payload = {
      // Fields matching n8n Contact Form Workflow #4337
      "First Name": firstName,
      "Last Name": lastName,
      Email: email.trim().toLowerCase(),
      Company: (projectName || "Unnamed Project").trim(),
      Message: formattedMessage,
      // Full structured Mosano Lead & Budget Planner data
      lead: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        projectName: (projectName || "Unnamed Project").trim(),
        launchGoal: launchGoal || "Not specified",
      },
      plannerScope: scopeSummary || null,
      currency: currency || "EUR",
      attribution: {
        utm_source: utmSource || "direct",
        utm_medium: utmMedium || "none",
        utm_campaign: utmCampaign || "mvp_cost_2026",
        referrer: request.headers.get("referer") || "direct",
      },
      meta: {
        source: "Mosano MVP Budget Planner 2026",
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") || "unknown",
      },
    };

    if (n8nWebhookUrl) {
      // Forward to n8n Form Trigger (/form/...) or Webhook (/webhook/...)
      // Use an AbortSignal timeout and bound the wait time so slow/unreachable n8n endpoints
      // or workflows that wait on downstream nodes never hang the client form submission.
      const sendToN8n = async () => {
        try {
          const controller = new AbortController();
          const abortTimer = setTimeout(() => controller.abort(), 8000);

          const isFormTrigger = n8nWebhookUrl.includes("/form/");
          let n8nResponse: Response;

          if (isFormTrigger) {
            const formData = new FormData();
            formData.append("field-0", firstName);
            formData.append("field-1", lastName);
            formData.append("field-2", email.trim().toLowerCase());
            formData.append(
              "field-3",
              `${(projectName || "Unnamed Project").trim()} (${email.trim().toLowerCase()})`
            );
            formData.append("field-4", formattedMessage);

            n8nResponse = await fetch(n8nWebhookUrl, {
              method: "POST",
              headers: {
                "User-Agent": "Mosano-Lead-Router/1.0",
              },
              body: formData,
              signal: controller.signal,
            });
          } else {
            n8nResponse = await fetch(n8nWebhookUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mosano-Lead-Router/1.0",
              },
              body: JSON.stringify(payload),
              signal: controller.signal,
            });
          }

          clearTimeout(abortTimer);

          if (!n8nResponse.ok) {
            console.error(
              `n8n endpoint returned status ${n8nResponse.status}:`,
              await n8nResponse.text()
            );
          }
        } catch (webhookError) {
          console.error("Failed to post payload to n8n endpoint:", webhookError);
          // Do not crash client request; acknowledge reception to user while logging failure
        }
      };

      // Wait up to 1.5s for fast n8n acknowledgment; otherwise let it complete in background
      await Promise.race([
        sendToN8n(),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
    } else {
      console.log(
        "[Mosano Dev/Mock] No N8N_WEBHOOK_URL configured. Payload logged successfully:",
        JSON.stringify(payload, null, 2)
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead processed successfully and forwarded to n8n.",
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email us directly at hello@mosano.eu." },
      { status: 500 }
    );
  }
}
