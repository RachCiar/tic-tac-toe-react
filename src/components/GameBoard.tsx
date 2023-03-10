import React, { useState } from 'react';
import styles from '../styles/styles.module.scss';
import DraggableGamePiece from './DraggableGamePiece';

export const GameBoard = () => {
  const [gamePieces, setGamePieces] = useState<string[]>([]);

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const gamePieceId = event.dataTransfer.getData('text');
    const gamePiece = document.getElementById(gamePieceId);

    if (gamePiece && gamePieces.indexOf(gamePieceId) === -1) {
      setGamePieces([...gamePieces, gamePieceId]);
      event.currentTarget.appendChild(gamePiece);
      checkAnswer();
    }
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.style.background = '#1abc9c';
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.currentTarget.style.background = '';
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const checkAnswer =() => {
    const imgBoxes: Array<string | null> = [];

    const boxes = document.querySelectorAll('.gameBox');
  
    boxes.forEach((box) => {
        const imgBox = box.querySelector('img');
        imgBoxes.push(imgBox ? imgBox.getAttribute('class') : null);
      });
  
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        imgBoxes[a] &&
        imgBoxes[a] === imgBoxes[b] &&
        imgBoxes[a] === imgBoxes[c]
      ) {
        const winner = document.querySelector('.winner') as HTMLDivElement;
        winner.style.display = 'block';
        const playerOneName = (document.getElementById('nameP1') as HTMLInputElement)?.value;
        const playerTwoName = (document.getElementById('nameP2') as HTMLInputElement)?.value;

        if (imgBoxes[a] === 'x') {
          document.querySelector('.text')!.innerHTML = `${playerOneName} WINS!!!`;
        } else {
          document.querySelector('.text')!.innerHTML = `${playerTwoName} WINS!!!`;
        }
        return;
      }
    }
  
    if (document.querySelectorAll('.gameBox img').length === 9) {
      const winner = document.querySelector('.winner') as HTMLDivElement;
      winner.style.display = 'block';
      document.querySelector('.text')!.innerHTML = 'TIE GAME!! NO ONE WINS!';
    }
  }
  

  const gameBoard = [
    ['box1', 'box2', 'box3'],
    ['box4', 'box5', 'box6'],
    ['box7', 'box8', 'box9'],
  ];

  return (
    <div className={styles.gameBoard}>
      {gameBoard.map((row, rowIndex) => (
        <section key={`row${rowIndex}`} className={styles.gameRow}>
          {row.map((boxId) => (
            <div
              key={boxId}
              id={styles[boxId]}
              onDrop={onDrop}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDragOver={onDragOver}
            >
              {gamePieces.includes(`p1Piece${boxId.slice(-1)}`) && <DraggableGamePiece id={styles[`p1Piece${boxId.slice(-1)}`]} piece="x" />}
              {gamePieces.includes(`p2Piece${boxId.slice(-1)}`) && <DraggableGamePiece id={styles[`p2Piece${boxId.slice(-1)}`]} piece="o" />}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default GameBoard;
