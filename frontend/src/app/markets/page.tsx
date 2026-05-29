"use client";

import { useState } from "react";

export default function MarketsPage() {
  const [search, setSearch] = useState("");

  const marketData = {
    Crypto: ["BTC", "ETH", "SOL", "DOGE"],
    Stocks: ["AAPL", "NVDA", "TSLA"],
    Forex: ["USD/INR", "EUR/USD", "GBP/USD"],
    Commodities: [
      "Gold",
      "Silver",
      "Crude Oil",
    ],
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Markets
      </h1>

      <input
        type="text"
        placeholder="Search Assets..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-8 outline-none"
      />

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(marketData).map(
          ([category, assets]) => {
            const filteredAssets =
              assets.filter((asset) =>
                asset
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
              );

            return (
              <div
                key={category}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >
                <h2 className="text-xl font-semibold mb-4">
                  {category}
                </h2>

                <div className="space-y-2">
                  {filteredAssets.map(
                    (asset) => (
                      <div
                        key={asset}
                        className="bg-zinc-950 rounded-lg p-3 hover:bg-zinc-800 transition cursor-pointer"
                      >
                        {asset}
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}