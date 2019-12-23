import React from 'react'


const InputForm = ({nRows, setNRows, nCols, setNCols, setInputFormSubmitted}) => {

    const onChangeRows = (e) => {
        setNRows(Number(e.target.value))
    };

    const onChangeCols = (e) => {
        setNCols(Number(e.target.value))
    };

    const checkInputCorrect = () => {
        return nCols * nRows % 2 === 0
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (checkInputCorrect()) {
            setInputFormSubmitted(true);
        } else {
            alert('Input cards needs to be even')
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Number of rows:</label>
                <input type="text" name="Number of rows" value={nRows} onChange={onChangeRows}></input>
            </div>
            <div>
                <label>Number of columns:</label>
                <input type="text" name="Number of columns" value={nCols} onChange={onChangeCols}></input>
            </div>
            <div>
                <input type="submit" value="Start game"></input>
            </div>

        </form>)
};


export default InputForm