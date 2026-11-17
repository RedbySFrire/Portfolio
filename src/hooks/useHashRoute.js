import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/navigation";

const IDS = NAV_ITEMS.map((item) => item.id);

// "#/projets" -> "projets" ; toute valeur inconnue renvoie à "profil".
function readRoute() {
  const id = window.location.hash.replace(/^#\/?/, "");
  return IDS.includes(id) ? id : "profil";
}

// Une page = une URL : on lit le hash, donc le bouton Retour et les liens directs fonctionnent.
export default function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
