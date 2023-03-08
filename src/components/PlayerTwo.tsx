import React from 'react'
import styles from '../styles/styles.module.scss'
import oImage from '../images/pic-of-o.png'




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
        <div className={styles.pic} id={styles["p2Piece1"]}><img className={styles.o} src={oImage} alt="pic of o"/></div>
        <div className={styles.pic} id={styles["p2Piece2"]}><img className={styles.o} src={oImage}  alt="pic of o"/></div>
        <div className={styles.pic} id={styles["p2Piece3"]}><img className={styles.o} src={oImage}  alt="pic of o"/></div>
        <div className={styles.pic} id={styles["p2Piece4"]}><img className={styles.o} src={oImage}  alt="pic of o"/></div>
        <div className={styles.pic} id={styles["p2Piece5"]}><img className={styles.o} src={oImage}  alt="pic of o"/></div>
        <div className={styles.pic} id={styles["p2Piece6"]}><img className={styles.o} src={oImage}  alt="pic of o"/></div>
      </div>
    </div>
  )
}

export default PlayerTwo