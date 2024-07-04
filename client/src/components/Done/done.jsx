import React from "react";
import styles from './done.module.css';
import { VscCollapseAll } from "react-icons/vsc";




function Done() {
    return (
        <div className={styles.page}>
            <div className={styles.Header}>
                <p>Done</p>
                <div className={styles.btn}>
                    <button><VscCollapseAll />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Done;