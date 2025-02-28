import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import winGif from './assets/win.gif' // Importez le GIF de victoire
import loseGif from './assets/lose.gif' // Importez le GIF de défaite

export default App
const empty_char = ' '; //Caractère vide dans la matrice

function App() {
  const [secretWord, setSecretWord] = useState("");
  const [mat, setMatrix] = useState([]);
  const [colorMatrix, setColorMatrix] = useState([]);
  const [jeuFinie, setJeuFinie] = useState(false);
  const [tentativeRestantes, setTentativeRestantes] = useState(0);
  const [partieGagnee, setPartieGagnee] = useState(false);

  useEffect(() => {
    fetch("/src/assets/mots.json")
      .then((res) => res.json())
      .then((data) => {
        const mots = data.mots;
        const randomIndex = Math.floor(Math.random() * mots.length);
        setSecretWord(mots[randomIndex].toUpperCase());
      })
      .catch((e) => console.error(e));
  }, []);


  useEffect(() => {
    if (secretWord) {
      const gridSize = secretWord.length;
      const essaie = 5;
      setMatrix(new Array(gridSize * essaie).fill(empty_char));
      setColorMatrix(new Array(gridSize * essaie).fill("white"));
      setTentativeRestantes(essaie - 1);
    }
  }, [secretWord]);

  return (
    <>
      <div style={{
        borderStyle: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid nbLetter={secretWord.length} nbRow={5} matrix={mat} colorMatrix={colorMatrix} />
      </div>
      <div style={{
        borderStyle: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: (!jeuFinie) ? 'visible' : 'collapse'
      }}>
        <InputArea motSecret={secretWord} matrix={mat} nb_column={secretWord.length} nbRow={5} updateMatrix={setMatrix} colorMatrix={colorMatrix} updateColorMatrix={setColorMatrix} setJeuFinie={setJeuFinie} tentativeRestantes={tentativeRestantes} setTentativeRestantes={setTentativeRestantes} setPartieGagnee={setPartieGagnee} />
      </div>
      <div style={{
        borderStyle: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: (jeuFinie) ? 'visible' : 'hidden'
      }}>
        <EcranFin partieGagnee={partieGagnee} />
      </div>
    </>
  )
}

function EcranFin({ partieGagnee }) {
  if (partieGagnee) {
    return (
      <div>
        <h1>Bravo, vous avez gagné !</h1>
        <img src={winGif} alt="Victoire" />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Vous avez perdu lol (trop nul) !</h1>
        <img src={loseGif} alt="Défaite" />
      </div>
    );
  }
}

function Grid({ nbLetter, nbRow, matrix, colorMatrix }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${nbLetter}, 50px)`,
      gap: "12px"
    }}>
      {Array.from({ length: nbRow * nbLetter }).map((_, index) => (
        <Square key={index} letter={matrix[index]} color={colorMatrix[index]} />
      ))}
    </div>
  )
}

function Square({ letter, color }) {
  return (
    <div style={{
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      color: "black",
      justifyContent: "center",
      border: "2px solid black",
      backgroundColor: color,
      fontSize: "24px",
      fontWeight: "bold",
      margin: "5px"
    }}>
      {letter}
    </div>
  );
}

function InputArea({ motSecret, matrix, nb_column, nbRow, updateMatrix, colorMatrix, updateColorMatrix, setJeuFinie, tentativeRestantes, setTentativeRestantes, setPartieGagnee }) {
  return (
    <div>
      <input type="text" id="inputText" onKeyDown={(event) => {
        if (event.code === "Enter") {
          confirmEntry(motSecret, matrix, nb_column, nbRow, updateMatrix, colorMatrix, updateColorMatrix, setJeuFinie, tentativeRestantes, setTentativeRestantes, setPartieGagnee);
        }
      }}></input>
      <button id="inputConfirmation" onClick={() => { confirmEntry(motSecret, matrix, nb_column, nbRow, updateMatrix, colorMatrix, updateColorMatrix, setJeuFinie, tentativeRestantes, setTentativeRestantes, setPartieGagnee) }} >Ok</button>
      <h2 id="Error_component" style={{ color: "#ff5733" }}>Prout</h2>
    </div>
  );
}

function confirmEntry(motSecret, matrix, nb_column, nbRow, updateMatrix, colorMatrix, updateColorMatrix, setJeuFinie, tentativeRestantes, setTentativeRestantes, setPartieGagnee) {
  let elt = document.getElementById("inputText");
  let elt_error = document.getElementById("Error_component")
  let valeur = elt.value.toUpperCase();
  if (valeur.length === motSecret.length) {
    elt_error.innerHTML = "";
    elt.value = "";

    writeInBoard(matrix, nb_column, updateMatrix, valeur, colorMatrix, updateColorMatrix, motSecret, setTentativeRestantes);

    setTentativeRestantes(tentativeRestantes - 1);
    //On vérifie si la partie est finie, soit on a trouvé le mot, soit on a rempli toutes les lignes
    if (motSecret === valeur || tentativeRestantes === 0) {
      setPartieGagnee(motSecret === valeur);
      console.log("Partie finie");
      setJeuFinie(true);
    }
  } else {
    elt_error.innerHTML = "Entrée pas de la bonne taille";
  }
}

function chooseColor(motSecret, motEssaie) {
  let n = motSecret.length;

  let couleur = new Array(n).fill("white");
  for (let i = 0; i < n; i++) {
    if (motSecret[i] === motEssaie[i]) {
      couleur[i] = "green";
    } else if (!(motSecret.includes(motEssaie[i]))) {
      couleur[i] = "red";
    } else {// On doit mettre jaune ou rouge, on repassera après pour verifier
      couleur[i] = "blue";
    }
  }

  for (let i = 0; i < n; i++) {
    if (couleur[i] === "blue") {
      for (let j = 0; j < n; j++) {
        if (motSecret[j] === motEssaie[i] && couleur[j] === "red") {
          couleur[i] = "yellow";
          break;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (couleur[i] === "blue") {
      couleur[i] = "red";
    }
  }
  return couleur;
}

//Il faut regarder quelles lignes sont remplies pour trouver où ajouter des trucs
function whichRowToWrite(matrix, nb_column) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === empty_char) {
      return i / nb_column;
    }
  }
}

function writeInBoard(matrix, nb_column, updateMatrix, text, colorMatrix, updateColorMatrix, motSecret) {
  let row = whichRowToWrite(matrix, nb_column);
  const nouvelle_matrice = [...matrix];
  const nouvelle_couleurs = [...colorMatrix];
  for (let i = 0; i < text.length; i++) {
    nouvelle_matrice[row * nb_column + i] = text[i];
  }

  let couleur = chooseColor(motSecret, text);

  for (let i = 0; i < nb_column; i++) {
    nouvelle_couleurs[row * nb_column + i] = couleur[i];
  }
  updateMatrix(nouvelle_matrice);
  updateColorMatrix(nouvelle_couleurs);
}