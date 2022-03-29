import {useEffect,useState} from "react";

const FirstButton = (props) => {
    const {setOutputWord, setWhichButton} = props;

    const firstButtonHandler = (e) => {
        console.log(props.searchword);
        setOutputWord("...loading");

        fetch('https://api.datamuse.com/words?rel_rhy='+props.searchword)
            .then((response) => response.json())
            .then((json) => {
                setOutputWord(Object.values(json));         
                console.log(Object.values(json));
            });
        
        setWhichButton(0);
    }

    return (
        <button type="button" onClick={firstButtonHandler} className="btn btn-primary">
            <div>Show rhyming words</div>
        </button>
      );
}

export default FirstButton;