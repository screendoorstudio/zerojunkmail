"use client";

import { useState } from "react";

interface AddressFormProps {
  onSubmit: (address: string) => void;
  isLoading: boolean;
}

export function AddressForm({ onSubmit, isLoading }: AddressFormProps) {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSubmit(address.trim());
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">📍</span>
        <h2
          className="text-xl font-bold text-gray-900"
          style={{ color: "#111827" }}
        >
          Find Your Carrier Route
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
            style={{ color: "#374151" }}
          >
            Enter your full street address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, City, State 12345"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            style={{ color: "#111827", backgroundColor: "#ffffff" }}
            disabled={isLoading}
            autoComplete="street-address"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          style={{ backgroundColor: isLoading || !address.trim() ? "#9ca3af" : "#2563eb" }}
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
              Looking up...
            </>
          ) : (
            <>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Find My Route
            </>
          )}
        </button>
      </form>

      <p
        className="text-xs text-gray-500 mt-3 text-center"
        style={{ color: "#6b7280" }}
      >
        Your address is hashed for privacy. We never store your exact location.
      </p>
    </div>
  );
}
