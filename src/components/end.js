import React from 'react'
import Firebase from "./firebase";

const End = ({userName, finalTime, setTime, nCards}) => {
    setTime(0); // reset timer
    return (
        <React.Fragment>
            <h1>{`Congratz ${userName}! Finished in ${finalTime} seconds`}</h1>
            <Firebase nCards={nCards} userName={userName} finalTime={finalTime} nEntriesToDisplay={20}/>
        </React.Fragment>)
};

export default End;
