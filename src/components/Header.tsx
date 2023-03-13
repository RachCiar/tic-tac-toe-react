
import React from 'react';
import styles from '../styles/styles.module.scss'


export const Header = () => {


    function handlePlayAgain() {
          // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    

        return (

          
            <div className={styles.header}>
                    <div>
                        <h1>Tic-Tac-Toe</h1>
                       
                        <button 
                        type="button" 
                        className={styles.button} 
                        id={styles["playAgain"]} 
                        onClick={handlePlayAgain}>Play Again</button>
                      
                    </div>
               </div>
        
   
        )
}

export default Header