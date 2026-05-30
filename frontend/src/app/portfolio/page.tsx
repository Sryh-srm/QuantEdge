"use client"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
export default function PortfolioPage() {
  const holdings = [
    {
      asset: "BTC",
      quantity: 0.45,
      avgPrice: 41000,
      currentPrice: 47000,
    },
    {
      asset: "ETH",
      quantity: 2,
      avgPrice: 2200,
      currentPrice: 2620,
    },
    {
      asset: "SOL",
      quantity: 15,
      avgPrice: 85,
      currentPrice: 108,
    },
    {
      asset: "DOGE",
      quantity: 1000,
      avgPrice: 100,
      currentPrice:23,
    },
  ];

  const COLORS = [
    "#f7931a",
    "#627eea",
    "#9945ff",
    "#dd194a",
  ];

  const totalValue = holdings.reduce(
    (sum, holding) =>
      sum + holding.quantity * holding.currentPrice,
    0
  );

  const totalCost = holdings.reduce(
    (sum, holding) =>
      sum + holding.quantity * holding.avgPrice,
    0
  );

  const totalProfit = totalValue - totalCost;

  const totalProfitPercentage = (
    (totalProfit / totalCost) *
    100
  ).toFixed(2);

  const allocationData = holdings.map(
    (holding) => ({
      name: holding.asset,
      value:
        holding.quantity *
        holding.currentPrice,
    })
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Portfolio
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Portfolio Value
          </p>

          <h2 className="text-3xl font-bold mt-2">
            $
            {totalValue.toLocaleString(
              undefined,
              {
                maximumFractionDigits: 0,
              }
            )}
          </h2>

          <p className="text-green-400 mt-2 text-sm">
            +$523 Today
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Total Profit
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-400">
            +{totalProfitPercentage}%
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">
            Assets Held
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {holdings.length}
          </h2>
        </div>
      </div>

      {/* Table + Pie Chart */}
      <div className="grid grid-cols-3 gap-6">
        {/* Holdings Table */}
        <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-950">
              <tr>
                <th className="text-left p-4">
                  Asset
                </th>

                <th className="text-left p-4">
                  Quantity
                </th>

                <th className="text-left p-4">
                  Avg Price
                </th>

                <th className="text-left p-4">
                  Current Price
                </th>

                <th className="text-left p-4">
                  Value
                </th>

                <th className="text-left p-4">
                  P/L
                </th>
              </tr>
            </thead>

            <tbody>
              {holdings.map((holding) => {
                const percent = (
                  ((holding.currentPrice -
                    holding.avgPrice) /
                    holding.avgPrice) *
                  100
                ).toFixed(2);

                const positive =
                  Number(percent) >= 0;

                const value =
                  holding.quantity *
                  holding.currentPrice;

                return (
                  <tr
                    key={holding.asset}
                    className="border-t border-zinc-800"
                  >
                    <td className="p-4">
                      {holding.asset}
                    </td>

                    <td className="p-4">
                      {holding.quantity}
                    </td>

                    <td className="p-4">
                      $
                      {holding.avgPrice.toLocaleString()}
                    </td>

                    <td className="p-4">
                      $
                      {holding.currentPrice.toLocaleString()}
                    </td>

                    <td className="p-4">
                      $
                      {value.toLocaleString(
                        undefined,
                        {
                          maximumFractionDigits: 0,
                        }
                      )}
                    </td>

                    <td
                      className={`p-4 font-medium ${
                        positive
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {positive ? "+" : ""}
                      {percent}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Allocation Pie */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Portfolio Allocation
          </h2>

          <div className="h-72">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
 <PieChart>
  <Pie
    data={allocationData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={90}
    innerRadius={40}
  >
    {allocationData.map((entry, index) => (
      <Cell
        key={index}
        fill={COLORS[index % COLORS.length]}
      />
    ))}
  </Pie>

  {/* Center Text */}
  <text
    x="50%"
    y="46%"
    textAnchor="middle"
    dominantBaseline="middle"
    fill="white"
    fontSize="18"
    fontWeight="bold"
  >
    $
    {(
      totalValue / 1000
    ).toFixed(1)}
    K
  </text>

  <text
    x="50%"
    y="56%"
    textAnchor="middle"
    dominantBaseline="middle"
    fill="#9ca3af"
    fontSize="11"
  >
    Total Value
  </text>

  <Tooltip
    formatter={(value:any) => [
      `$${Number(value).toLocaleString()}`,
      "Value",
    ]}
  />
</PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3 mt-4">
            {allocationData.map(
              (item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index],
                      }}
                    />

                    <span>
                      {item.name}
                    </span>
                  </div>

                  <span className="text-zinc-400">
                    {(
                      (item.value /
                        totalValue) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
