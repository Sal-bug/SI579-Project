const SingleWord = (props) => {
    const {setWordsToSave} = props;
    const save = (e) => {
        setWordsToSave((currentSavedWords) => {
            return [...currentSavedWords, props.word];
        });
    }

    return <li>{props.word}<button type="button" onClick={save} className="btn btn-outline-success">(Save)</button></li>;
}

export default SingleWord;