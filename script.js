$(function () {
    // Current date Display
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));

    // Setup to save input text into localstorage
    $('.saveBtn').on('click', function() {
        var inputText = $(this).siblings(".description").val();
        var selectedTime = $(this).parent().attr('id');
        console.log(this);
        localStorage.setItem(selectedTime, inputText);
    });

// An array of normal business hours
    var hours = ["#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-1", "#hour-2", "#hour-3", "#hour-4", "#hour-5"];
    // This pulls any saved text from the local storage
    $('time-block').each(function() {
        var blockId = $(this).attr("id");
        for (var i = 0; i < hours.length; i++); {
            if (blockId.includes(hours[i])) {
                $(this).find('.description').val(localStorage.getItem(blockId));
            }
        }
    });
    // Current time
    function currentTime() {
       var time = dayjs().format('h:mm A');
        // Compares the listed times with the current time
       $('.time-block').each(function() {
        var hourElement = $(this).find('.hour');
        var rowTime = hourElement.text().trim();
        console.log(rowTime,time)

        if (rowTime < time) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");

        } else if (rowTime === time) {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");

        } else {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

       })
    
    }
    currentTime();
});

$('time-block').each(function() {
    var blockId = $(this).attr("id");
    for (var i = 0; i < hours.length; i++); {
        if (blockId.includes(hours[i])) {
            $(this).find('.description').val(localStorage.getItem(blockId));
        }

    }
    console.log(blockId);
});