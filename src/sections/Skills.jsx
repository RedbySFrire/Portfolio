import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { pageVariants } from "../animations";
import { SKILLS_DATA } from "../data/skills";

export default function Skills() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
      <div className="mb-8 flex items-end justify-between border-b-4 border-white pb-3">
        <div>
          <span className="text-zzz-yellow font-bold text-xs tracking-widest uppercase block">// ÉQUIPEMENT TECHNIQUE</span>
          <h2 className="font-display text-3xl md:text-5xl uppercase italic">Mes Compétences</h2>
        </div>
        <span className="hidden md:block font-display text-4xl text-white/20">MODULES_06</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((skill) => (
          <motion.div key={skill.id} whileHover={{ scale: 1.03, y: -5 }} className={`bg-zzz-dark border-4 ${skill.color} p-6 shadow-hard-white relative overflow-hidden group`}>
            <span className="absolute -right-2 -bottom-4 font-display text-7xl text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
              {skill.id}
            </span>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-white text-zzz-black font-display text-xs px-2 py-0.5 uppercase -skew-x-12">{skill.badge}</span>
              <Sparkles size={18} className="text-zzz-yellow" />
            </div>
            <h3 className="font-display text-xl uppercase text-white mb-4 group-hover:text-zzz-yellow transition-colors">{skill.title}</h3>
            <ul className="space-y-2 relative z-10">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300 font-bold text-sm bg-zzz-black/80 px-3 py-2 border border-gray-800">
                  <span className="text-zzz-yellow font-display">▸</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}