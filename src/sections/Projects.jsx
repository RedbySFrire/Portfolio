import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { pageVariants } from "../animations";
import { PROJECTS_DATA } from "../data/projects";

export default function Projects() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
      <div className="mb-6 md:mb-8 flex items-end justify-between border-b-4 border-white pb-3">
        <div>
          <span className="text-zzz-yellow font-bold text-xs tracking-widest uppercase block">// DOSSIERS DE MISSION</span>
          <h1 className="font-display text-3xl md:text-5xl uppercase italic">Projets</h1>
        </div>
        <span aria-hidden="true" data-deco="PROJECTS_LOG" className="deco hidden md:block font-display text-4xl text-white/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS_DATA.map((project) => (
          <article key={project.title} className="bg-zzz-dark border-4 border-white p-5 md:p-6 shadow-hard-white flex flex-col gap-4">
            <header>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-zzz-panel border border-gray-500 text-zzz-cyan text-xs font-bold px-2 py-0.5 uppercase">
                  {project.period}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 uppercase border ${
                  project.status === "EN COURS"
                    ? "bg-zzz-yellow text-zzz-black border-zzz-yellow"
                    : "bg-zzz-black text-zzz-cyan border-zzz-cyan"
                }`}>
                  {project.status}
                </span>
              </div>
              <h2 className="font-display text-2xl uppercase italic text-white">{project.title}</h2>
            </header>

            {project.image && (
              <img src={project.image} alt={project.imageAlt} loading="lazy" className="w-full border-2 border-gray-600" />
            )}

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs uppercase font-bold text-zzz-yellow tracking-wider">Contexte</dt>
                <dd className="text-gray-200 mt-1">{project.context}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase font-bold text-zzz-yellow tracking-wider">Objectif</dt>
                <dd className="text-gray-200 mt-1">{project.objective}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase font-bold text-zzz-yellow tracking-wider">Mon rôle</dt>
                <dd className="text-gray-200 mt-1">{project.role}</dd>
              </div>
            </dl>

            <ul aria-label={`Compétences et technologies : ${project.title}`} className="flex flex-wrap gap-2 mt-auto">
              {project.skills.map((skill) => (
                <li key={skill} className="bg-zzz-black border border-zzz-cyan text-zzz-cyan text-xs font-bold px-2 py-1 uppercase">
                  {skill}
                </li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-700">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase text-zzz-yellow underline underline-offset-4 hover:text-white"
                  >
                    {link.label} <ExternalLink size={16} aria-hidden="true" />
                    <span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </motion.section>
  );
}
