const OutputDescription = (props) => {
    if (props.whichButton == 0) {
        return "Words that rhyme with " + props.searchword;
    }
    else if (props.whichButton == 1) {
        return "Words with a similar meaning to " + props.searchword;
    }
    else {
        return ""
    }
}

export default OutputDescription;