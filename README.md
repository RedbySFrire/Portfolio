# Portfolio de Florian Chen

Portfolio personnel en ligne : https://redbysfrire.github.io/Portfolio/

Site multi-pages (Profil, Compétences, Projets, Expériences, Formation, Contact) présentant mon parcours, mes projets et mes compétences en développement web, réseaux et systèmes. Le design s'inspire de l'univers du jeu **Zenless Zone Zero** : projet personnel non officiel, sans affiliation avec HoYoverse, et sans aucun asset du jeu.

## Fonctionnalités

- **Une page = une URL** : navigation par hash (`#/projets`, `#/contact`...), compatible avec le bouton Retour et les liens directs, sans configuration serveur sur GitHub Pages.
- **Projets détaillés** : contexte, objectif, rôle, compétences et technologies pour chaque projet.
- **Formulaire de contact** : envoi via Formspree si une URL est configurée, sinon ouverture de l'application mail avec le message pré-rempli. Champ anti-spam inclus.
- **CV téléchargeable** depuis le profil.
- **Accessibilité** : navigation au clavier, focus visible, lien d'évitement, `aria-current`, textes alternatifs, contrastes renforcés, respect de `prefers-reduced-motion` et `prefers-contrast`.
- **Responsive** : lisible de 375 px (mobile) jusqu'au grand écran.
- **SEO** : `lang="fr"`, meta description, balises Open Graph, titre propre à chaque page.

## Stack technique

| Rôle | Outil |
| --- | --- |
| Interface | React 19 |
| Build et serveur de dev | Vite |
| Style | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icônes | Lucide React |
| Qualité du code | ESLint |
| Hébergement | GitHub Pages (`gh-pages`) |

Polices : Archivo Black et Chakra Petch (Google Fonts, licence SIL OFL).

## Structure du projet

```
src/
├── App.jsx              assemble l'en-tête, la page courante et le pied de page
├── config.js            accroche, nom du CV, e-mail, URL Formspree
├── animations.js        transitions entre les pages
├── hooks/useHashRoute.js  lit la page courante dans l'URL
├── data/                contenu (compétences, projets, expériences, formation, navigation)
├── components/          Header, Footer, TickerBar, ContactForm
└── sections/            une page par fichier (Profile, Skills, Projects, ...)
public/                  favicons, photo, CV (CV_Florian_Chen.pdf)
```

Pour modifier le contenu du site, il suffit d'éditer les fichiers de `src/data/` et `src/config.js`.

## Installation et démarrage local

Prérequis : Node.js 18 ou plus récent, npm et Git.

```bash
git clone https://github.com/RedbySFrire/Portfolio.git
cd Portfolio
npm install
npm run dev      # http://localhost:5173/Portfolio/
```

Autres commandes : `npm run lint` (analyse du code), `npm run build` (version de production dans `dist/`), `npm run preview` (test du build).

## Déploiement

```bash
npm run deploy
```

Cette commande compile le site puis publie le dossier `dist/` sur la branche `gh-pages`, servie par GitHub Pages.

## Configuration du formulaire de contact

1. Créer un formulaire gratuit sur https://formspree.io.
2. Copier son URL (`https://formspree.io/f/xxxxxxxx`) dans `FORMSPREE_ENDPOINT` du fichier `src/config.js`.

## Auteur

**Florian Chen** : [GitHub](https://github.com/RedbySFrire) · [LinkedIn](https://linkedin.com/in/florian-chen-5a7b19344) · Epitech Paris (Pré-MSc Pro)
