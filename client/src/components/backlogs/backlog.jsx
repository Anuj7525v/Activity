

 import React from "react";
import styles from './backlog.modules.css';
import { VscCollapseAll } from "react-icons/vsc";




function Backlog() {
    return (
        <div className={styles.page}>
            <div className={styles.Header}>
                <p>Backlog</p>
                <div className={styles.btn}>
                    <button><VscCollapseAll />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Backlog;
 