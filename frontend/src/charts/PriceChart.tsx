"use client";
import {
TrendingDown,TrendingUp,
} from "lucide-react"
import { useState } from "react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
type ChartPoint={
  day:string;
  price:number;
};
const marketData = {
  BTC: {
    "1D": [
      { day: "9AM", price: 46500 },
      { day: "11AM", price: 46800 },
      { day: "1PM", price: 47000 },
      { day: "3PM", price: 46900 },
      { day: "5PM", price: 47200 },
    ],

    "7D": [
      { day: "Mon", price: 42000 },
      { day: "Tue", price: 43500 },
      { day: "Wed", price: 42800 },
      { day: "Thu", price: 45000 },
      { day: "Fri", price: 46200 },
      { day: "Sat", price: 44750 },
      { day: "Sun", price: 47000 },
    ],

    "1M": [
      { day: "W1", price: 39000 },
      { day: "W2", price: 41000 },
      { day: "W3", price: 44000 },
      { day: "W4", price: 47000 },
    ],

    "3M": [
      { day: "M1", price: 35000 },
      { day: "M2", price: 39000 },
      { day: "M3", price: 47000 },
    ],

    "1Y": [
      { day: "Jan", price: 28000 },
      { day: "Apr", price: 32000 },
      { day: "Jul", price: 38000 },
      { day: "Oct", price: 43000 },
      { day: "Dec", price: 47000 },
    ],
  },

  ETH: {
    "1D": [
      { day: "9AM", price: 2450 },
      { day: "11AM", price: 2480 },
      { day: "1PM", price: 2510 },
      { day: "3PM", price: 2490 },
      { day: "5PM", price: 2550 },
    ],

    "7D": [
      { day: "Mon", price: 2400 },
      { day: "Tue", price: 2450 },
      { day: "Wed", price: 2420 },
      { day: "Thu", price: 2550 },
      { day: "Fri", price: 2580 },
      { day: "Sat", price: 2520 },
      { day: "Sun", price: 2620 },
    ],

    "1M": [
      { day: "W1", price: 2100 },
      { day: "W2", price: 2250 },
      { day: "W3", price: 2450 },
      { day: "W4", price: 2620 },
    ],

    "3M": [
      { day: "M1", price: 1800 },
      { day: "M2", price: 2200 },
      { day: "M3", price: 2620 },
    ],

    "1Y": [
      { day: "Jan", price: 1400 },
      { day: "Apr", price: 1800 },
      { day: "Jul", price: 2100 },
      { day: "Oct", price: 2400 },
      { day: "Dec", price: 2620 },
    ],
  },

  SOL: {
    "1D": [
      { day: "9AM", price: 95 },
      { day: "11AM", price: 97 },
      { day: "1PM", price: 100 },
      { day: "3PM", price: 98 },
      { day: "5PM", price: 108 },
    ],

    "7D": [
      { day: "Mon", price: 90 },
      { day: "Tue", price: 95 },
      { day: "Wed", price: 92 },
      { day: "Thu", price: 98 },
      { day: "Fri", price: 104 },
      { day: "Sat", price: 100 },
      { day: "Sun", price: 108 },
    ],

    "1M": [
      { day: "W1", price: 75 },
      { day: "W2", price: 85 },
      { day: "W3", price: 95 },
      { day: "W4", price: 108 },
    ],

    "3M": [
      { day: "M1", price: 60 },
      { day: "M2", price: 80 },
      { day: "M3", price: 108 },
    ],

    "1Y": [
      { day: "Jan", price: 35 },
      { day: "Apr", price: 55 },
      { day: "Jul", price: 75 },
      { day: "Oct", price: 95 },
      { day: "Dec", price: 108 },
    ],
  },

  DOGE: {
    "1D": [
      { day: "9AM", price: 0.12 },
      { day: "11AM", price: 0.125 },
      { day: "1PM", price: 0.13 },
      { day: "3PM", price: 0.128 },
      { day: "5PM", price: 0.132 },
    ],

    "7D": [
      { day: "Mon", price: 0.12 },
      { day: "Tue", price: 0.13 },
      { day: "Wed", price: 0.125 },
      { day: "Thu", price: 0.14 },
      { day: "Fri", price: 0.145 },
      { day: "Sat", price: 0.142 },
      { day: "Sun", price: 0.15 },
    ],

    "1M": [
      { day: "W1", price: 0.09 },
      { day: "W2", price: 0.11 },
      { day: "W3", price: 0.13 },
      { day: "W4", price: 0.15 },
    ],

    "3M": [
      { day: "M1", price: 0.06 },
      { day: "M2", price: 0.10 },
      { day: "M3", price: 0.15 },
    ],

    "1Y": [
      { day: "Jan", price: 0.03 },
      { day: "Apr", price: 0.06 },
      { day: "Jul", price: 0.09 },
      { day: "Oct", price: 0.12 },
      { day: "Dec", price: 0.15 },
    ],
  },

};


export default function PriceChart() {

  const [selectedAsset, setSelectedAsset] =
    useState("BTC");
  const timeframes = ["1D", "7D", "1M", "3M", "1Y"];

const [selectedTimeframe, setSelectedTimeframe] =
  useState("7D");

  const data =(
    marketData[
      selectedAsset as keyof typeof marketData
    ] as any )[selectedTimeframe];

  const firstPrice =data[0].price;
  const lastPrice =data[data.length-1].price;
  const percentChange=(
    ((lastPrice-firstPrice)/firstPrice)*100).toFixed(2);
  const positive = Number(percentChange)>=0  
  
  function CustomTooltip({
    active,
    payload,
    label,
  }: any) {
    if (!active || !payload?.length)
      return null;

    const currentPrice = payload[0].value;

    const currentIndex = data.findIndex(
      (item:ChartPoint) => item.day === label
    );

    const previousPrice =
      currentIndex > 0
        ? data[currentIndex - 1].price
        : currentPrice;

    const change =
      currentPrice - previousPrice;

    const percentChange =
      (
        (change / previousPrice) *
        100
      ).toFixed(2);

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
          {Math.abs(
            Number(percentChange)
          )}
          %
          {")"}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <select
          value={selectedAsset}
          onChange={(e) =>
            setSelectedAsset(
              e.target.value
            )
          }
          className="bg-zinc-950 text-white border border-zinc-800 rounded-lg px-3 py-2 outline-none"
        >
          <option value="BTC">
            BTC
          </option>
          <option value="ETH">
            ETH
          </option>
          <option value="SOL">
            SOL
          </option>
          <option value="DOGE">DOGE</option>
        </select>

  <p className="font-medium flex items-center gap-2">
  {positive ? (
    <TrendingUp
      size={18}
      className="text-green-400"
    />
  ) : (
    <TrendingDown
      size={18}
      className="text-red-400"
    />
  )}

  <span
    className={
      positive
        ? "text-green-400"
        : "text-red-400"
    }
  >
    {Math.abs(Number(percentChange))}%
  </span>
</p>

      </div>
      <div className="flex gap-2 mb-4">
  {timeframes.map((timeframe) => (
    <button
      key={timeframe}
      onClick={() =>
        setSelectedTimeframe(timeframe)
      }
      className={`px-3 py-1 rounded-lg text-sm transition-all ${
        selectedTimeframe === timeframe
          ? "bg-green-500 text-black font-semibold"

          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
      }`}
    >
      {timeframe}
    </button>
  ))}
</div>
      <div className="h-96 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
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
              padding={{
                left: 4,
                right: 4,
              }}
            />

            <Tooltip
              content={
                <CustomTooltip />
              }
            />

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
