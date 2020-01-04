import React from 'react'
import HelpIcon from '@material-ui/icons/Help';
import {makeStyles} from '@material-ui/core/styles';

const Restart = ({setInputFormSubmitted, setGameInitialized, setNRows, setNCols, setUserName}) => {
    const onClick = () => {
        setInputFormSubmitted(false);
        setGameInitialized(false)
        setNRows(0);
        setNCols(0);
        setUserName("");
    };
    return (<button id="restartButton" onClick={onClick}>Restart</button>)
};

export {Restart}

const Timer = ({time}) => {
    return (
        <div id="timer">
            {(time !== 0) && (<h1 id="timerText">Elapsed seconds: {time}</h1>)}
        </div>)
};

export {Timer}


const useStyles = makeStyles({
        infoButton: {
            "font-size": "40px",
            "marginRight": "5%",
            float: "right",
            "marginTop": "25px",
            "transition-duration": "0.3s",
            "transition-property": "transform",
            "&:hover": {
                transform: "scale(1.1, 1.1)"
            }

        }
    }
);

const Info = () => {

    const classes = useStyles();
    return (<HelpIcon onClick={() => {
        window.location.href = 'https://en.wikipedia.org/wiki/Concentration_(card_game)'
    }} className={classes.infoButton}/>)
};

export {Info}