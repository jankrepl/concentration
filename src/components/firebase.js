import * as firebase from 'firebase';
import React, {useEffect, useState} from "react";

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
    useEffect(() => {
        // connect to database
        console.log('I AM INSIDE')
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
        // refEntry.update(newEntry);
        ref.push(newEntry);

        // Get all highscores for a given nCards
        ref.once('value').then(
            (snapshot) => setDB(snapshot.val())
        )
    }, [finalTime, nCards, userName]);

    console.log('RENDER LEADERBOARD')
    let temp;
    if (db !== null) {
        let items = Object.keys(db).map(function(key) {
            return [db[key]['userName'], db[key]['score']];
        });

        items.sort(function(first, second) {
            return -(second[1] - first[1]);
        });

        items = items.slice(0, nEntriesToDisplay);
        temp = items.map((entry, ix) => <li key={ix}>{entry[0]}: {entry[1]}</li>)
    } else {
        temp = <h1>Loading leaderboard.</h1>
    }

    return (<div>{temp}</div>)

};


export default Firebase