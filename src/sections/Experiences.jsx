import { motion } from "framer-motion";
import { pageVariants } from "../animations";
import { EXPERIENCES_DATA, LEVELS } from "../data/experiences";

export default function Experiences() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
      <div className="mb-8 flex items-end justify-between border-b-4 border-white pb-3">
        <div>
          <span className="text-zzz-orange font-bold text-xs tracking-widest uppercase block">// ARCHIVES INTER-KNOT</span>
          <h2 className="font-display text-3xl md:text-5xl uppercase italic">Expériences & Projets</h2>
        </div>
        <span className="hidden md:block font-display text-4xl text-white/20">MISSIONS_LOG</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIENCES_DATA.map((exp, index) => (
          <motion.article key={index} whileHover={{ scale: 1.02, rotate: -0.5 }} className="bg-zzz-dark border-4 border-white p-6 shadow-hard-white hover:shadow-hard-yellow hover:border-zzz-yellow transition-all relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="bg-zzz-panel border border-gray-600 text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">
                    {exp.type} // {exp.date}
                  </span>
                  <h3 className="font-display text-2xl uppercase italic text-white mt-2">{exp.title}</h3>
                  <h4 className="font-bold text-zzz-yellow uppercase text-sm tracking-wider">@ {exp.company}</h4>
                </div>

                {/* NIVEAU DE MAÎTRISE (remplace la lettre S / A / B) */}
                <div className="shrink-0 -rotate-6 text-center" title={`Niveau de maîtrise : ${LEVELS[exp.rank].label}`}>
                  <div className={`font-display italic text-sm px-3 py-1 border-4 border-zzz-black shadow-hard-black uppercase ${LEVELS[exp.rank].style}`}>
                    {LEVELS[exp.rank].label}
                  </div>
                  <div className="flex gap-1 mt-1.5 justify-center" aria-hidden="true">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className={`h-1.5 w-6 border border-white ${n <= LEVELS[exp.rank].filled ? "bg-zzz-yellow" : "bg-transparent"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-4 border-t-2 border-dashed border-gray-700 pt-4">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-zzz-orange font-bold">//</span><span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-gray-800 flex justify-between items-center text-xs text-gray-400 font-bold uppercase">
              <span>STATUT : COMPLÉTÉ</span>
              <span className="text-zzz-yellow">100% SYNC</span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}