import { motion } from "framer-motion";
import { pageVariants } from "../animations";
import { EXPERIENCES_DATA, LEVELS } from "../data/experiences";
import { INITIATIVES_DATA } from "../data/initiatives";

export default function Experiences() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
      <div className="mb-6 md:mb-8 flex items-end justify-between border-b-4 border-white pb-3">
        <div>
          <span className="text-zzz-orange font-bold text-xs tracking-widest uppercase block">// ARCHIVES INTER-KNOT</span>
          <h1 className="font-display text-3xl md:text-5xl uppercase italic">Expériences</h1>
        </div>
        <span aria-hidden="true" data-deco="MISSIONS_LOG" className="deco hidden md:block font-display text-4xl text-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {EXPERIENCES_DATA.map((exp, index) => (
          <motion.article key={index} whileHover={{ scale: 1.02, rotate: -0.5 }} className="bg-zzz-dark border-4 border-white p-5 md:p-6 shadow-hard-white hover:shadow-hard-yellow hover:border-zzz-yellow transition-all relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className="bg-zzz-panel border border-gray-500 text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">
                    {exp.type} // {exp.date}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl uppercase italic text-white mt-2">{exp.title}</h2>
                  <p className="font-bold text-zzz-yellow uppercase text-sm tracking-wider">@ {exp.company}</p>
                </div>

                {/* Niveau de maîtrise */}
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

              <ul className="space-y-2 mt-4 border-t-2 border-dashed border-gray-600 pt-4">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-gray-200 flex items-start gap-2">
                    <span aria-hidden="true" className="text-zzz-orange font-bold">//</span><span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-gray-700 text-xs text-gray-300 font-bold uppercase">
              Statut : complété
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-6 border-b-4 border-white pb-3">
          <span className="text-zzz-cyan font-bold text-xs tracking-widest uppercase block">// HORS PROGRAMME</span>
          <h2 className="font-display text-2xl md:text-4xl uppercase italic">Au-delà des cours</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIATIVES_DATA.map((item) => (
            <li key={item.title} className="bg-zzz-dark border-4 border-gray-500 p-5 flex flex-col gap-3">
              <span className="self-start bg-zzz-panel border border-gray-500 text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">{item.type}</span>
              <h3 className="font-display text-lg uppercase italic text-white">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
              <ul aria-label={`Technologies : ${item.title}`} className="flex flex-wrap gap-2 mt-auto">
                {item.skills.map((skill) => (
                  <li key={skill} className="bg-zzz-black border border-zzz-cyan text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
