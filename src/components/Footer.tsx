"use client";

import React from "react";

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social-media-container-footer undefined">
          <a
            href="https://github.com/mosano-eu"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
            className="social-media-block-1 w-inline-block"
          >
            <svg
              width="34px"
              className="hover-social"
              height="34px"
              viewBox="0 0 36 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-630.000000, -57.000000)" fillRule="nonzero">
                  <g transform="translate(140.000000, 56.000000)">
                    <g transform="translate(489.000000, 0.000000)">
                      <g>
                        <rect fill="#000000" opacity="0" x="0" y="0" width="38" height="38" />
                        <path
                          d="M19,1.58333335 C9.48315207,1.48662618 1.68771627,9.11906651 1.58333335,18.6358333 C1.61946259,26.0458432 6.42835625,32.5877291 13.49,34.8333333 C14.3608333,34.9916667 14.6775,34.4691667 14.6775,34.01 L14.6775,31.1125 C9.8325,32.1416667 8.80333335,28.8325 8.80333335,28.8325 C8.48080291,27.793675 7.79511763,26.9056564 6.87166665,26.3308333 C5.28833331,25.2858333 6.99833331,25.3016667 6.99833335,25.3016667 C8.10710961,25.4498962 9.08708568,26.0973803 9.65833335,27.0591667 C10.6805536,28.8317172 12.9343815,29.4585631 14.725,28.4683333 C14.8135196,27.6012717 15.206162,26.7935504 15.8333333,26.1883333 C11.97,25.7608333 7.91666669,24.3041667 7.91666665, 17.765 C7.88211864,16.0592428 8.51238421,14.406925 9.67416665,13.1575 C9.14505965,11.693025 9.20753616,10.0799952 9.84833335,8.66083335 C9.84833335,8.66083335 11.3208333,8.20166669 14.5983333,10.4025 C17.4513322,9.6422443 20.4536678,9.6422443 23.3066667,10.4025 C26.6316667 ,8.20166665 28.0566667,8.66083335 28.0566667,8.66083335 C28.6974638,10.0799952 28.7599404,11.693025 28.2308333,13.1575 C29.4196031,14.3840245 30.0840455,16.0252539 30.0833333,17.7333333 C30.0833333,24.2883333 25.9983333,25.7291667 22.1666667,26.1566667 C23.0162069,26.9814809 23.4518876,28.1432961 23.3541667,29.3233333 L23.3541667,33.9941667 C23.3541667,34.5483333 23.6708333,34.9916667 24.5416667,34.8175 C31.5822095,32.55831 36.3731632,26.0298371 36.4166667 ,18.6358333 C36.3122837,9.11906651 28.5168479,1.48662618 19,1.58333335"
                          fill="#1e22aa"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://gitlab.com/mosano"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="gitlab"
            className="social-media-block-1 w-inline-block"
          >
            <svg
              width="34px"
              className="hover-social"
              height="34px"
              viewBox="0 0 34 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-679.000000, -58.000000)" fillRule="nonzero">
                  <g transform="translate(140.000000, 56.000000)">
                    <g transform="translate(489.000000, 0.000000)">
                      <g transform="translate(48.000000, 0.000000)">
                        <rect fill="#000000" opacity="0" x="0" y="0" width="38" height="38" />
                        <path
                          d="M19.005,2.38 C28.18675,2.38 35.63,9.8220625 35.63,19.005 C35.63,28.18675 28.18675,35.63 19.005,35.63 C9.8220625,35.63 2.38,28.18675 2.38,19.005 C2.38,9.8220625 9.8220625,2.38 19.005,2.38 Z M26.2700505,9.38 C26.0896045,9.38 25.9293566,9.49387679 25.8720745,9.66281338 L23.4321196,17.0746181 L15.3278804,17.0746181 L12.8900963,9.66281338 C12.8328142,9.49387679 12.6725663,9.38 12.4921203,9.38 C12.3116742,9.38 12.1514264,9.49387679 12.0941442,9.66281338 L8.42191085,20.8137397 C8.3081581,21.155774 8.43129835,21.5311814 8.72654341,21.7424477 L19.38,29.38 L30.0334566,21.7360182 C30.3287017,21.5247519 30.4518419,21.1493445 30.3380891,20.8073102 L30.3380891,20.8137397 L26.6680265,9.66281338 C26.6107444,9.49387679 26.4504966,9.38 26.2700505,9.38 Z"
                          fill="#1e22aa"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/mosano/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
            className="social-media-block-1 w-inline-block"
          >
            <svg
              width="34px"
              className="hover-social"
              height="34px"
              viewBox="0 0 34 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-727.000000, -58.000000)" fillRule="nonzero">
                  <g transform="translate(140.000000, 56.000000)">
                    <g transform="translate(489.000000, 0.000000)">
                      <g transform="translate(96.000000, 0.000000)">
                        <rect fill="#000000" opacity="0" x="0" y="0" width="38" height="38" />
                        <path
                          d="M14.288,26.212875 L14.288,15.093125 L10.590125,15.093125 L10.590125,26.2140625 L14.288,26.2140625 L14.288,26.212875 Z M12.4390625,13.573125 C13.7275,13.573125 14.5314375,12.718125 14.5314375,11.6505625 C14.5076875,10.5604375 13.7275,9.730375 12.4651875,9.730375 C11.198125,9.730375 10.3728125,10.561625 10.3728125,11.6505625 C10.3728125,12.7193125 11.1755625,13.5743125 12.4165,13.5743125 L12.44025,13.5743125 L12.4390625,13.573125 Z M27.6176875,26.212875 L27.6176875,19.8371875 C27.6176875,16.42075 25.7936875,14.8306875 23.362875,14.8306875 C21.39875,14.8306875 20.52,15.9113125 20.03075,16.66775 L20.03075,15.09075 L16.3340625,15.09075 C16.38275,16.13575 16.3340625,26.212875 16.3340625,26.212875 L20.03075,26.212875 L20.03075,20.00225 C20.03075,19.66975 20.0545,19.33725 20.151875,19.102125 C20.417875,18.437125 21.0270625,17.7495625 22.047125,17.7495625 C23.3854375,17.7495625 23.923375,18.7684375 23.923375,20.2635 L23.923375,26.2140625 L27.618875,26.2140625 L27.6176875,26.212875 Z M19,2.375 C28.18175,2.375 35.625,9.8170625 35.625,19 C35.625,28.18175 28.18175,35.625 19,35.625 C9.8170625,35.625 2.375,28.18175 2.375,19 C2.375,9.8170625 9.8170625,2.375 19,2.375 Z"
                          fill="#1e22aa"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/mosanotech/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="facebook"
            className="social-media-block-1 w-inline-block"
          >
            <svg
              width="34px"
              className="hover-social"
              height="34px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>facebook</title>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-776.000000, -59.000000)" fillRule="nonzero">
                  <g transform="translate(140.000000, 56.000000)">
                    <g transform="translate(489.000000, 0.000000)">
                      <g transform="translate(144.000000, 0.000000)">
                        <rect fill="#000000" opacity="0" x="0" y="0" width="38" height="38" />
                        <path
                          d="M34.98128,19.02204 C34.98128,26.6228 29.6704,32.97108 22.5606,34.5914 L22.5606,21.31572 L26.40088,21.31572 L26.40088,16.88264 L22.52032,16.88264 L22.52032,15.89312 C22.52032,13.99312 23.35176,12.4488 25.3308,12.4488 C26.12348,12.4488 26.75656,12.56812 27.27184,12.7262 L27.5082,8.09476 C26.67676,7.85764 25.64848,7.69804 24.30328,7.69804 C22.56136,7.69804 20.463,8.21408 18.95972,9.63832 C17.21704,11.22216 16.50492,13.79476 16.50492,16.12948 L16.50492,16.88188 L13.97184,16.88188 L13.97184,21.31572 L16.50492,21.31572 L16.50492,34.78976 C8.86768,33.5882 3.02024,26.99672 3.02024,19.02204 C3.02024,10.19616 10.17564,3.04076 19.00152,3.04076 C27.8274,3.04076 34.98128,10.19616 34.98128,19.02204 Z"
                          fill="#1e22aa"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="div-block-112">
          <div className="div-block-50">
            <a
              className="menu-title"
              href="https://mosano.eu/cookiespolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies policy
            </a>
            <a
              className="menu-title-left"
              href="https://mosano.eu/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </div>
          <div className="div-block-35">
            <div className="text-block-15 footer-title-right">
              © {new Date().getFullYear()} MOSANO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

