import React from 'react'


const Restart = ({setInputFormSubmitted}) => {
    return (<button onClick={() => setInputFormSubmitted(false)}>Restart</button>)
};

export default Restart