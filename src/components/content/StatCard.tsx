interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  source?: string;
  color?: "red" | "green" | "blue" | "amber";
}

const colorClasses = {
  red: "border-red-500 text-red-600",
  green: "border-green-500 text-green-600",
  blue: "border-blue-500 text-blue-600",
  amber: "border-amber-500 text-amber-600",
};

export function StatCard({
  value,
  label,
  description,
  source,
  color = "red",
}: StatCardProps) {
  return (
    <div className={`bg-white border-t-4 ${colorClasses[color].split(" ")[0]} p-6 rounded-lg shadow-md`}>
      <div className={`text-4xl font-bold ${colorClasses[color].split(" ")[1]} mb-2`}>
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      {description && (
        <p className="text-gray-600 text-sm mb-2">{description}</p>
      )}
      {source && (
        <p className="text-gray-400 text-xs">Source: {source}</p>
      )}
    </div>
  );
}

interface StatGridProps {
  children: React.ReactNode;
}

export function StatGrid({ children }: StatGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {children}
    </div>
  );
}
