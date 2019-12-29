import React from 'react'

const End = ({userName, finalTime, setTime}) => {
    setTime(0); // reset timer
    return (<h1>Congratz {userName}! Finished in {finalTime} seconds</h1>)
};

export default End;
