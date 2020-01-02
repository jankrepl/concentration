import React from 'react'


const Card = ({dc, row, col, setDC, backgroundColorIsTurned}) => {
    // Helpers

    const onClick = () => {
        setDC((dcOld) => {
            // make a deep copy
            const dcNew = Object.assign(Object.create(Object.getPrototypeOf(dcOld)), dcOld);

            // if 2 cards turned make sure they are not visible
            if (dcNew.countTurned() === 2) {
                dcNew.reset()
            }

            // Turn selected card (make sure not turned already)
            if (!dcNew.cards[row][col].isTurned) {
                dcNew.cards[row][col].isTurned = !dcNew.cards[row][col].isTurned;
            }
            dcNew.markRevealed();
            return dcNew
        })

    };
    const card = dc.cards[row][col];

    const hasBeenRevealed = card.hasBeenRevealed;
    const isTurned = card.isTurned;

    let value = '';  //if not revealed
    let backgroundColor = '#FF6F42';

    if (isTurned) {
        value = card.val;
        backgroundColor = backgroundColorIsTurned;
    }

    return (
        <React.Fragment> {!hasBeenRevealed && (
            <button className="cardButton" style={{
                backgroundColor: `${backgroundColor}`

            }} onClick={onClick}>{value}</button>)}
        </React.Fragment>)
};

export default Card