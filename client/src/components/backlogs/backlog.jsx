import React, { useState } from 'react';
import axios from 'axios';

function Backlog() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [checklist, setChecklist] = useState(['']);
    const [dueDate, setDueDate] = useState('');

 

    const handleChecklistChange = (index, value) => {
        const newChecklist = [...checklist];
        newChecklist[index] = value;
        setChecklist(newChecklist);
    };

    return (
        <form /*onSubmit={handleSubmit}  */className="task-form">
            <h1>Create Task</h1>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <div>
                <label>Select Priority</label>
                <div>
                    <input
                        type="radio"
                        id="high"
                        name="priority"
                        value="HIGH"
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    />
                    <label htmlFor="high">HIGH PRIORITY</label>
                    <input
                        type="radio"
                        id="moderate"
                        name="priority"
                        value="MODERATE"
                        onChange={(e) => setPriority(e.target.value)}
                    />
                    <label htmlFor="moderate">MODERATE PRIORITY</label>
                    <input
                        type="radio"
                        id="low"
                        name="priority"
                        value="LOW"
                        onChange={(e) => setPriority(e.target.value)}
                    />
                    <label htmlFor="low">LOW PRIORITY</label>
                </div>
            </div>
            <div>
                <label>Checklist ({checklist.length})</label>
                {checklist.map((item, index) => (
                    <input
                        key={index}
                        type="text"
                        value={item}
                        onChange={(e) => handleChecklistChange(index, e.target.value)}
                    />
                ))}
                <button type="button" onClick={() => setChecklist([...checklist, ''])}>+ Add</button>
            </div>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button">Cancel</button>
        </form>
    );
};

export default Backlog;

/* import React from "react";
import styles from './backlog.module.css';
import { VscCollapseAll } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";



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
 */