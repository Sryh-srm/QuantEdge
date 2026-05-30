"use client";

import { useState } from "react";
import {
  Bitcoin,
  Landmark,
  BarChart3,
  Package,
  TrendingUp,
  Dog,
  Hexagon,
  Cpu,
  Zap,
  Trophy,
  Medal,
  Fuel,
} from "lucide-react";

export default function MarketsPage() {
  const [search, setSearch] = useState("");

  const marketData = {
    Crypto: [
      {
        symbol: "BTC",
        name:"Bitcoin",
        price: "$108,542",
        change: "+2.4%",
      },
      {
        symbol: "ETH",
        name:"Ethereum",
        price: "$2,620",
        change: "+1.2%",
      },
      {
        symbol: "SOL",
        name:"Solana",
        price: "$108",
        change: "+4.8%",
      },
      {
        symbol: "DOGE",
        name:"Dogecoin",
        price: "$0.45",
        change: "-1.5%",
      },
    ],

    Stocks: [
      {
        symbol: "AAPL",
        name:"Apple",
        price: "$212",
        change: "+0.8%",
      },
      {
        symbol: "NVDA",name:"Nvidia",
        price: "$1245",
        change: "+3.1%",
      },
      {
        symbol: "TSLA",name:"Tesla",
        price: "$198",
        change: "-0.9%",
      },
    ],

    Forex: [
      {
        symbol: "USD/INR",
        name:"US Dollar / Indian Rupee",
        price: "₹83.2",
        change: "+0.2%",
      },
      {
        symbol: "EUR/USD",name:"Euro / US Dollar",
        price: "1.08",
        change: "-0.1%",
      },
      {
        symbol: "GBP/USD", name:"Great Britain Pound / US Dollar",
        price: "1.27",
        change: "+0.3%",
      },
    ],

    Commodities: [
      {
        symbol: "Gold",name:"Gold",
        price: "$2340",
        change: "+0.5%",
      },
      {
        symbol: "Silver",name:"Silver",
        price: "$29.1",
        change: "-0.3%",
      },
      {
        symbol: "Crude Oil",name:"Crude Oil / Fuel",
        price: "$78.4",
        change: "+1.4%",
      },
    ],
  };

  const categoryIcons = {
    Crypto: <Bitcoin size={22} />,
    Stocks: <BarChart3 size={22} />,
    Forex: <Landmark size={22} />,
    Commodities: <Package size={22} />,
  };

  const assetIcons: Record<string, React.ReactNode> = {
    BTC: <Bitcoin size={20} />,
    ETH: <Hexagon size={20} />,
    SOL: <Hexagon size={20} />,
    DOGE: <Dog size={20} />,

    AAPL: <TrendingUp size={20} />,
    NVDA: <Cpu size={20} />,
    TSLA: <Zap size={20} />,

    "USD/INR": <Landmark size={20} />,
    "EUR/USD": <Landmark size={20} />,
    "GBP/USD": <Landmark size={20} />,

    Gold: <Trophy size={20} />,
    Silver: <Medal size={20} />,
    "Crude Oil": <Fuel size={20} />,
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
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-8 outline-none focus:border-green-500/50 transition-colors"
      />

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(marketData).map(
          ([category, assets]) => {
          const filteredAssets =
  assets.filter((asset) => {
    const query = search.toLowerCase();

    return (
      asset.symbol
        .toLowerCase()
        .includes(query) ||
      asset.name
        .toLowerCase()
        .includes(query)
    );
  });

            return (
              <div
                key={category}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >
                <h2 className="flex items-center gap-2 text-xl font-semibold mb-5">
                  {
                    categoryIcons[
                      category as keyof typeof categoryIcons
                    ]
                  }

                  {category}

                  <span className="text-zinc-500 text-sm font-normal">
                    ({assets.length})
                  </span>
                </h2>

                <div className="space-y-3">
                  {filteredAssets.map(
                    (asset) => {
                      const positive =
                        asset.change.startsWith(
                          "+"
                        );

                      return (
                        <div
                          key={asset.symbol}
                          className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700">
                                {
                                  assetIcons[
                                    asset.symbol
                                  ]
                                }
                              </div>

                              <div>
                                <p className="font-semibold text-lg">
                                  {asset.symbol}
                                </p>

                                <p className="text-zinc-500 text-sm">
                                  {asset.name}
                                </p>
                              </div>
                            </div>

                            <div className="text-right">
                              <p className="font-semibold">
                                {asset.price}
                              </p>

                              <p
                                className={`text-sm ${
                                  positive
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                {asset.change}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
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