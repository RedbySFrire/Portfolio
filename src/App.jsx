import { useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import TickerBar from "./components/TickerBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import useHashRoute from "./hooks/useHashRoute";
import { NAV_ITEMS } from "./data/navigation";

const PAGES = {
  profil: Profile,
  competences: Skills,
  projets: Projects,
  experiences: Experiences,
  education: Education,
  contact: Contact,
};

export default function App() {
  const route = useHashRoute();
  const Page = PAGES[route];
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // À chaque changement de page : titre de l'onglet, retour en haut et focus sur le contenu
  // (utile aux lecteurs d'écran et à la navigation au clavier).
  useEffect(() => {
    const item = NAV_ITEMS.find((nav) => nav.id === route);
    document.title =
      route === "profil" ? "Florian Chen — Développeur Web | Portfolio" : `${item.label} — Florian Chen`;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
    mainRef.current?.focus({ preventScroll: true });
  }, [route]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-zzz-black text-white relative bg-halftone selection:bg-zzz-yellow selection:text-zzz-black flex flex-col justify-between">
        <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-30" aria-hidden="true" />

        <button
          type="button"
          onClick={() => mainRef.current?.focus()}
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-zzz-yellow text-zzz-black font-bold px-4 py-2"
        >
          Aller au contenu
        </button>

        <TickerBar />
        <Header activeTab={route} />

        <main id="main" ref={mainRef} tabIndex={-1} className="max-w-6xl w-full mx-auto px-4 py-6 md:py-10 flex-grow flex items-center z-10 focus:outline-none">
          <AnimatePresence mode="wait">
            <Page key={route} />
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
