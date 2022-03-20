//setting variables

let currentDay = $("#currentDay");

let saveBtn = $(".saveBtn");

let clearBtn = $(".clearBtn");


//show the day, date and time, and have it actively update

//set the time

setInterval(function () {

    currentDay.text(moment().format("[Today is] dddd, MMM DD YYYY [at] HH:mm:ss"));

}, 1000);

$(document).ready(function () {

    // console.log("Ready!");
    $(window).on("onload", function () {

        colourChange();
        retrieveTasks();

    })
})

//save the tasks

saveBtn.on("click", function () {
    // console.log("click")
    // alert("Hello world");
    saveTasks();
})

function saveTasks() {

    // let tasks = $(this).siblings(".description").val();

    // let hours = $(this).parents().attr("id");

    // localStorage.setItem(hours, tasks);

    // localStorage.setitem(hour9, val(".description"));
    // localStorage.setitem(hour10, val(".description"));
    // localStorage.setitem(hour11, val(".description"));
    // localStorage.setitem(hour12, val(".description"));
    // localStorage.setitem(hour13, val(".description"));
    // localStorage.setitem(hour14, val(".description"));
    // localStorage.setitem(hour15, val(".description"));

    // let tasks = $(this).siblings(".description").val()

    // localStorage.hour9 = tasks;
    // localStorage.hour10 = tasks;
    // localStorage.hour11 = tasks;
    // localStorage.hour12 = tasks;
    // localStorage.hour13 = tasks;
    // localStorage.hour14 = tasks;
    // localStorage.hour15 = tasks;
    // localStorage.hour16 = tasks;
    // localStorage.hour17 = tasks;

    localStorage.hour9 = $("#task9").val();
    localStorage.hour10 = $("#task10").val();
    localStorage.hour11 = $("#task11").val();
    localStorage.hour12 = $("#task12").val();
    localStorage.hour13 = $("#task13").val();
    localStorage.hour14 = $("#task14").val();
    localStorage.hour15 = $("#task15").val();
    localStorage.hour16 = $("#task16").val();
    localStorage.hour17 = $("#task17").val();


    // localStorage.hour9 = $(".description").val();
    // localStorage.hour10 = $(".description").val();
    // localStorage.hour11 = $(".description").val();
    // localStorage.hour12 = $(".description").val();
    // localStorage.hour13 = $(".description").val();
    // localStorage.hour14 = $(".description").val();
    // localStorage.hour15 = $(".description").val();
    // localStorage.hour16 = $(".description").val();
    // localStorage.hour17 = $(".description").val();
    // alert("You saved some tasks!")
}

saveBtn.on("click", function () {
    // console.log("click")
    // alert("Hello world");
    saveTasks();
})

//get items out of local storage and display them in the associated description text area

function retrieveTasks() {

    $("#task9").val(localStorage.getItem("hour9"));
    $("#task10").val(localStorage.getItem("hour10"));
    $("#task11").val(localStorage.getItem("hour11"));
    $("#task12").val(localStorage.getItem("hour12"))
    $("#task13").val(localStorage.getItem("hour13"));;
    $("#task14").val(localStorage.getItem("hour14"));
    $("#task15").val(localStorage.getItem("hour15"));
    $("#task16").val(localStorage.getItem("hour16"));
    $("#task17").val(localStorage.getItem("hour17"));

}

//clear local storage

clearBtn.on("click", function () {
    // console.log("clear!")
    // alert("Task cleared!");
    localStorage.clear();
})

function colourChange() {

    let currentTime = moment().hours();
    console.log(currentTime);

    // let textarea = $(".description")

    $(".time-block").each(function () {

        let scheduleTime = parseInt($(this).attr("id").split("hour")[1]);

        if (scheduleTime < currentTime) {

            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

        } else if (scheduleTime === currentTime) {

            $(this).addClass('present');
            $(this).removeClass("past");
            $(this).removeClass("future");

        } else {

            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");

        }

    })
}

colourChange();