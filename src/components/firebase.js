import * as firebase from 'firebase';
import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
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
        ref.orderByChild('score').limitToFirst(nEntriesToDisplay).once('value').then(
            (snapshot) => {
                let newDB = [];
                snapshot.forEach(x => {newDB.push(x.val())});
                setDB(newDB);
            }
        )
    }, [finalTime, nCards, userName, nEntriesToDisplay]);

    let items;
    if (db !== null) {
        // console.log(db);
        items = Object.keys(db).map(function (key, ix) {
            return [ix + 1, db[key]['userName'], db[key]['score'], db[key]['timeStamp']];
        });

    } else {
        return <h1>Fetching leaderboard ...</h1>
    }
    const createRow = ([rank, name, score, timeStamp]) => {
        let d = new Date(timeStamp);
        let day = d.getDay();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        let hours = d.getHours();
        let time = `${day}/${month}/${year} ${hours}:${minutes}`;
        return {rank, name, score, time, timeStamp}  // probably jsx:D
    };

    const rows = items.map(createRow);

    return (
        <TableContainer id="table">
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headerCell} align="center">Ranking</TableCell>
                        <TableCell className={classes.headerCell} align="center">Username</TableCell>
                        <TableCell className={classes.headerCell} align="center">Score</TableCell>
                        <TableCell className={classes.headerCell} align="center">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.timeStamp}>
                            <TableCell component="th" scope="row" align="center">{row.rank}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.score}</TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>


            </Table>
        </TableContainer>)
    //
    // return (<div>{temp}</div>)

};


export default Firebase