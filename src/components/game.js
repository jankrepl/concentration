import React from 'react'
import DealtCards from '../helpers'
import Card from './card'

const Game = ({dc, setDC, nRows, nCols, gameInitialized, setGameInitialized}) => {

    // HELPERS


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

    let temp = (cardValues.map((x, ix) => <div className="gridItem" key={ix}><Card dc={x[0]} row={x[1]} col={x[2]} setDC={setDC} color='black' fontSize={20} backgroundColorIsTurned='green'/></div>));

    return (
        <div className="gridContainer" style={{'gridTemplateColumns': `repeat(${nCols},auto` }}>
            {temp}
        </div>)


};


export default Game