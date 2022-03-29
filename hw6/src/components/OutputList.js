import SingleWord from './SingleWord.js';

function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}


const OutputList = (props) => {
    let outputList = [];

    if (props.outputWords == "...loading") {
        return "...loading";
    }
    
    if (props.whichButton == 0) {
        if (props.outputWords.length == 0) {
            return '(no result)';
        }

        const words = groupBy(props.outputWords, 'numSyllables');
        for (const syllable in words) {
            outputList.push(<h3>Syllables: {syllable}</h3>);

            for (const word of words[syllable]) {
                //console.log(word.word);
                outputList.push(<SingleWord word={word.word} setWordsToSave={props.setWordsToSave} />);
            }
        }
    }
    else if (props.whichButton == 1){
        if (props.outputWords.length == 0) {
            return '(no result)';
        }

        for (const word of props.outputWords) {
            // console.log(word.word);
            outputList.push(<SingleWord word={word.word} setWordsToSave={props.setWordsToSave} />);
        }
    }

    return <ul>{outputList}</ul>;
}

export default OutputList;