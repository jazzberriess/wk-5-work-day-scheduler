//setting variables

let currentDay = $("#currentDay");

//show the day, date and time, and have it actively update

setInterval(function () {

    currentDay.text(moment().format("[Today is] MMM DD YYY [at] HH:mm:ss"));

}, 1000);