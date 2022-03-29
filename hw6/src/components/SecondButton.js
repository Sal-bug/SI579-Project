const SecondButton = (props) => {
    const {setOutputWord, setWhichButton} = props;

    const secondButtonHandler = (e) => {
        console.log(props.searchword);
        setOutputWord("...loading");

        fetch('https://api.datamuse.com/words?ml='+props.searchword)
            .then((response) => response.json())
            .then((json) => {
                setOutputWord(Object.values(json));         
                console.log(Object.values(json));
            });
        
        setWhichButton(1);
    }

    return (
        <button type="button" onClick={secondButtonHandler} className="btn btn-secondary">
            <div>Show rhyming words</div>
        </button>

    );
}

export default SecondButton;