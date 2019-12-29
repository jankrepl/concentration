import React from 'react'


const Restart = ({setInputFormSubmitted, setGameInitialized}) => {
    const onClick = () => {
        setInputFormSubmitted(false);
        setGameInitialized(false)
    };
    return (<button onClick={onClick}>Restart</button>)
};

export {Restart}

const Timer = ({time}) => {
    return (
        <div>
            {(time !== 0) && (<h1>Elapsed seconds: {time}</h1>)}
        </div>)
};

export {Timer}