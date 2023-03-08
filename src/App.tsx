import React from 'react';
import styles from '../src/styles/styles.module.scss'
import GameBoard from './components/GameBoard'
import PlayerOne from './components/PlayerOne'
import PlayerTwo from './components/PlayerTwo'



function App() {
  return (
    <>
      {/* Header Content */}
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Tic-Tac-Toe</h1>
            <button type="button" className={styles.button} id={styles["playAgain"]}>Play Again</button>
          </div>
        </div>

        {/* Game Content */}
        <PlayerOne/>
        <GameBoard />
        <PlayerTwo />



        {/* Footer Content */}
        <footer className={styles.footer}>
          <p>Tic Tac Toe game written by Rachel Ciarlante</p>
        </footer>

      </div>
    </>
  )
}

export default App;
