import React from 'react'
import styles from '../styles/styles.module.scss'


export const GameBoard = () => {

    return(

    <div className={styles.gameBoard}>
            <section className={styles.gameRow}>
                <div id={styles["box1"]}></div>
                <div id={styles["box2"]}></div>
                <div id={styles["box3"]}></div>
            </section>
            <section className={styles.gameRow}>
                <div id={styles["box4"]}></div>
                <div id={styles["box5"]}></div>
                <div id={styles["box6"]}></div>
            </section>
            <section className={styles.gameRow}>
                <div id={styles["box7"]}></div>
                <div id={styles["box8"]}></div>
                <div id={styles["box9"]}></div>
            </section>

        </div>

)
}

export default GameBoard