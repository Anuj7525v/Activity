import React from 'react';

function CurrentDate()  {
    const now = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
   
    

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
};

export default CurrentDate;