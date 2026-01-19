"use client";

import { useState } from "react";

interface OptOutButtonProps {
  onOptOut: (email?: string) => Promise<void>;
  isLoading: boolean;
  hasOptedOut: boolean;
  milestoneReached?: number;
}

export function OptOutButton({
  onOptOut,
  isLoading,
  hasOptedOut,
  milestoneReached,
}: OptOutButtonProps) {
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOptOut = async () => {
    await onOptOut(email || undefined);
    setShowSuccess(true);
  };

  // Show success state
  if (showSuccess || hasOptedOut) {
    return (
      <div
        className="bg-green-50 border border-green-200 rounded-xl p-6"
        style={{ backgroundColor: "#f0fdf4" }}
      >
        <div className="text-center">
          <div className="text-4xl mb-3">
            {milestoneReached ? "🎉" : "✋"}
          </div>
          <h3
            className="text-xl font-bold text-green-800 mb-2"
            style={{ color: "#166534" }}
          >
            {milestoneReached
              ? `${milestoneReached}% Milestone Reached!`
              : "You're Opted Out!"}
          </h3>
          <p className="text-green-700 mb-4" style={{ color: "#15803d" }}>
            Your household is now registered against EDDM junk mail delivery.
          </p>

          {/* Share buttons */}
          <div className="border-t border-green-200 pt-4 mt-4">
            <p
              className="text-sm text-green-700 mb-3"
              style={{ color: "#15803d" }}
            >
              Help reach 50% — share with your neighbors!
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    "I just opted out of EDDM junk mail. You can too: https://zerojunkmail.org/eddm-do-not-deliver"
                  );
                  window.open(`https://twitter.com/intent/tweet?text=${text}`);
                }}
                className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition text-sm font-medium"
              >
                Share on X
              </button>
              <button
                onClick={() => {
                  const url = encodeURIComponent(
                    "https://zerojunkmail.org/eddm-do-not-deliver"
                  );
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${url}`
                  );
                }}
                className="px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition text-sm font-medium"
              >
                Share on Facebook
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://zerojunkmail.org/eddm-do-not-deliver"
                  );
                  alert("Link copied to clipboard!");
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:opacity-90 transition text-sm font-medium"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-red-50 border border-red-200 rounded-xl p-6"
      style={{ backgroundColor: "#fef2f2" }}
    >
      <div className="text-center">
        <h3
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ color: "#111827" }}
        >
          Ready to Opt Out?
        </h3>
        <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
          Register your household&apos;s opposition to EDDM junk mail.
        </p>

        {/* Optional email input */}
        {showEmailInput ? (
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (optional, for updates)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
              style={{ color: "#111827", backgroundColor: "#ffffff" }}
            />
            <p
              className="text-xs text-gray-500 mt-1"
              style={{ color: "#6b7280" }}
            >
              We&apos;ll only email you when your route reaches 50% majority.
            </p>
          </div>
        ) : (
          <button
            onClick={() => setShowEmailInput(true)}
            className="text-sm text-blue-600 hover:text-blue-700 mb-4"
            style={{ color: "#2563eb" }}
          >
            + Add email for updates (optional)
          </button>
        )}

        <button
          onClick={handleOptOut}
          disabled={isLoading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
          style={{ backgroundColor: isLoading ? "#9ca3af" : "#dc2626" }}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Registering...
            </>
          ) : (
            <>
              ✋ Do Not Deliver — Opt Out My Household
            </>
          )}
        </button>

        <p
          className="text-xs text-gray-500 mt-3"
          style={{ color: "#6b7280" }}
        >
          This is a symbolic opt-out. USPS does not currently honor opt-out
          requests for EDDM mail.
        </p>
      </div>
    </div>
  );
}
