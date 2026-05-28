import {
  LayoutDashboard,
  Briefcase,
  CandlestickChart,
  LineChart,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Portfolio",
    icon: Briefcase,
  },
  {
    name: "Markets",
    icon: CandlestickChart,
  },
  {
    name: "Analytics",
    icon: LineChart,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        QuantEdge
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition cursor-pointer"
            >
              <Icon size={25} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}