import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "../config";

const WEB3FORMS_KEY = "1b5cc4b5-6fb3-4280-a760-415a4c14fafd";

const fieldClass =
  "w-full bg-zzz-black border-2 border-gray-500 p-3 text-white placeholder-gray-400 focus:border-zzz-yellow";

const MESSAGES = {
  success: "Message envoyé directement ! Je vous réponds rapidement.",
  error: `L'envoi a échoué. Réessayez, ou écrivez-moi directement à ${CONTACT_EMAIL}.`,
};

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Champ piège anti-spam (honeypot)
    if (data.get("website")) return;

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Portfolio ZZZ - Message de ${data.get("name")}`);

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (!result.success) throw new Error(result.message);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left w-full">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-bold uppercase text-zzz-yellow mb-1">Nom</label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-bold uppercase text-zzz-yellow mb-1">Email</label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-bold uppercase text-zzz-yellow mb-1">Message</label>
        <textarea id="contact-message" name="message" required rows="5" className={fieldClass} />
      </div>

      {/* Champ piège anti-spam invisible */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Ne pas remplir</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-zzz-yellow text-zzz-black font-display uppercase italic px-8 py-3 border-4 border-zzz-black shadow-hard-white hover:bg-zzz-orange transition-colors disabled:opacity-60 cursor-pointer"
      >
        <Send size={20} aria-hidden="true" />
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>

      <p role="status" aria-live="polite" className={`text-sm font-bold ${status === "error" ? "text-red-300" : "text-zzz-cyan"}`}>
        {MESSAGES[status] ?? ""}
      </p>
    </form>
  );
}