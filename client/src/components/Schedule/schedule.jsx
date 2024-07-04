import React, { useState, useEffect } from 'react';
 import styles from './schedule.module.css';
function Schedule(){
    const [selectedRange, setSelectedRange] = useState('Today');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(() => {
        updateDateRange(selectedRange);
    }, [selectedRange]);
    
    const handleChange = (event) => {
        setSelectedRange(event.target.value);
    };

    const updateDateRange = (range) => {
        const now = new Date();
        let start = now;
        
        switch (range) {
            case 'Today':
                start = now;
                break;
            case 'This Week':
                start = new Date(now.setDate(now.getDate() - now.getDay()));
                break;
            case 'This Month':
                start = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            default:
                break;
        }
        
        setCurrentDate(now);
        setStartDate(start);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div>
            <label>
                <select value={selectedRange} onChange={handleChange} className={styles.schedule}>
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                </select>
            </label>
        </div>
    );
};

export default Schedule;
