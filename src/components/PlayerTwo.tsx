import React, { useState } from 'react'
import styles from '../styles/styles.module.scss'
import DraggableGamePiece from './DraggableGamePiece'



export const PlayerTwo = () => {
  const [playerName, setPlayerName] = useState('Player One');
  const [nameSubmitted, setNameSubmitted] = useState(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).elements.namedItem('nameP2') as HTMLInputElement;
    if (name) {
      setPlayerName(name.value);
      setNameSubmitted(true);
      hideFormForPlayer();
    }
  }
  
  function hideFormForPlayer() {
    const formPlayerTwo = document.querySelector('.formPlayerTwo');
    (formPlayerTwo as HTMLElement).style.display = 'none';
    showGamePieces();
  }

  function showGamePieces() {
    return(
      <div className={styles.pieces2}>
        <p id={styles["message2"]}>Click and drag your game piece to the board.</p>
        <DraggableGamePiece id={styles['p2Piece1']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece2']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece3']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece4']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece5']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece6']} piece="o" />
      </div>
    )
  }
  
  
  return (
    <div className={styles.playerTwo}>
       <h1 id={styles['playTwo']}>{nameSubmitted ? playerName : 'Player Two'}</h1>
      {!nameSubmitted && (
        <form className={styles.formPlayerOne} onSubmit={handleSubmit}>
          <p>Name:</p>
          <input type="text" id={styles['nameP2']} name="nameP2" />
          <br /><br />
          <input type="submit" className={styles.button} id={styles['submit2']} value="Submit" />
        </form>
      )}
      <div>
      {nameSubmitted && showGamePieces()}
      </div>
    </div>
  )
}

export default PlayerTwo