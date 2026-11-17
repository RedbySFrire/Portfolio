import { motion } from "framer-motion";
import { pageVariants } from "../animations";
import { EDUCATION_DATA } from "../data/education";

export default function Education() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8 border-b-4 border-white pb-3">
        <span className="text-zzz-cyan font-bold text-xs tracking-widest uppercase block">// PARCOURS ACADÉMIQUE</span>
        <h1 className="font-display text-3xl md:text-5xl uppercase italic">Formation</h1>
      </div>
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-1.5 before:bg-zzz-yellow">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="group relative pl-12 md:pl-20">
            <div aria-hidden="true" className="absolute left-[9px] md:left-[25px] top-6 w-5 h-5 bg-zzz-orange border-4 border-zzz-black rotate-45 transition-all duration-200 group-hover:bg-zzz-yellow group-hover:scale-125" />
            <motion.div whileHover={{ x: 8 }} className="bg-zzz-dark border-4 border-white p-5 md:p-6 shadow-hard-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="bg-zzz-yellow text-zzz-black font-display text-xs px-2.5 py-1 uppercase -skew-x-12 inline-block mb-2">{edu.year}</span>
                <h2 className="font-display text-xl md:text-2xl uppercase text-white">{edu.degree}</h2>
                <p className="text-gray-200 font-bold uppercase text-sm mt-1">{edu.school}</p>
                {edu.details && (
                  <ul aria-label="Contenu de la formation" className="mt-3 flex flex-wrap gap-2">
                    {edu.details.map((detail) => (
                      <li key={detail} className="bg-zzz-black border border-zzz-cyan text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className={`font-display text-xs px-3 py-1.5 border-2 uppercase ${edu.status === "EN COURS" ? "bg-zzz-orange text-zzz-black border-white" : "bg-zzz-black text-zzz-cyan border-zzz-cyan"}`}>
                {edu.status}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
