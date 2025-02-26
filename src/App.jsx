import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const empty_char = ' '; //Caractère vide dans la matrice

function App() {
  const secretWord = "zizi".toUpperCase();
  const gridSize = secretWord.length;
  const essaie = 5;

  const [mat, setMatrix] = useState(
    new Array(gridSize * essaie).fill(empty_char)
  )
  

  return (
    <>
          <Grid nbLetter={secretWord.length} nbRow={essaie} matrix={mat}/>
        <div>
          <InputArea motSecret={secretWord} matrix={mat} nb_column={gridSize} updateMatrix={setMatrix}/>
        </div>
    </>
  )
}

export default App

function Grid({ nbLetter, nbRow, matrix }){
  console.log("Matrice : "+matrix)

  for(let i = 0; i< nbRow*nbLetter ; i++){
    matrix.push("0");
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${nbLetter}, 50px)`, 
      gap: "12px"
    }}>
      {Array.from({ length: nbRow * nbLetter }).map((_, index) => (
          <Square key={index} letter={matrix[index]} />
      ))}
  </div>
  )

}

function Square({ letter }) {
  return (
      <div style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          color: "black",
          justifyContent: "center",
          border: "2px solid black",
          backgroundColor: "white",
          fontSize: "24px",
          fontWeight: "bold",
          margin: "5px"
      }}>
          {letter}
      </div>
  );
}

function InputArea({motSecret, matrix, nb_column, updateMatrix}){
  return (
    <div>
      <input type="text" id="inputText" onKeyDown={(event) => {
        if(event.code == "Enter"){
          confirmEntry(motSecret, matrix, nb_column, updateMatrix);
        }
      }}></input>
      <button id="inputConfirmation" onClick={() => {confirmEntry(motSecret, matrix, nb_column, updateMatrix)}} >Ok</button>
      <h2 id="Error_component" style={{color:"#ff5733"}}>Prout</h2>
      </div>

  );
}

function confirmEntry(motSecret, matrix, nb_column, updateMatrix){
  let elt = document.getElementById("inputText");
  let elt_error = document.getElementById("Error_component")
  let valeur = elt.value.toUpperCase();
  if(valeur.length == motSecret.length){
    elt_error.innerHTML = "";
    console.log("Le mot essayé est : "+valeur);
    elt.value = "";
    writeInBoard(matrix, nb_column, updateMatrix, valeur);
  }
  else{
    elt_error.innerHTML = "Entrée pas de la bonne taille";
    let matrix2 = new Array()
  }
}

//Il faut regarder quelles lignes sont remplies pour trouver où ajouter des trucs
function whichRowToWrite(matrix, nb_column){
  for (let i = 0; i < matrix.length; i++){
    if(matrix[i] == empty_char){
      return i/nb_column;
    }
  }
}

function writeInBoard(matrix, nb_column, updateMatrix, text){
  let row = whichRowToWrite(matrix, nb_column);
  console.log("Ligne à écrire : "+row);
  const nouvelle_matrice = [...matrix];
  for (let i = 0; i < text.length; i++){
    nouvelle_matrice[row*nb_column+i] = text[i];
  }
  updateMatrix(nouvelle_matrice);
}