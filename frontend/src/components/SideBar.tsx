"use client"
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  CandlestickChart,
  LineChart,
} from "lucide-react";
import { usePathname} from "next/navigation";
const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    name: "Portfolio",
    icon: Briefcase,
    href: "/portfolio",
  },
  {
    name: "Markets",
    icon: CandlestickChart,
    href: "/markets",
  },
  {
    name: "Analytics",
    icon: LineChart,
    href: "/analytics",
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
          const pathname = usePathname();
          return (
            <Link
              key={item.name}
              href={item.href}
             className={`flex items-center gap-3 p-3 rounded-xl transition ${
  pathname === item.href
    ? "bg-green-500/20 text-green-400"
    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
}`}
            >
              <Icon size={25} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}