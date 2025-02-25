import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const secretWord = "Quentin";
  const gridSize = secretWord.length;
  const essaie = 5;

  const [mat, setMatrix] = useState(
    new Array(gridSize * essaie).fill('N')
  )
  

  return (
    <>
          <Grid nbLetter="5" nbRow="8" matrix={mat}/>
        <div>
          <InputArea motSecret={secretWord} matrix={mat}  updateMatrix={setMatrix}/>
        </div>
    </>
  )
}

export default App

function Grid({ nbLetter, nbRow, matrix }){
  console.log("Matrice : "+matrix)
  nbLetter = 7;
  nbRow = 5;

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
          color: "green",
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

function InputArea(motSecret, matrix, updateMatrix){
  return (
    <div>
      <input type="text" id="inputText" ></input>
      <button id="inputConfirmation" onClick={() => {confirmEntry(motSecret, matrix, updateMatrix)}} >Ok</button>
      <h2 id="Error_component" style={{color:"#ff5733"}}>Prout</h2>
      </div>

  );
}

function confirmEntry(motSecret, matrix, updateMatrix){
  motSecret = motSecret.motSecret//Parce que probleme d'encapsulage

  let elt = document.getElementById("inputText");
  let elt_error = document.getElementById("Error_component")
  let valeur = elt.value;
  if(valeur.length == motSecret.length){
    elt_error.innerHTML = "";
    console.log("Le mot essayé est : "+valeur);
    elt.value = "";
    writeInBoard(matrix, updateMatrix)
  }
  else{
    elt_error.innerHTML = "Entrée pas de la bonne taille";
    let matrix2 = new Array()
  }
}

//Il faut regarder quels colonnes sont remplies pour trouver où ajouter des trucs
function whichRowToWrite(matrix){
  console.log(matrix)
}

function writeInBoard(matrix, updateMatrix){
  let row = 0;
}