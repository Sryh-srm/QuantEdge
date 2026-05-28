"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { day: "Mon", price: 42000 },
  { day: "Tue", price: 43500 },
  { day: "Wed", price: 42800 },
  { day: "Thu", price: 45000 },
  { day: "Fri", price: 46200 },
  { day: "Sat", price: 44750 },
  { day: "Sun", price: 47000 },
];

function CustomTooltip({
  active,
  payload,
  label,
}: any) {
  if (!active || !payload?.length) return null;

  const currentPrice = payload[0].value;

  const currentIndex = data.findIndex(
    (item) => item.day === label
  );

  const previousPrice =
    currentIndex > 0
      ? data[currentIndex - 1].price
      : currentPrice;

  const change = currentPrice - previousPrice;

  const percentChange =
    ((change / previousPrice) * 100).toFixed(2);

  const positive = change >= 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-xl">
      <p className="text-white font-semibold mb-2">
        {label}
      </p>

      <p className="text-zinc-300">
        Price:
        <span className="text-white ml-2">
          ${currentPrice.toLocaleString()}
        </span>
      </p>

      <p
        className={`mt-2 font-medium ${
          positive
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {positive ? "▲" : "▼"}{" "}
        {Math.abs(change).toLocaleString()}
        {" ("}
        {positive ? "+" : "-"}
        {Math.abs(Number(percentChange))}%
        {")"}
      </p>
    </div>
  );
}
export default function PriceChart() {
  return (
    <div className="bg-zinc-900 border  border-zinc-800 rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-semibold">
          BTC Price Overview
        </h2>

        <p className="text-green-400 font-medium">
          +12.04%
        </p>
      </div>

      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
  data={data}
  margin={{
    top: 10,
    right: 10,
    left: 10,
    bottom: 0,
  }}
>
            <defs>
              <linearGradient
                id="colorPrice"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22c55e"
                  stopOpacity={0.4}
                />

                <stop
                  offset="75%"
                  stopColor="#22c55e"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis
  dataKey="day"
  stroke="#71717a"
  interval={0}
  tickLine={false}
  axisLine={false}
  padding={{ left: 4, right: 4 }}
/>
            

          <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="price"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#colorPrice)"
              activeDot={{
                r: 8,
                fill: "#22c55e",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}