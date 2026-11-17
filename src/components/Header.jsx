import { NAV_ITEMS } from "../data/navigation";

export default function Header({ activeTab }) {
  return (
    <header className="md:sticky top-0 z-40 bg-zzz-black/95 backdrop-blur-md border-b-4 border-white px-4 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-center gap-3 xl:gap-4">

        <a href="#/profil" aria-label="Florian Chen, retour au profil" className="flex items-center gap-3 group shrink-0">
          <div className="bg-zzz-yellow text-zzz-black font-display italic text-xl md:text-2xl px-3 py-1 border-2 border-white shadow-hard-orange -skew-x-12 group-hover:bg-zzz-orange transition-colors whitespace-nowrap">
            PROXY // FC
          </div>
          <div>
            <span className="font-display text-lg md:text-xl tracking-wider uppercase block leading-none">Florian.Dev</span>
            <span className="text-xs font-bold text-zzz-yellow tracking-widest uppercase">Portfolio 2026</span>
          </div>
        </a>

        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#/${item.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 py-1.5 md:px-4 md:py-2 font-tech font-bold text-xs md:text-sm uppercase tracking-wider border-2 -skew-x-12 transition-all duration-150 flex items-center gap-2 ${
                      isActive
                        ? "bg-zzz-yellow text-zzz-black border-white shadow-hard-white md:-translate-y-1 md:scale-105"
                        : "bg-zzz-panel text-gray-200 border-gray-500 hover:border-zzz-yellow hover:text-white"
                    }`}
                  >
                    <Icon size={16} className="skew-x-12 hidden 2xl:block" aria-hidden="true" />
                    <span className="skew-x-12">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
