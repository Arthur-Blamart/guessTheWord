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
