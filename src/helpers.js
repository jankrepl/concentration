function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class DealtCard {
    constructor(val, hasBeenRevealed, isTurned) {
        this.val = val;
        this.hasBeenRevealed = hasBeenRevealed;
        this.isTurned = isTurned;
    }
}


class DealtCards {
    /**
     * Class representing dealt cards
     * @param cards {Array|null} 2D array containing Card instances
     * @param nRows {int} Number of rows
     * @param nCols {int} Number of columns
     */
    constructor(cards, nRows, nCols) {
        this.nRows = nRows;
        this.nCols = nCols;
        if (cards === null) {
            this.cards = this._dealCards(nRows, nCols)

        } else {
            this.cards = cards
        }

    }

    _dealCards(nRows, nCols) {
        const nCards = nRows * nCols;

        let cardValues = [];
        for (let i = 0; i < (nCards / 2); i++) {
            cardValues = cardValues.concat([i, i])
        }

        cardValues = shuffle(cardValues);

        let cards = [];
        for (let r = 0; r < nRows; r++) {
            cards.push([]);
            for (let c = 0; c < nCols; c++) {
                cards[cards.length - 1].push(new DealtCard(cardValues[r * nCols + c], false, false))
            }
        }
        return cards
    }

    /**
     * Turn all cards so that none is visible.
     */
    reset() {
        this.cards.forEach((row, r) => {
            row.forEach((x, c) => {
                x.isTurned = false

            })
        })
    }

    countTurned() {
        let nCardsTurned = 0;
        this.cards.forEach((row, r) => {
            row.forEach((x, c) => {
                nCardsTurned += Number(x.isTurned)
            })
        });
        return nCardsTurned
    }

    markRevealed() {
        let nCardsTurned = this.countTurned();

        if (nCardsTurned === 2) {
            let turnedCards = [];
            this.cards.forEach((row, r) => {
                row.forEach((x, c) => {
                    if (x.isTurned) {
                        turnedCards.push(x)
                    }
                })
            });
            if (turnedCards[0].val === turnedCards[1].val) {
                turnedCards[0].hasBeenRevealed = true;
                turnedCards[1].hasBeenRevealed = true;
            }
        }

    }

    checkGameOver() {
        for (let r = 0; r < this.nRows; r++) {
            for (let c = 0; c < this.nCols; c++) {
                if (!this.cards[r][c].hasBeenRevealed) {
                    return false
                }
            }
        }
        return true
    }

}


export default DealtCards
