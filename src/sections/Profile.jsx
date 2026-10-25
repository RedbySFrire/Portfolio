import { motion } from "framer-motion";
import { Terminal, Zap, ArrowUpRight } from "lucide-react";
import { pageVariants } from "../animations";

export default function Profile({ onNavigate }) {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-zzz-yellow border-4 border-white translate-x-4 translate-y-4 -skew-x-6" />
          <div className="relative bg-zzz-panel border-4 border-white p-3 -skew-x-6 overflow-hidden">
            <div className="bg-zzz-orange text-zzz-black font-display text-xs px-2 py-0.5 uppercase mb-2 flex justify-between">
              <span>ID // 93300-FC</span>
              <span>RANG S</span>
            </div>
            <img
              src="./Profile/profile.jpg"
              alt="Portrait de Florian Chen"
              onError={(e) => { e.target.src = "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Florian"; }}
              className="w-64 h-64 object-cover border-2 border-zzz-black grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="mt-2 text-right font-display text-sm text-zzz-yellow uppercase italic">
              ★ EPITECH PARIS
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://linkedin.com/in/florian-chen-5a7b19344" target="_blank" rel="noreferrer" className="bg-zzz-panel border-2 border-white px-5 py-2.5 font-bold uppercase text-sm flex items-center gap-2 shadow-hard-white hover:bg-zzz-cyan hover:text-zzz-black hover:border-zzz-black transition-all -skew-x-6">
            LinkedIn
          </a>
          <a href="https://github.com/RedbySFrire" target="_blank" rel="noreferrer" className="bg-zzz-panel border-2 border-white px-5 py-2.5 font-bold uppercase text-sm flex items-center gap-2 shadow-hard-white hover:bg-zzz-yellow hover:text-zzz-black hover:border-zzz-black transition-all -skew-x-6">
            GitHub
          </a>
        </div>
      </div>

      <div className="lg:col-span-7 bg-zzz-dark border-4 border-white p-6 md:p-8 shadow-hard-yellow relative">
        <div className="inline-block bg-zzz-orange text-white font-display text-xs uppercase px-3 py-1 mb-3 -skew-x-12">
          // DOSSIER AGENT CONFIDENTIEL
        </div>

        <h1 className="font-display text-4xl md:text-6xl uppercase italic tracking-tight text-white leading-none mb-2">
          Florian <span className="text-zzz-yellow">Chen</span>
        </h1>
        <h2 className="font-tech font-bold text-xl md:text-2xl text-zzz-cyan uppercase mb-6 flex items-center gap-2">
          <Terminal size={22} /> Développeur Web @ Epitech ;)
        </h2>

        <div className="bg-zzz-black border-l-8 border-zzz-yellow p-4 mb-6 text-gray-200 leading-relaxed text-base md:text-lg">
          <p>
            Étudiant en <strong className="text-zzz-yellow">3ème année de Pré-MSc Pro</strong>, je jongle entre la programmation (<span className="text-white font-bold">Python, C, PHP</span>) et l'administration système sous <span className="text-white font-bold">Linux</span>. Mes précédentes expériences, notamment la conception web et le développement d'un portail d'accès automatisé, m'ont donné le goût du challenge technique.
          </p>
        </div>

        <div className="bg-zzz-yellow/10 border-2 border-zzz-yellow p-4 mb-8 flex items-start gap-3">
          <Zap className="text-zzz-yellow shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-display text-sm text-zzz-yellow uppercase">OBJECTIF : ALTERNANCE DÈS JANVIER</h4>
            <p className="text-sm text-gray-300 font-bold">
              Rythme : 4 semaines en entreprise / 2 semaines à l'école. Prêt à m'investir dans de nouveaux défis !
            </p>
          </div>
        </div>

        <button onClick={() => onNavigate("experiences")} className="bg-zzz-yellow text-zzz-black font-display uppercase italic text-lg px-8 py-3 border-4 border-zzz-black shadow-hard-white hover:bg-zzz-orange hover:text-white transition-all -skew-x-6 flex items-center gap-2">
          Découvrir mes missions <ArrowUpRight size={22} strokeWidth={3} />
        </button>
      </div>
    </motion.section>
  );
}