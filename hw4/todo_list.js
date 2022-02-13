document.getElementById("add_task").addEventListener("click", function() {
    var description = document.getElementById("task_description_input").value;
    var duedate = document.getElementById("duedate_input");
    var duetime = document.getElementById("duetime_input");

    addTask(description, dateAndTimeToTimestamp(duedate, duetime));
    document.getElementById("task_description_input").value = "";
    document.getElementById("duedate_input").value = "";
    document.getElementById("duetime_input").value = "";
});

document.getElementById("task_description_input").addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        var description = document.getElementById("task_description_input").value;
        var duedate = document.getElementById("duedate_input");
        var duetime = document.getElementById("duetime_input");

        addTask(description, dateAndTimeToTimestamp(duedate, duetime));

        document.getElementById("task_description_input").value = "";
        document.getElementById("duedate_input").value = "";
        document.getElementById("duetime_input").value = "";
    }
});

function addTask(description, dueTime = false) {
    let ul = document.getElementById("task_list");
    let li = document.createElement("li");
    let date = new Date(dueTime).toLocaleDateString("en-US");
    let time = new Date(dueTime).toLocaleTimeString("en-US");

    if (dueTime == false) {
        li.innerHTML = description + '<button class="btn btn-sm btn-outline-danger done" type="button" onclick="return this.parentNode.remove()">Done</button>'; 
    }
    else {
        li.innerHTML = description + '<span class="due">due ' + date + " " + time + '</span><button class="btn btn-sm btn-outline-danger done" type="button" onclick="return this.parentNode.remove()">Done</button>';
    }
    ul.appendChild(li);
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}