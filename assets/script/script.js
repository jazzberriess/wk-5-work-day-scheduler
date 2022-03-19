//setting variables

let currentDay = $("#currentDay");

let saveBtn = $(".saveBtn");

let currentTime = moment().format("HH");

let textSavedTask = $("#saved-task-1");

// let timeBlocks = $("#container");

const beginDay = 9
const endDay = 17

//show the day, date and time, and have it actively update

$(document).ready(function () {

    console.log("Ready!");
    $(window).on("onload", function () {


        localStorage.getItem(tasksToSave1, $("#saved-task-1"));

        let nineAmSchedule = JSON.parse(localStorage.getItem(tasksToSave1));

        console.log(nineAmSchedule)

        let nineAmTask = document.createElement("textarea")

        nineAmTask.setAttribute("id", "nineAmTaskSchedule");
        nineAmTaskSchedule.text(nineAmSchedule);

        $("9am-schedule").JSON.parse(localStorage.getItem(tasksToSave1, $("#saved-task-1").val()));

        // alert(localStorage.getItem("tasksToSave1"));
    })
})


setInterval(function () {

    currentDay.text(moment().format("[Today is] MMM DD YYYY [at] HH:mm:ss"));

}, 1000);

//save the tasks

function saveTasks() {

    localStorage.tasksToSave1 = $("#saved-task-1").val();
    alert("You saved some tasks!")
}

saveBtn.on("click", function () {
    console.log("click")
    alert("Hello world");
    saveTasks();
})

function displayTasks() {

    if (!savedTask1) {
        return
    }


    // localStorage.getItem(tasksToSave1, $("#saved-task-1"));

    // $("9am-schedule").text(localStorage.getItem(tasksToSave1, $("#saved-task-1").val()));

    // localStorage.getItem(tasksToSave1, $("#saved-task-1"));


    //ALL ONE FUNCTION
    // let nineAmSchedule = JSON.parse(localStorage.getItem(tasksToSave1));

    // console.log(nineAmSchedule)

    // let nineAmTask = document.createElement("h2")

    // nineAmTask.setAttribute("id", "nineAmTaskSchedule");
    // nineAmTaskSchedule.text(nineAmSchedule);
    // $("description").append(nineAmTask);

}

function colourChange() {

    // let currentTime = moment().format("HH");
    // console.log(currentTime);
    // $(".hour").each(function () {

    //     let scheduleTime = parseInt($(".hour").prop("id"))

    //     if (scheduleTime > currentTime && scheduleTime < currentTime) {
    //         $(".hour").addClass("future")

    //     } else if (scheduleTime > currentTime && scheduleTime < currentTime) {
    //         $(".hour").addClass("past")
    //     } else if (scheduleTime === currentTime) {
    //         $(".hour").addClass("present")
    //     }

    // ($("#hour") === moment().val()) {
    //     $("#hour").addClass(".present");
    // })
    //     })
}