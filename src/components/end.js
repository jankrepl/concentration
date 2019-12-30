import React from 'react'
import Firebase from "./firebase";

const End = ({userName, finalTime, setTime, nCards}) => {
    setTime(0); // reset timer
    return (
        <div>
            <h1>Congratz {userName}! Finished in {finalTime} seconds</h1>
            <Firebase nCards={nCards} userName={userName} finalTime={finalTime} nEntriesToDisplay={5}/>
        </div>)
};

export default End;
