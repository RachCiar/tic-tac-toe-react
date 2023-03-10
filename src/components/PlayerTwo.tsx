import React from 'react'
import styles from '../styles/styles.module.scss'
import DraggableGamePiece from './DraggableGamePiece'




export const PlayerTwo = () => {


  return (
    <div className={styles.playerTwo}>
      <h1 id={styles["playTwo"]}>Player Two</h1>
      <form className={styles.formPlayerTwo}>
        <p>Name:</p>
        <input type="text" id={styles["nameP2"]} name="name2" />
        <br /><br />
        <input type="submit" className={styles.button} id={styles["submit2"]} value="Submit" />
      </form>
      <div className={styles.pieces2}>
        <p id={styles["message2"]}>Click and drag your game piece to the board.</p>
        <DraggableGamePiece id={styles['p2Piece1']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece2']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece3']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece4']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece5']} piece="o" />
        <DraggableGamePiece id={styles['p2Piece6']} piece="o" />
      </div>
    </div>
  )
}

export default PlayerTwo