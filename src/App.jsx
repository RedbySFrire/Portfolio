import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Cpu, Briefcase, GraduationCap, Mail, Phone, MapPin, Terminal, 
  Zap, ShieldAlert, Sparkles, Send, ArrowUpRight 
} from "lucide-react";

// TES DONNÉES
const SKILLS_DATA = [
  { id: "01", title: "Réseaux & Systèmes", color: "border-zzz-cyan", badge: "SYS-ADMIN", items: ["TCP/IP, LAN/VLAN", "Administration Linux & Windows Server"] },
  { id: "02", title: "Développement Web", color: "border-zzz-yellow", badge: "FULLSTACK", items: ["HTML, CSS, JavaScript", "PHP, SQL (phpMyAdmin)", "React & Tailwind CSS"] },
  { id: "03", title: "Programmation", color: "border-zzz-orange", badge: "CORE DEV", items: ["Python, Django", "C / C++"] },
  { id: "04", title: "Sécurité & Outils", color: "border-red-500", badge: "CYBERSEC", items: ["Pare-feu, VPN", "Wireshark, Packet Tracer"] },
  { id: "05", title: "Méthodologie", color: "border-purple-500", badge: "TEAMPLAY", items: ["Diagnostic technique (Troubleshooting)", "Travail en équipe & Agile"] },
  { id: "06", title: "Langues", color: "border-green-400", badge: "COMMS", items: ["Français : Maternelle", "Anglais : Niveau B1", "Chinois : Niveau A1"] },
];

const EXPERIENCES_DATA = [
  {
    rank: "S",
    title: "Concepteur Développeur Web",
    date: "2025 / 2026",
    company: "My Business Life",
    type: "MISSION PRO",
    tasks: [
      "Utilisation du framework Django",
      "Création d'application Web complète",
      "Création et gestion de base de données SQL",
      "Importation web par container sur NAS QNAP",
      "Recherche de panne et résolution (Troubleshooting)"
    ]
  },
  {
    rank: "S",
    title: "Projet BTS : Smart Gate Jaurès",
    date: "2025 / 2026",
    company: "Système d'accès automatisé",
    type: "PROJET TECHNIQUE",
    tasks: [
      "Répartition des tâches (Gantt Project)",
      "Conception de base de données & Sécurisation",
      "Conception du site web de supervision",
      "Développement API entre la BDD et l'ESP32"
    ]
  },
  {
    rank: "A",
    title: "Projets 1ère & 2ème année BTS",
    date: "2024 / 2025",
    company: "Lycée Jean Jaurès",
    type: "LABO & RÉSEAUX",
    tasks: [
      "Utilisation d'outils et langages de programmation",
      "Gestion de la répartition des tâches en équipe",
      "Création d'une infrastructure réseau complète",
      "Création d'applications"
    ]
  },
  {
    rank: "B",
    title: "Serveur / Barman",
    date: "2022 / 2023",
    company: "Restaurant Thaï, Place d'Italie",
    type: "TERRAIN",
    tasks: [
      "Participation aux processus d'ouverture et organisation",
      "Contribution aux services à fort rythme",
      "Collaboration avec les équipes pour gérer la clientèle",
      "Assurance qualité et respect des normes de production"
    ]
  }
];

