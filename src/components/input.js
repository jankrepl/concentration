import React from 'react'


const InputForm = ({nRows, setNRows, nCols, setNCols, userName, setUserName, setInputFormSubmitted}) => {

    const onChangeRows = (e) => {
        setNRows(Number(e.target.value))
    };

    const onChangeCols = (e) => {
        setNCols(Number(e.target.value))
    };

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    };

    const checkInputCorrect = () => {
        return (nCols * nRows % 2 === 0 && userName !== '')
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (checkInputCorrect()) {
            setInputFormSubmitted(true);
        } else {
            alert('Input cards need to be even and username needs to be specified!')
        }

    };

    return (
        <form id="inputForm" onSubmit={onSubmit}>
            <div>
                <input className="inputField"
                       placeholder="# rows"
                       type="text"
                       value={nRows || ""}
                       onChange={onChangeRows}
                />
            </div>
            <div>
                <input className="inputField"
                       placeholder="# columns"
                       type="text"
                       value={nCols || ""}
                       onChange={onChangeCols}/>
            </div>
            <div>
                <input className="inputField"
                       placeholder="Username"
                       type="text"
                       value={userName}
                       onChange={onChangeUserName}/>
            </div>
            <div>
                <input id="submitButton" type="submit" value="Start game"/>
            </div>

        </form>)
};


export default InputForm