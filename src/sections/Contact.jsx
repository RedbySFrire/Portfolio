import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";
import { pageVariants } from "../animations";

export default function Contact() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
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
  );
}