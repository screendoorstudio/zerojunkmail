interface TLDRBoxProps {
  summary: string;
  keyStatistic?: {
    value: string;
    label: string;
  };
}

export function TLDRBox({ summary, keyStatistic }: TLDRBoxProps) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded mb-3">
            TL;DR
          </span>
          <p className="text-gray-800 text-lg leading-relaxed">{summary}</p>
        </div>
        {keyStatistic && (
          <div className="flex-shrink-0 text-center bg-white p-4 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              {keyStatistic.value}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {keyStatistic.label}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
