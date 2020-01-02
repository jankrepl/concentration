import React from 'react'


const Restart = ({setInputFormSubmitted, setGameInitialized, setNRows, setNCols, setUserName}) => {
    const onClick = () => {
        setInputFormSubmitted(false);
        setGameInitialized(false)
        setNRows(0);
        setNCols(0);
        setUserName("");
    };
    return (<button id="restartButton" onClick={onClick}>Restart</button>)
};

export {Restart}

const Timer = ({time}) => {
    return (
        <div>
            {(time !== 0) && (<h1>Elapsed seconds: {time}</h1>)}
        </div>)
};

export {Timer}