'use strict'


import fetch from 'node-fetch';
import {readFile, writeFile} from 'node:fs/promises';
import fs from 'node:fs/promises';


const key = 'k_8x649t7o'

const movies = [ "tt0111161", "tt0068646",  "tt0468569"]

var totalDuration = 0;

function fetchID(movieID) {
    return fetch('https://imdb-api.com/en/API/Title/' + key + '/' + movieID) // p1
        .then(res => {
            console.log(res.status, res.statusText);
             return res.json()

        })
        .then(txt => {
            return { totalduration: totalDuration = totalDuration + parseInt(txt.runtimeMins, 10),
                movies : [ infoMovies(txt) ]
            }

        })
        .catch(err => {
            console.log(err);
        })
}

function infoMovies (movieInfo) {
    return {
        id: movieInfo.id,
        title: movieInfo.title,
        duration: parseInt(movieInfo.runtimeMins, 10),
    }
}
const IN_FILE_NAME = './movies.json'
const OUT_FILE_NAME = './moviesLista.json'
function outPut(filmes) {

    let array = []

    filmes.map(values => fetchID(values).then(txt => array.push(txt)))

    fs.writeFile(OUT_FILE_NAME, JSON.stringify(array))
        .then( () => console.log(`File ${OUT_FILE_NAME} written with success `)  )
        .catch( err => console.log(`File not written. Reason ${err}`)  )

    return array

}


console.log(outPut(movies))

