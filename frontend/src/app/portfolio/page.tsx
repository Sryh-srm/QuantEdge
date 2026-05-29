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
      avgPrice: 0.1,
      currentPrice: 0.15,
    },
  ];
  const totalValue=holdings.reduce(
    (sum,holding)=>
      sum+holding.quantity*holding.currentPrice,0
  );
  const totalCost=holdings.reduce(
    (sum,holding)=>
      sum+holding.quantity*holding.avgPrice,0
  );
  const totalProfit = totalValue -totalCost;
  const totalProfitPercentage=(
    (totalProfit/totalCost)*100
  ).toFixed(2);
  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        Portfolio
      </h1>
     <div className="grid grid-cols-3 gap-6 mb-8">
       <div className="bg-zinc-900 border border-zinc-800 rounder-2x1 p-6">
        <p className="text-zinc-400 text-sm">PortFolio Value</p>
        <h2 className="text-3xl font-bold mt-2">
          ${
            totalValue.toLocaleString(undefined,{maximumFractionDigits:0})
          }
        </h2>  
       </div>
 <div className="bg-zinc-900 border border-zinc-800 rounder-2x1 p-6">
  <p className="text-zinc-400 text-sm">
    Total Profit
  </p>
  <h2 className="text-3xl font-bold mt-2 text-green-400">
    +{totalProfitPercentage}%
  </h2>
 </div>

 <div className="bg-zinc-900 border border-zinc-800 rounder-2x1 p-6">
  <p className="text-zinc-400 text-sm">
    Assets Held
  </p>
  <h2 className="text-3xl font-bold mt-2 ">
    {holdings.length}
  </h2>
 </div>


     </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
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
                P/L
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((holding) => {
              const percent =
                (
                  ((holding.currentPrice -
                    holding.avgPrice) /
                    holding.avgPrice) *
                  100
                ).toFixed(2);

              const positive =
                Number(percent) >= 0;

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
    </div>
  );
}