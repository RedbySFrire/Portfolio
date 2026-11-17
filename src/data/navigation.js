import { User, Cpu, FolderGit2, Briefcase, GraduationCap, Mail } from "lucide-react";

// id = partie de l'URL (#/projets). label = texte du menu et du titre de l'onglet du navigateur.
export const NAV_ITEMS = [
  { id: "profil", label: "Profil", icon: User },
  { id: "competences", label: "Compétences", icon: Cpu },
  { id: "projets", label: "Projets", icon: FolderGit2 },
  { id: "experiences", label: "Expériences", icon: Briefcase },
  { id: "education", label: "Formation", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];
