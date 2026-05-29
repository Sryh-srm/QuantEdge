import {
  TrendingUp,
  Activity,
  Brain,
  Shield,
} from "lucide-react";

export default function AnalyticsPage() {
  const analytics = [
    {
      title: "Market Trend",
      value: "Bullish",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      title: "Volatility",
      value: "Moderate",
      icon: Activity,
      color: "text-yellow-400",
    },
    {
      title: "ML Forecast",
      value: "+4.2%",
      icon: Brain,
      color: "text-blue-400",
    },
    {
      title: "Risk Score",
      value: "6.8 / 10",
      icon: Shield,
      color: "text-red-400",
    },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {analytics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-zinc-400">
                  {item.title}
                </p>

                <Icon
                  className={item.color}
                  size={24}
                />
              </div>

              <h2
                className={`text-3xl font-bold mt-4 ${item.color}`}
              >
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          AI Insight
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Bitcoin remains in a bullish trend
          with improving momentum and moderate
          volatility. Current indicators suggest
          continued upside potential, while risk
          remains manageable under present market
          conditions.
        </p>
      </div>
    </div>
  );
}