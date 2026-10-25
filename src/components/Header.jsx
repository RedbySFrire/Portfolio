import { NAV_ITEMS } from "../data/navigation";

export default function Header({ activeTab, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 bg-zzz-black/90 backdrop-blur-md border-b-4 border-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">

        <div onClick={() => onNavigate("profil")} className="cursor-pointer flex items-center gap-3 group">
          <div className="bg-zzz-yellow text-zzz-black font-display italic text-2xl px-3 py-1 border-2 border-white shadow-hard-orange -skew-x-12 group-hover:bg-zzz-orange group-hover:text-white transition-colors">
            PROXY // FC
          </div>
          <div>
            <span className="font-display text-xl tracking-wider uppercase block leading-none">Florian.Dev</span>
            <span className="text-xs font-bold text-zzz-yellow tracking-widest uppercase">Proxy LVL. 2026</span>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-2 md:gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 font-tech font-bold text-sm uppercase tracking-wider border-2 -skew-x-12 transition-all duration-150 flex items-center gap-2 ${
                  isActive
                    ? "bg-zzz-yellow text-zzz-black border-white shadow-hard-white -translate-y-1 scale-105"
                    : "bg-zzz-panel text-gray-300 border-gray-600 hover:border-zzz-yellow hover:text-white"
                }`}
              >
                <Icon size={16} className="skew-x-12" />
                <span className="skew-x-12">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}