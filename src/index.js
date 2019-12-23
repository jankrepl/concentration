import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from "./components/input";
import Restart from "./components/header"

const App = () => {

    const [nRows, setNRows] = useState(5);
    const [nCols, setNCols] = useState(4);
    const [inputFormSubmitted, setInputFormSubmitted] = useState(false);

    return (
        <div id="wrapper">
            <div id="header">
                <Restart setInputFormSubmitted={setInputFormSubmitted}></Restart>
            </div>
            <div id="body">
                {!inputFormSubmitted ? (<InputForm nRows={nRows} setNRows={setNRows} nCols={nCols} setNCols={setNCols}
                                                   setInputFormSubmitted={setInputFormSubmitted}></InputForm>
                ) : (
                    "GAME"
                )}

            </div>
            <div id="footer">
            </div>
        </div>
    )

}

ReactDOM.render(
    <App/>
    , document.getElementById('root'));