import React from 'react'
import styles from '../styles/styles.module.scss'
import xImage from '../images/pic-of-x.png'




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
        <div className={styles.pic} id={styles["p1Piece1"]}><img className={styles.x} src={xImage} alt="pic of x"/></div>
        <div className={styles.pic} id={styles["p1Piece2"]}><img className={styles.x} src={xImage}  alt="pic of x"/></div>
        <div className={styles.pic} id={styles["p1Piece3"]}><img className={styles.x} src={xImage}  alt="pic of x"/></div>
        <div className={styles.pic} id={styles["p1Piece4"]}><img className={styles.x} src={xImage}  alt="pic of x"/></div>
        <div className={styles.pic} id={styles["p1Piece5"]}><img className={styles.x} src={xImage}  alt="pic of x"/></div>
        <div className={styles.pic} id={styles["p1Piece6"]}><img className={styles.x} src={xImage}  alt="pic of x"/></div>
      </div>
    </div>
  )
}

export default PlayerOne
