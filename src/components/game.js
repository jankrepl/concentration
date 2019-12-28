import React from 'react'
import DealtCards from '../helpers'
import Card from './card'
import End from "./end";

const Game = ({dc, setDC, nRows, nCols, userName, gameInitialized, setGameInitialized}) => {
    // EXECUTION
    if (!gameInitialized || (dc === null)) {
        // very first game or restarted
        dc = new DealtCards(null, nRows, nCols);
        setDC(dc);
        setGameInitialized(true)

    }


    const cardValues = [];
    for (let r = 0; r < nRows; r++) {
        for (let c = 0; c < nCols; c++) {
            cardValues.push([dc, r, c])
        }
    }

    let temp = (cardValues.map((x, ix) => <div className="gridItem" key={ix}><Card dc={x[0]} row={x[1]} col={x[2]}
                                                                                   setDC={setDC} color='black'
                                                                                   fontSize={20}
                                                                                   backgroundColorIsTurned='green'/>
    </div>));

    return (
        <div>
            {!dc.checkGameOver() ? (
                <div className="gridContainer" style={{'gridTemplateColumns': `repeat(${nCols},auto`}}>
                    {temp}
                </div>) : (<End userName={userName}/>)}
        </div>)

};


export default Game