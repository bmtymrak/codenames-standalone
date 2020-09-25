import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const wordList = ['africa', 'agent', 'air', 'alien', 'amazon', 'angel', 'antarctica', 'apple', 'arm', 'back', 'band', 'bank', 'bark', 'beach', 'belt', 'berlin', 'berry', 'board', 'bond', 'boom', 'bow', 'box', 'bug', 'canada', 'capital', 'cell', 'center', 'china', 'chocolate', 'circle', 'club', 'compound', 'copper', 'crash', 'cricket', 'cross', 'death', 'dice', 'dinosaur', 'doctor', 'dog', 'dress', 'dwarf', 'eagle', 'egypt', 'engine', 'england', 'europe', 'eye', 'fair', 'fall', 'fan', 'field', 'file', 'film', 'fish', 'flute', 'fly', 'forest', 'fork', 'france', 'gas', 'ghost', 'giant', 'glass', 'glove', 'gold', 'grass', 'greece', 'green', 'ham', 'head', 'himalaya', 'hole', 'hood', 'hook', 'human', 'horseshoe', 'hospital', 'hotel', 'ice', 'ice cream', 'india', 'iron', 'ivory', 'jam', 'jet', 'jupiter', 'kangaroo', 'ketchup', 'kid', 'king', 'kiwi', 'knife', 'knight', 'lab', 'lap', 'laser', 'lawyer', 'lead', 'lemon', 'limousine', 'lochness', 'log', 'mammoth', 'maple', 'march', 'mass', 'mercury', 'millionaire', 'model', 'mole', 'moscow', 'mouth', 'mug', 'needle', 'net', 'new york', 'night', 'note', 'novel', 'nurse', 'nut', 'oil', 'olive', 'olympus', 'opera', 'orange', 'paper', 'park', 'part', 'paste', 'phoenix', 'piano', 'telescope', 'teacher', 'switch', 'swing', 'sub', 'stick', 'staff', 'stadium', 'sprint', 'spike', 'snowman', 'slip', 'shot', 'shadow', 'server', 'ruler', 'row', 'rose', 'root', 'rome', 'rock', 'robot', 'robin', 'revolution', 'rat', 'racket', 'queen', 'press', 'port', 'pilot', 'time', 'tooth', 'tower', 'truck', 'triangle', 'trip', 'turkey', 'undertaker', 'unicorn', 'vacuum', 'van', 'wake', 'wall', 'war', 'washer', 'washington', 'water', 'wave', 'well', 'whale', 'whip', 'worm', 'yard']

function createBoard(){
    let boardStuff = []
    let teams = []

    let firstTeam = Math.random() < .5 ? 'red' : 'blue'
    let secondTeam = firstTeam === 'red' ? 'blue' : 'red'

    // Create list of teams
    while(teams.length < 25){
        teams.push('none')
        }

    teams.fill(firstTeam, 0, 9)
    teams.fill(secondTeam, 9, 17)
    teams[19] = 'assassin'

    // Shuffle list of teams
    let m = teams.length
    let t, i;

    while (m) {

        i = Math.floor(Math.random() * m--);

        t = teams[m];
        teams[m] = teams[i];
        teams[i] = t;
    }

    // Randomly select words from word list
    while (boardStuff.length < 25){
        let currWord = wordList[Math.floor(Math.random() * 187)]
        if (boardStuff.indexOf(currWord) === -1){
            boardStuff.push(currWord)
        }
    }

    // Assign team to word
    const words = boardStuff.map(word=>{
        let index = boardStuff.indexOf(word)
        return {'word': word, 'team': teams[index], 'clicked': false}
    })

    return [words, firstTeam]
}

let setup = createBoard()

ReactDOM.render(
  <React.StrictMode>
    <App setup={setup} createBoard={createBoard}/>
  </React.StrictMode>,
  document.getElementById('root')
);