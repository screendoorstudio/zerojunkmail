"use client";

import { useState } from "react";

const EMAIL_TEMPLATE = `Hello,

I'm writing to request that [COMPANY] permanently remove my address from all direct mail lists, including your internal house list and any rented or third-party lists used to source your mailings.

The name and address to remove as they appear on a recently delivered unwanted mail piece:

[NAME]
[ADDRESS]
[CITY ST ZIP]

A few notes for your direct mail team:

\u2022 I have never subscribed to marketing communications from [COMPANY].
\u2022 This address is registered with the National Do Not Mail list (DMAchoice), so standard list hygiene should already be suppressing it.
\u2022 Since I haven't opted in with you directly, the source is most likely a rented or co-op list. Please also flag this address with your list partners so it's suppressed at the source.

Please confirm in writing once the suppression is complete. I've attached an image of the mail piece for reference.

Thank you,
[NAME]`;

interface UnsubscribeEmailTemplateProps {
  heading?: string;
  compact?: boolean;
}

export function UnsubscribeEmailTemplate({
  heading = "Copy-and-Paste Email: Ask an Advertiser to Remove You",
  compact = false,
}: UnsubscribeEmailTemplateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_TEMPLATE;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <section
      className={`bg-blue-50 border border-blue-200 rounded-xl ${compact ? "p-6" : "p-8"}`}
      style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#2563eb" }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "#ffffff" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3
            className="text-xl font-bold text-gray-900 mb-1"
            style={{ color: "#111827" }}
          >
            {heading}
          </h3>
          <p className="text-sm text-gray-700" style={{ color: "#374151" }}>
            Companies make it hard to find their email and often push you toward
            a contact form. A direct email gives you a dated, documented record
            of your request.
          </p>
        </div>
      </div>

      <div
        className="bg-white rounded-lg border border-blue-200 p-4 mb-4 text-sm"
        style={{ backgroundColor: "#ffffff", borderColor: "#bfdbfe" }}
      >
        <p className="font-semibold text-gray-900 mb-1" style={{ color: "#111827" }}>
          Where to find an advertiser&apos;s email address
        </p>
        <p className="text-gray-700" style={{ color: "#374151" }}>
          Scroll to the footer of the company&apos;s website and look at the
          <strong> Privacy Policy</strong>,{" "}
          <strong>Terms &amp; Conditions</strong>, or{" "}
          <strong>CCPA / Your Privacy Choices</strong> pages. Privacy pages in
          particular are legally required to list a contact for data and
          marketing requests, usually a dedicated{" "}
          <code style={{ color: "#1d4ed8" }}>privacy@</code>,{" "}
          <code style={{ color: "#1d4ed8" }}>unsubscribe@</code>, or
          <code style={{ color: "#1d4ed8" }}> dpo@</code> inbox. If you cannot
          find one, the general <code style={{ color: "#1d4ed8" }}>info@</code>{" "}
          or <code style={{ color: "#1d4ed8" }}>customerservice@</code> address
          works as a fallback.
        </p>
      </div>

      <div className="relative">
        <pre
          className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-800 whitespace-pre-wrap break-words leading-relaxed font-sans overflow-x-auto"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#e5e7eb",
            color: "#1f2937",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          }}
        >
{EMAIL_TEMPLATE}
        </pre>

        <button
          type="button"
          onClick={handleCopy}
          className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
          style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          aria-live="polite"
        >
          {copied ? (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied to clipboard
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy email template
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-600" style={{ color: "#4b5563" }}>
        Replace the bracketed fields ([COMPANY], [NAME], [ADDRESS], [CITY ST
        ZIP]) before sending. Attach a photo of the mail piece if you have one,
        and keep the reply for your records.
      </p>
    </section>
  );
}
