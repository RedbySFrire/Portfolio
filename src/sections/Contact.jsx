import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { pageVariants } from "../animations";
import ContactForm from "../components/ContactForm";
import { CONTACT_EMAIL } from "../config";

export default function Contact() {
  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
      <div className="mb-6 md:mb-8 border-b-4 border-white pb-3">
        <span className="text-zzz-yellow font-bold text-xs tracking-widest uppercase block">// TRANSMISSION DIRECTE</span>
        <h1 className="font-display text-3xl md:text-5xl uppercase italic">Contactez-moi</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        <div className="lg:col-span-5 bg-zzz-yellow text-zzz-black border-4 border-white p-5 md:p-8 shadow-hard-orange flex flex-col justify-between gap-6">
          <div>
            <div className="bg-zzz-black text-zzz-yellow font-display text-xs px-3 py-1 inline-block uppercase mb-4 -skew-x-12">COORDONNÉES</div>
            <h2 className="font-display text-2xl md:text-3xl uppercase italic leading-tight">Prêt à lancer une collaboration ?</h2>
          </div>
          <ul className="space-y-4 font-bold text-base">
            <li>
              <a href="tel:+33781809360" className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange transition-colors">
                <Phone size={20} aria-hidden="true" /> +33 7 81 80 93 60
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange transition-colors break-all">
                <Mail size={20} aria-hidden="true" /> {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Aubervilliers+93300" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white border-2 border-zzz-black p-3 shadow-hard-black hover:bg-zzz-orange transition-colors">
                <MapPin size={20} aria-hidden="true" /> Aubervilliers 93300
                <span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7 relative bg-zzz-dark border-4 border-white p-5 md:p-8 shadow-hard-white">
          <h2 className="font-display text-2xl md:text-3xl uppercase text-zzz-yellow italic mb-5">Envoyez-moi un message</h2>
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}