const EDUCATION_DATA = [
  { year: "2026 / 2027", degree: "Pré-MSc Pro (BAC +3)", school: "École Epitech Paris", status: "EN COURS" },
  { year: "2024 / 2026", degree: "BTS CIEL A (BAC +2)", school: "Lycée Jean Jaurès", status: "VALIDÉ" },
  { year: "2021 / 2024", degree: "Baccalauréat STL", school: "Lycée Henri Wallon", status: "VALIDÉ" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");

  const navItems = [
    { id: "profil", label: "01 // AGENT", icon: User },
    { id: "competences", label: "02 // SKILLS", icon: Cpu },
    { id: "experiences", label: "03 // MISSIONS", icon: Briefcase },
    { id: "education", label: "04 // LOGS", icon: GraduationCap },
    { id: "contact", label: "05 // COMMS", icon: Mail },
  ];

  const pageVariants = {
    initial: { opacity: 0, x: 80, skewX: -6 },
    animate: { opacity: 1, x: 0, skewX: 0, transition: { type: "spring", stiffness: 350, damping: 25 } },
    exit: { opacity: 0, x: -80, skewX: 6, transition: { duration: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-zzz-black text-white relative bg-halftone selection:bg-zzz-yellow selection:text-zzz-black flex flex-col justify-between">
      <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-40" />

      <div className="bg-zzz-yellow text-zzz-black font-display text-xs py-1.5 border-b-4 border-white overflow-hidden z-40">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          <span>/// INTER-KNOT NETWORK : ONLINE</span>
          <span>★ RECHERCHE D'ALTERNANCE DÈS JANVIER (RYTHME 4 SEMAINES ENTREPRISE / 2 SEMAINES ÉCOLE) ★</span>
          <span>/// AGENT : FLORIAN CHEN — EPITECH PARIS</span>
          <span>/// STATUT : OPÉRATIONNEL</span>
          <span>/// INTER-KNOT NETWORK : ONLINE</span>
          <span>★ RECHERCHE D'ALTERNANCE DÈS JANVIER (RYTHME 4 SEMAINES ENTREPRISE / 2 SEMAINES ÉCOLE) ★</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-zzz-black/90 backdrop-blur-md border-b-4 border-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          
          <div onClick={() => setActiveTab("profil")} className="cursor-pointer flex items-center gap-3 group">
            <div className="bg-zzz-yellow text-zzz-black font-display italic text-2xl px-3 py-1 border-2 border-white shadow-hard-orange -skew-x-12 group-hover:bg-zzz-orange group-hover:text-white transition-colors">
              PROXY // FC
            </div>
            <div>
              <span className="font-display text-xl tracking-wider uppercase block leading-none">Florian.Dev</span>
              <span className="text-xs font-bold text-zzz-yellow tracking-widest uppercase">Proxy LVL. 2026</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-2 md:gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
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

      <main className="max-w-6xl w-full mx-auto px-4 py-10 flex-grow flex items-center z-10">
        <AnimatePresence mode="wait">
          
          {activeTab === "profil" && (
            <motion.section key="profil" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

                <button onClick={() => setActiveTab("experiences")} className="bg-zzz-yellow text-zzz-black font-display uppercase italic text-lg px-8 py-3 border-4 border-zzz-black shadow-hard-white hover:bg-zzz-orange hover:text-white transition-all -skew-x-6 flex items-center gap-2">
                  Découvrir mes missions <ArrowUpRight size={22} strokeWidth={3} />
                </button>
              </div>
            </motion.section>
          )}

          {activeTab === "competences" && (
            <motion.section key="competences" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
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
          )}

          {activeTab === "experiences" && (
            <motion.section key="experiences" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
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
                        <div className={`font-display italic text-3xl px-3.5 py-1 border-4 border-zzz-black shadow-hard-black -rotate-6 shrink-0 ${exp.rank === "S" ? "bg-zzz-orange text-white" : exp.rank === "A" ? "bg-zzz-yellow text-zzz-black" : "bg-zzz-cyan text-zzz-black"}`}>
                          {exp.rank}
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
          )}

          {activeTab === "education" && (
            <motion.section key="education" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-4xl mx-auto">
              <div className="mb-8 border-b-4 border-white pb-3">
                <span className="text-zzz-cyan font-bold text-xs tracking-widest uppercase block">// PARCOURS ACADÉMIQUE</span>
                <h2 className="font-display text-3xl md:text-5xl uppercase italic">Éducation</h2>
              </div>
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-1.5 before:bg-zzz-yellow">
                {EDUCATION_DATA.map((edu, index) => (
                  <motion.div key={index} whileHover={{ x: 8 }} className="relative pl-12 md:pl-20">
                    <div className="absolute left-2 md:left-6 top-6 w-5 h-5 bg-zzz-orange border-4 border-zzz-black rotate-45" />
                    <div className="bg-zzz-dark border-4 border-white p-6 shadow-hard-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <span className="bg-zzz-yellow text-zzz-black font-display text-xs px-2.5 py-1 uppercase -skew-x-12 inline-block mb-2">{edu.year}</span>
                        <h3 className="font-display text-xl md:text-2xl uppercase text-white">{edu.degree}</h3>
                        <p className="text-gray-300 font-bold uppercase text-sm mt-1">{edu.school}</p>
                      </div>
                      <span className={`font-display text-xs px-3 py-1.5 border-2 uppercase ${edu.status === "EN COURS" ? "bg-zzz-orange text-white border-white animate-pulse" : "bg-zzz-black text-zzz-cyan border-zzz-cyan"}`}>
                        {edu.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "contact" && (
            <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
              <div className="mb-8 border-b-4 border-white pb-3">
                <span className="text-zzz-yellow font-bold text-xs tracking-widest uppercase block">// TRANSMISSION DIRECTE</span>
                <h2 className="font-display text-3xl md:text-5xl uppercase italic">Contactez-moi</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 bg-zzz-yellow text-zzz-black border-4 border-white p-8 shadow-hard-orange flex flex-col justify-between">
                  <div>
                    <div className="bg-zzz-black text-zzz-yellow font-display text-xs px-3 py-1 inline-block uppercase mb-4 -skew-x-12">CANAL SÉCURISÉ</div>
                    <h3 className="font-display text-3xl uppercase italic leading-tight mb-6">Prêt à lancer une collaboration ?</h3>
                  </div>
                  <ul className="space-y-4 font-bold text-base">
                    <li>
                      <a href="tel:+33781809360" className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange hover:text-white transition-colors">
                        <Phone size={20} /> +33 7 81 80 93 60
                      </a>
                    </li>
                    <li>
                      <a href="mailto:chen.florian@outlook.fr" className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange hover:text-white transition-colors break-all">
                        <Mail size={20} /> chen.florian@outlook.fr
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps/search/?api=1&query=Aubervilliers+93300" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange hover:text-white transition-colors">
                        <MapPin size={20} /> Aubervilliers 93300
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 bg-zzz-dark border-4 border-white p-8 shadow-hard-white flex flex-col justify-center items-center text-center space-y-4">
                  <ShieldAlert size={56} className="text-zzz-orange animate-pulse" />
                  
                  <h3 className="font-display text-2xl md:text-3xl uppercase text-zzz-orange italic">
                    Système de transmission hors ligne
                  </h3>
                  
                  <p className="text-gray-300 font-bold text-sm md:text-base max-w-md">
                    Le module de messagerie intégrée est actuellement en cours de développement (WIP). <br/><br/>
                    <span className="text-white">Veuillez utiliser les canaux de communication directs (Email ou Téléphone) mis à votre disposition dans le canal sécurisé.</span>
                  </p>
                  
                  <div className="bg-zzz-black border-2 border-zzz-orange text-zzz-orange px-4 py-2 font-display text-xs uppercase -skew-x-12 mt-4">
                    ERR // CONNEXION BACKEND MANQUANTE
                  </div>
                </div>
              </div>
            </motion.section>
          )}

        </AnimatePresence>
      </main>

      <footer className="bg-zzz-dark border-t-4 border-white py-4 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-bold text-gray-400 uppercase">
          <p>© 2026 FLORIAN CHEN — SYSTÈME INSPIRÉ PAR ZENLESS ZONE ZERO</p>
          <p className="text-zzz-yellow flex items-center gap-1"><ShieldAlert size={14} /> NEW ERIDU // PROXY NETWORK VER 2.0</p>
        </div>
      </footer>
    </div>
  );
}