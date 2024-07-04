import React, { useState, useEffect } from 'react';
import styles from './board.module.css';
import CurrentDate from '../Date/date';
import Schedule from '../Schedule/schedule';
import Todo from '../Todo/todo';
import Backlog from '../backlogs/backlog';
import InProgress from '../InProgress/inProgress';
import Done from '../Done/done';
function Board() {
  const [auth, setAuth] = useState(null);
 
  useEffect(() => {
     }, []);


 
    


  return (
    <div className={styles.page}>
      <div className={styles.Header}>
        <div className={styles.ontop}>
        <div className={styles.user}>
        Welcome!
        </div>
        <div className={styles.date}>
          <span style={{"color": "grey"}}><CurrentDate /></span> 
        </div>
        </div>
        <div className={styles.onbottom}>
        <div className={styles.Board}>
        <h3>Board</h3></div>
        <div className={styles.Schedule}>
          <Schedule />
        </div>
        </div>

        
      </div>

      <div className={styles.main}>

        <div className={styles.box}>
          <div className={styles.backlog}>
            <Backlog/>
          </div>
          <div className={styles.todo}>
             <Todo/>
          </div>
          <div className={styles.inProgress}>
            <InProgress/>
          </div>
          <div className={styles.done}>
            <Done/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board;