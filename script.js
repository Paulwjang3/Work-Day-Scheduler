$(function () {
    // Current date Display
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));


    $('.saveBtn').on('click', function() {
        var inputText = $(this).siblings(".description").val();
        var selectedTime = $(this).parent().attr('id');
        console.log(this);
        localStorage.setItem(selectedTime, inputText);
    });

    var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

    $('time-block').each(function() {
        var blockId = $(this).attr("id");
        for (var i = 0; i < hours.length; i++); {
            if (blockId.includes(hours[i])) {
                $(this).find('.description').val(localStorage.getItem(blockId));
            }
        }
    });

    function currentTime() {
       var time = today.format('h');

       $('.time-block').each(function() {
        var rowTime = parseInt($(this).attr('id'));
        console.log(rowTime, time)

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

