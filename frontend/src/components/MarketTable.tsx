const assets = [
  {
    symbol: "BTC",
    price: "$47,200",
    change: "+3.4%",
  },
  {
    symbol: "ETH",
    price: "$2,850",
    change: "+2.1%",
  },
  {
    symbol: "SOL",
    price: "$102",
    change: "+6.8%",
  },
];

export default function MarketTable() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">
      <h2 className="text-white text-xl font-semibold mb-6">
        Market Overview
      </h2>

      <div className="space-y-4">
        {assets.map((asset) => (
          <div
            key={asset.symbol}
            className="flex items-center justify-between bg-zinc-950 p-4 rounded-xl"
          >
            <div>
              <h3 className="text-white font-semibold">
                {asset.symbol}
              </h3>
            </div>

            <div className="text-white">
              {asset.price}
            </div>

            <div className="text-green-400">
              {asset.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}