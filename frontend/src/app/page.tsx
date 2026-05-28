import Sidebar from "@/components/SideBar";
import Navbar from "@/components/NavBar";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/charts/PriceChart"
import MarketTable from "@/components/MarketTable";
export default function Home() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6">
            <MetricCard
              title="Portfolio Value"
              value="$124,320"
              change="+12.4%"
            />

            <MetricCard
              title="24H Profit"
              value="$2,430"
              change="+4.2%"
            />

            <MetricCard
              title="Assets"
              value="18"
              change="+2 Added"
            />
            <PriceChart/>
            <MarketTable/>
          </div>
        </div>
      </main>
    </div>
  );
}