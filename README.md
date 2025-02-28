# Guess The word

## Contexte :
Projet personnel de refaire le celebre Wordle en utilisant React.

## Le jeu :
Un mot secret est sélectionné, et le but du joueur est de le deviner en un nombre limité ou illimité d'essais.

À chaque essai, le joueur pourra voir quelles lettres sont correctement placées, quelles lettres sont présentes dans le mot mais mal placées, et quelles lettres ne sont pas du tout dans le mot secret.

Pour cela, un code couleur sera utilisé : vert pour une lettre bien placée, jaune pour une lettre mal placée, et rouge pour une lettre absente du mot.


# Documentation
## Build
Pour générer le build de l'application qui sera installé dans
```
npm run build
```

## Lancer l'application en local
Pour lancer l'application en local, on pourra s'y connecter sur http://localhost:5173/
```
npm run dev
```

## Hébérgement

L'application est hébergée sur Firebase, après avoir build les fichier elle peut être re-deployer avec la commande :
```
firebase deploy
```
Elle est disponible à l'adresse : https://guesstheword-7e701.web.app/