import * as firebase from 'firebase';
import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    headerCell: {
        "font-weight": "bold",
    },
    table: {
        height: "90%",
        width: "90%",
        margin: "0 auto"

    }
}
);


let firebaseConfig = {
    apiKey: "AIzaSyDTBOhkfQUnZAIlWlkQa1dbf8338RXIhCI",
    authDomain: "concentration-6830e.firebaseapp.com",
    databaseURL: "https://concentration-6830e.firebaseio.com",
    projectId: "concentration-6830e",
    storageBucket: "concentration-6830e.appspot.com",
    messagingSenderId: "568314381412",
    appId: "1:568314381412:web:ca8c364c9a189cf5f6cb71",
    measurementId: "G-NJLRNG3GVZ"
};

// Initialize Firebase
const Firebase = ({nCards, userName, finalTime, nEntriesToDisplay}) => {

    const [db, setDB] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        // connect to database
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // get reference
        let ref = firebase.database().ref('highscoresNew').child(String(nCards));

        // Upload highscore
        let newEntry = {};
        newEntry['score'] = finalTime;
        newEntry['userName'] = userName;
        newEntry['timeStamp'] = (new Date()).getTime();
        ref.push(newEntry);

        // Get all highscores for a given nCards
        ref.once('value').then(
            (snapshot) => setDB(snapshot.val())
        )
    }, [finalTime, nCards, userName]);

    console.log('RENDER LEADERBOARD');
    let items;
    if (db !== null) {
        items = Object.keys(db).map(function (key) {
            return [db[key]['userName'], db[key]['score'], db[key]['timeStamp']];
        });

        items.sort(function (first, second) {
            return -(second[1] - first[1]);
        });

        items = items.slice(0, nEntriesToDisplay);
    } else {
        return null
    }
    const createRow = ([name, score, timeStamp]) => {
        let time = (new Date(timeStamp)).toString();
        return {name, score, time, timeStamp}  // probably jsx:D
    };

    const rows = items.map(createRow);

    return (
        <TableContainer id="table">
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headerCell}>Username</TableCell>
                        <TableCell className={classes.headerCell} align="right">Score</TableCell>
                        <TableCell className={classes.headerCell} align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.timeStamp}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.score}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>


            </Table>
        </TableContainer>)
    //
    // return (<div>{temp}</div>)

};


export default Firebase