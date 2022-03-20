//setting variables

let currentDay = $("#currentDay");

let saveBtn = $(".saveBtn");

let clearBtn = $(".clearBtn");


//show the day, date and time, and have it actively update

setInterval(function () {

    currentDay.text(moment().format("[Today is] dddd, MMM DD YYYY [at] HH:mm:ss"));

}, 1000);

//save the tasks

saveBtn.on("click", saveTasks);

function saveTasks() {

    localStorage.hour9 = $("#task9").val();
    localStorage.hour10 = $("#task10").val();
    localStorage.hour11 = $("#task11").val();
    localStorage.hour12 = $("#task12").val();
    localStorage.hour13 = $("#task13").val();
    localStorage.hour14 = $("#task14").val();
    localStorage.hour15 = $("#task15").val();
    localStorage.hour16 = $("#task16").val();
    localStorage.hour17 = $("#task17").val();

}

//get items out of local storage and display them in the associated description text area

function retrieveTasks() {

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"))
    $("#hour13 .description").val(localStorage.getItem("hour13"));;
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


}

//clear task from local storage
function clearTasks() {
    let jobs = $(this).siblings(".description").val();

    let time = $(this).parents().attr("id");

    localStorage.removeItem(time, jobs);

}

clearBtn.on("click", clearTasks);

//change color of scheudle depending on if the time is past, present or now

function colourChange() {

    let currentTime = moment().hours();
    console.log(currentTime);

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

//initialisation functions

function init() {

    retrieveTasks();
    colourChange();
}

init();
