import React from 'react';
import styles from '../src/styles/styles.module.scss'
import GameBoard from './components/GameBoard'
import PlayerOne from './components/PlayerOne'
import PlayerTwo from './components/PlayerTwo'
import Header from './components/Header'


function App() {
  return (
    <>
      {/* Header Content */}
      <div className={styles.container}>

        <Header/>
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
