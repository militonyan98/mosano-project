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

    const payload = {
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
      // Forward to n8n webhook
      try {
        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mosano-Lead-Router/1.0",
          },
          body: JSON.stringify(payload),
        });

        if (!n8nResponse.ok) {
          console.error(
            `n8n webhook returned status ${n8nResponse.status}:`,
            await n8nResponse.text()
          );
        }
      } catch (webhookError) {
        console.error("Failed to post payload to n8n webhook:", webhookError);
        // Do not crash client request; acknowledge reception to user while logging failure
      }
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
