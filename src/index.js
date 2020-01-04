import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/game";
import InputForm from "./components/input";
import {Restart, Timer, Info} from "./components/header"


const App = () => {

    const [nRows, setNRows] = useState(0);  // like this the placeholder will show
    const [nCols, setNCols] = useState(0);  // like this the placeholder will show
    const [userName, setUserName] = useState('');  // like this the placeholder will show
    const [inputFormSubmitted, setInputFormSubmitted] = useState(false);
    const [gameInitialized, setGameInitialized] = useState(false);
    const [dc, setDC] = useState(null);
    const [time, setTime] = useState(0);

    return (
        <div id="wrapper">
            <div id="header">
                <Restart setInputFormSubmitted={setInputFormSubmitted}
                         setGameInitialized={setGameInitialized}
                         setNRows={setNRows}
                         setNCols={setNCols}
                         setUserName={setUserName}
                />
                <Timer time={time}/>
                <Info/>
            </div>
            <div id="body">
                {!inputFormSubmitted ? (
                    <InputForm nRows={nRows}
                               setNRows={setNRows}
                               nCols={nCols}
                               setNCols={setNCols}
                               userName={userName}
                               setUserName={setUserName}
                               setInputFormSubmitted={setInputFormSubmitted}/>

                ) : (<Game dc={dc}
                           setDC={setDC}
                           nRows={nRows}
                           nCols={nCols}
                           userName={userName}
                           gameInitialized={gameInitialized}
                           setGameInitialized={setGameInitialized}
                           time={time}
                           setTime={setTime}
                />)
                }

            </div>
            <div id="footer">
            </div>
        </div>
    )

}

ReactDOM.render(
    <App/>
    , document.getElementById('root'));