import React, {useEffect} from 'react'
import DealtCards from '../helpers'
import Card from './card'
import End from "./end";

const Game = ({dc, setDC, nRows, nCols, userName, gameInitialized, setGameInitialized, time, setTime}) => {

    //Set Timer
    useEffect(() => {
        const interval = setInterval(() => setTime(oldTime => oldTime + 1), 1000);// componentDidMount

        return () => {
            clearInterval(interval);
            setTime(0)
        }  // componentWillUnmount
        /* eslint-disable-next-line */
    }, []);


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
            {!dc.checkGameOver(time) ? (
                <div className="gridContainer" style={{'gridTemplateColumns': `repeat(${nCols},auto`}}>
                    {temp}
                </div>) : (<End userName={userName} finalTime={dc.finalTime} setTime={setTime}/>)}
        </div>)

};


export default Game