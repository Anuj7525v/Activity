import React from "react";
import styles from './inProgress.module.css';
import { VscCollapseAll } from "react-icons/vsc";




function InProgress() {
    return (
        <div className={styles.page}>
            <div className={styles.Header}>
                <p>In Progress</p>
                <div className={styles.btn}>
                    <button><VscCollapseAll />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default InProgress;