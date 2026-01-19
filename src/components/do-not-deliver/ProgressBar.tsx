"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  percent: number;
  showMilestones?: boolean;
}

export function ProgressBar({
  current,
  total,
  percent,
  showMilestones = true,
}: ProgressBarProps) {
  // Determine color based on percentage
  const getBarColor = () => {
    if (percent >= 50) return "bg-green-500";
    if (percent >= 25) return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div className="w-full">
      {/* Progress bar container */}
      <div className="relative">
        <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${getBarColor()} transition-all duration-500 ease-out`}
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>

        {/* Milestone markers */}
        {showMilestones && (
          <div className="absolute inset-0 flex items-center">
            {[25, 50, 75].map((milestone) => (
              <div
                key={milestone}
                className="absolute h-6 w-0.5 bg-gray-400"
                style={{ left: `${milestone}%` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stats display */}
      <div className="flex justify-between items-center mt-2">
        <span
          className="text-sm text-gray-600"
          style={{ color: "#4b5563" }}
        >
          <strong style={{ color: "#111827" }}>{current.toLocaleString()}</strong> / {total.toLocaleString()} households
        </span>
        <span
          className={`font-bold text-lg ${
            percent >= 50 ? "text-green-600" : percent >= 25 ? "text-yellow-600" : "text-blue-600"
          }`}
          style={{
            color:
              percent >= 50 ? "#16a34a" : percent >= 25 ? "#ca8a04" : "#2563eb",
          }}
        >
          {percent}%
        </span>
      </div>

      {/* Milestone labels */}
      {showMilestones && (
        <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      )}
    </div>
  );
}
