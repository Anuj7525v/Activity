import React from 'react';
import styles from './ana.module.css';

function Analytics() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h3>Analytics</h3>
            </div>
            <div className={styles.item}>
                <ul>
                    <li>Backlog Tasks</li>
                    <li>To-do Tasks</li>
                    <li>In-Progress Tasks</li>
                    <li>Completed Tasks</li>
                </ul>
                <ul>
                    <li>Low Priority</li>
                    <li>High Priority</li>
                    <li>Moderate Priority</li>
                    <li>Due Date Tasks</li>
                </ul>
            </div>
        </div>
    )
}

export default Analytics;