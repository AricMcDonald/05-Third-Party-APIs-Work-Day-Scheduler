var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelveAm = $("#12am");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");

$(document).ready(function() {
    $('#currentDay').text(moment().format("dddd, MMMM Do"))
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings('.description').val();
        var key = $(this).parent().attr('id')

        window.localStorage.setItem(key, value)
    })    

    function currentHour() {
        var hour = moment().hours();

        $('.time-block').each(function () {
            var hourBlock = parseInt($(this).attr('id').split("-")[1])
            if(hourBlock < hour) {
                $(this).addClass("past");
            } else if(hourBlock === hour) {
                $(this).addClass("present");
                $(this).removeClass('past')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present');
                $(this).addClass("future");
                
            }
        })
    }

    currentHour();

var interval = setInterval(currentHour, 10000)
 for(let i = 9; i<17; i++) {
     $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
 }
 
})


