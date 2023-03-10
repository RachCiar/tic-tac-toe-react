import React from 'react'
import styles from '../styles/styles.module.scss'
import DraggableGamePiece from './DraggableGamePiece'



export const PlayerOne = () => {


  return (
    <div className={styles.playerOne}>
      <h1 id={styles["playOne"]}>Player One</h1>
      <form className={styles.formPlayerOne}>
        <p>Name:</p>
        <input type="text" id={styles["nameP1"]} name="name1" />
        <br /><br />
        <input type="submit" className={styles.button} id={styles["submit1"]} value="Submit" />
      </form>
      <div className={styles.pieces1}>
        <p id={styles["message1"]}>Click and drag your game piece to the board.</p>
        <DraggableGamePiece id={styles['p1Piece1']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece2']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece3']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece4']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece5']} piece="x" />
        <DraggableGamePiece id={styles['p1Piece6']} piece="x" />
      </div>
    </div>
  )
}

export default PlayerOne
