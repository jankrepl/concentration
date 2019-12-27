import React from 'react'


const Restart = ({setInputFormSubmitted, setGameInitialized}) => {
    const onClick = () => {
        setInputFormSubmitted(false);
        setGameInitialized(false)
    };
    return (<button onClick={onClick}>Restart</button>)
};

export default Restart