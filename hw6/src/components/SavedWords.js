const SavedWords = (props) => {
    if (props.words.length) {
        return (<span>{props.words.join(', ')}</span>);
    }
    else {
        return (<span>(none)</span>);
    }


}

export default SavedWords;