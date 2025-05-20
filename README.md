# 🎮 Guess The Word

**Projet personnel** — Un clone du célèbre jeu Wordle, développé avec React et hébergé sur Firebase.

---

## 🚀 Présentation

Guess The Word est un jeu où le joueur doit deviner un mot secret en un nombre limité d'essais.  
À chaque essai, un code couleur indique :

- 🟩 **Vert** : Lettre bien placée
- 🟨 **Jaune** : Lettre présente mais mal placée
- 🟥 **Rouge** : Lettre absente du mot

---

## 🛠️ Installation & Lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/guess-the-word.git
cd guess-the-word
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l'application en local

```bash
npm run dev
```

Accédez à [http://localhost:5173/](http://localhost:5173/)

---

### 4. Ajout de la clé d'API

Si vous désirez déployer la web-application sur firebase

Créez un fichier `.env` à la racine du projet :

```
API_KEY=VotreCléFirebaseIci
```

> **Ne partagez jamais votre clé API publiquement.**  
> Le fichier `.env` est déjà ignoré par git.


## 🏗️ Build de production

Pour générer le build de l'application :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

---

## ☁️ Déploiement Firebase

Après avoir généré le build, déployez sur Firebase :

```bash
firebase deploy
```

L'application est disponible à :  
➡️ [https://guesstheword-7e701.web.app/](https://guesstheword-7e701.web.app/)

---

> **Pensez à lancer le Build de production avant déploiement.**  
> **Rappel** : `npm run build`

## 📁 Structure du projet

```
src/
  ├── App.jsx
  ├── App.css
  ├── index.css
  ├── main.jsx
  └── assets/
        ├── win.gif
        ├── lose.gif
        ├── mots.json
        └── moi.png
public/
  └── index.html
```

---

## 📝 Contributions

Pour contribuer, ouvrez une issue ou une pull request.

---

## 📱 Fonctionnalité : Ajout à l'écran d'accueil (PWA)

L’application **Guess The Word** est conçue pour offrir une expérience optimale sur mobile grâce à son support PWA (Progressive Web App).

Grâce au fichier [`manifest.json`](./manifest.json), toutes les icônes nécessaires sont définies :  
lorsqu’un utilisateur ajoute le site à l’écran d’accueil de son smartphone, une icône personnalisée (`src/assets/moi.png`) s’affiche, tout comme le nom de l’application et les couleurs de thème.

**Avantages de cette fonctionnalité :**
- **Icônes multi-tailles** : Les icônes adaptées à différents écrans et résolutions sont déjà configurées.
- **Nom et couleurs personnalisés** : L’application s’intègre parfaitement à l’interface du téléphone.
- **Mode standalone** : L’application s’ouvre sans la barre d’adresse du navigateur, pour une expérience immersive, comme une vraie application native.

> Pour profiter de cette fonctionnalité, ouvrez le site sur votre mobile et choisissez « Ajouter à l'écran d'accueil » dans le menu du navigateur.  
> L’icône et le nom personnalisés apparaîtront automatiquement sur votre écran d’accueil.
