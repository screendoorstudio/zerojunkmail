import { PETITION_URL } from "@/lib/constants/statistics";

interface PetitionCTAProps {
  variant?: "hero" | "inline" | "compact";
  className?: string;
}

export function PetitionCTA({ variant = "inline", className = "" }: PetitionCTAProps) {
  if (variant === "hero") {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg ${className}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Help Us Reach 2,500 Signatures
        </h2>
        <p className="text-lg mb-6 text-blue-100">
          Join thousands demanding the right to opt out of USPS advertising mail.
          Every signature brings us closer to change.
        </p>
        <a
          href={PETITION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition-colors shadow-md"
          style={{ color: '#111827', backgroundColor: '#facc15' }}
        >
          Sign the Petition Now
        </a>
        <p className="text-sm mt-4 text-blue-200">
          Opens Change.org in a new tab
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={PETITION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${className}`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        Sign the Petition
      </a>
    );
  }

  // Default inline variant
  return (
    <div className={`bg-gray-100 border border-gray-200 p-6 rounded-lg my-8 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Ready to take action?
          </h3>
          <p className="text-gray-600">
            Sign the petition to demand opt-out rights for USPS advertising mail.
          </p>
        </div>
        <a
          href={PETITION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Sign the Petition
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
