export default function Navbar() {
  return (
    <div className="w-full h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800" />
      </div>
    </div>
  );
}