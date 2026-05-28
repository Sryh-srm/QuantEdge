type Props = {
  title: string;
  value: string;
  change: string;
};

export default function MetricCard({
  title,
  value,
  change,
}: Props) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-lg shadow-black/30">
      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>

      <p className="text-green-400 mt-3">
        {change}
      </p>
    </div>
  );
}