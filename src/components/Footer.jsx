import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zzz-dark border-t-4 border-white py-4 px-6 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-bold text-gray-400 uppercase">
        <p>© 2026 FLORIAN CHEN — INSPIRÉ DE L'UNIVERS DE ZENLESS ZONE ZERO · PROJET PERSONNEL NON OFFICIEL</p>
        <p className="text-zzz-yellow flex items-center gap-1"><ShieldAlert size={14} /> NEW ERIDU // PROXY NETWORK VER 2.0</p>
      </div>
    </footer>
  );
}