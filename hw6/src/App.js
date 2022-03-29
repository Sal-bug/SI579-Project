import './App.css';
import {useEffect,useState} from "react";

import SavedWords from './components/SavedWords.js'
import FirstButton from  './components/FirstButton.js'
import SecondButton from  './components/SecondButton.js'
import OutputList from  './components/OutputList.js'
import OutputDescription from  './components/OutputDescription.js'

function App() {
  const [WordsToSave, setWordsToSave] = useState([]);
  const [WordsInput, setWordsInput] = useState("apple");
  const [WordsOutput, setWordsOutput] = useState([]);
  const [whichButton, setWhichButton] = useState(-1);

  function firstButtonFunction(inputWord) {
    fetch('https://api.datamuse.com/words?rel_rhy='+inputWord)
      .then((response) => response.json())
      .then((json) => {
        setWordsOutput(Object.values(json));         
      });
    
    setWordsInput(inputWord);
    setWhichButton(0);
  }

  return (
    <>
      <main className="container">
        <p>The code is available at https://github.com/Sal-bug/SI-579/tree/main/hw6</p>
        <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
        <div className="row">
            <div className="col">Saved words: <SavedWords words={WordsToSave} /> </div>
        </div>
        <div className="row">
            <div className="input-group col">
                <input className="form-control" onChange={(e)=>setWordsInput(e.target.value)}  
                  onKeyDown = {(e)=>{if (e.code == "Enter"){firstButtonFunction(e.target.value)}}}
                  type="text" placeholder="Enter a word" />
                <FirstButton searchword={WordsInput} setOutputWord={setWordsOutput} setWhichButton={setWhichButton} setWordsInput={setWordsInput} />
                <SecondButton searchword={WordsInput} setOutputWord={setWordsOutput} setWhichButton={setWhichButton} setWordsInput={setWordsInput} />
            </div>
        </div>
        <div className="row">
            <h2 className="col">
              <OutputDescription whichButton={whichButton} searchword={WordsInput} />
            </h2>
        </div>
        <div className="output row">
            <output className="col"> 
              <OutputList whichButton={whichButton} outputWords={WordsOutput} setWordsToSave={setWordsToSave}/>
            </output>
        </div>
      </main>
    </>

  );
}

export default App;
