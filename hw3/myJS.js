/*
* Excercise 1
*
*/

document.getElementById("color-block").addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/


function changeColor(){
    //Write a condition determine what color it should be changed to
    if(document.getElementById("color-block").style.background == "rgb(240, 128, 128)"){
        //change the background color using JS
        document.getElementById("color-block").style.background = "#008080";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#008080";

    }
    else{
        //change the background color using JS
        document.getElementById("color-block").style.background = "#F08080";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

document.getElementById("convertbtn").addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var temperature = document.getElementById("f-input").value;
    var result = (temperature - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = result;
}


