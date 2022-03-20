//setting variables

let currentDay = $("#currentDay");

let saveBtn = $(".saveBtn");

let currentTime = moment().format("HH");

let clearBtn = $(".clearBtn");

// let timeBlocks = $("#container");

const beginDay = 9
const endDay = 17

//show the day, date and time, and have it actively update

//set the time

setInterval(function () {

    currentDay.text(moment().format("[Today is] dddd, MMM DD YYYY [at] HH:mm:ss"));

}, 1000);

$(document).ready(function () {

    // console.log("Ready!");
    $(window).on("onload", function () {

        colourChange();

    })
})

//save the tasks

function saveTasks() {

    localStorage.hour9 = $(".description").val();
    // alert("You saved some tasks!")
}

saveBtn.on("click", function () {
    // console.log("click")
    // alert("Hello world");
    saveTasks();
})

//get items out of local storage and display them in the associated description text area

$("#hour9 .description").val(localStorage.getItem("hour9"));

//clear local storage

clearBtn.on("click", function () {
    // console.log("clear!")
    // alert("Task cleared!");
    localStorage.clear();
})

function colourChange() {

    let currentTime = moment().hours();
    console.log(currentTime);

    let textarea = $(".description")


    $(".time-block").each(function () {

        let scheduleTime = parseInt($(this).attr("id").split("hour")[1]);

        if (scheduleTime < currentTime) {
            textarea.addClass("past");

        } else if (scheduleTime === currentTime) {

            textarea.addClass('present');

        } else {
            textarea.addClass("future");

        }

    })
}

colourChange();