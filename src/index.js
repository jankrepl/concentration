import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from "./components/game";
import InputForm from "./components/input";
import Restart from "./components/header"


const App = () => {

    const [nRows, setNRows] = useState(2);
    const [nCols, setNCols] = useState(3);
    const [userName, setUserName] = useState('CoolUser');
    const [inputFormSubmitted, setInputFormSubmitted] = useState(false);
    const [gameInitialized, setGameInitialized] = useState(false);
    const [dc, setDC] = useState(null);


    return (
        <div id="wrapper">
            <div id="header">
                <Restart setInputFormSubmitted={setInputFormSubmitted}
                         setGameInitialized={setGameInitialized}/>
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
                           setGameInitialized={setGameInitialized}/>)
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