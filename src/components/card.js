import React from 'react'


const Card = ({dc, row, col, setDC, color, fontSize, backgroundColorIsTurned}) => {
    // Helpers

    const onClick = () => {
        console.log('INSIDE onClick', row, col);
        setDC((dcOld) => {
            const dcNew = JSON.parse(JSON.stringify(dcOld));
            dcNew.cards[row][col].isTurned = !dcNew.cards[row][col].isTurned;
            return dcNew
        })
    }
    const card = dc.cards[row][col];

    // const hasBeenRevealed = card.hasBeenRevealed;
    const isTurned = card.isTurned;

    let value = '';  //if not revealed
    let backgroundColor = 'red';

    if (isTurned) {
        console.log('I AM HEERE');
        value = card.val;
        backgroundColor = backgroundColorIsTurned;
        console.log(card)
    }

    return (
        <div>
            <button style={{
                color: `${color}`,
                fontSize: `${fontSize}px`,
                backgroundColor: `${backgroundColor}`

            }} onClick={onClick}>{value}</button>
        </div>)
}

export default Card