import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TickerBar from "./components/TickerBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const SECTIONS = {
  profil: Profile,
  competences: Skills,
  experiences: Experiences,
  education: Education,
  contact: Contact,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const Section = SECTIONS[activeTab];

  return (
    <div className="min-h-screen bg-zzz-black text-white relative bg-halftone selection:bg-zzz-yellow selection:text-zzz-black flex flex-col justify-between">
      <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-40" aria-hidden="true" />

      <TickerBar />
      <Header activeTab={activeTab} onNavigate={setActiveTab} />

      <main className="max-w-6xl w-full mx-auto px-4 py-10 flex-grow flex items-center z-10">
        <AnimatePresence mode="wait">
          <Section key={activeTab} onNavigate={setActiveTab} />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}