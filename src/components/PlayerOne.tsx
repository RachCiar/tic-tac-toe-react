import React, { useState } from 'react'
import styles from '../styles/styles.module.scss'
import DraggableGamePiece from './DraggableGamePiece'



export const PlayerOne = () => {
  const [playerName, setPlayerName] = useState('Player One');
  const [nameSubmitted, setNameSubmitted] = useState(false);


  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).elements.namedItem('nameP1') as HTMLInputElement;
    if (name) {
      setPlayerName(name.value);
      setNameSubmitted(true);
      hideFormForPlayer();
    }
  }
  
  function hideFormForPlayer() {
    const formPlayerOne = document.querySelector('.formPlayerOne');
    (formPlayerOne as HTMLElement).style.display = 'none';
    showGamePieces();
  }

  function showGamePieces() {
    return(
      <div className={styles.pieces1}>
        <p id={styles["message1"]}>Click and drag your game piece to the board.</p>
        <DraggableGamePiece id={styles['p1Piece1']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece2']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece3']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece4']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece5']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece6']} piece="x" />
      </div>
    )
  }
  
  
  return (
    <div className={styles.playerOne}>
       <h1 id={styles['playOne']}>{nameSubmitted ? playerName : 'Player One'}</h1>
      {!nameSubmitted && (
        <form className={styles.formPlayerOne} onSubmit={handleSubmit}>
          <p>Name:</p>
          <input type="text" id={styles['nameP1']} name="nameP1" />
          <br /><br />
          <input type="submit" className={styles.button} id={styles['submit1']} value="Submit" />
        </form>
      )}
      <div>
      {nameSubmitted && showGamePieces()}
      </div>
    </div>
  )

}

export default PlayerOne
