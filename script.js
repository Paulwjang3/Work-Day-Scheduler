$(function () {




    // Current date Display
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));


    $('.saveBtn').on('click', function() {
        var inputText = $(this).siblings(".description").val();
        var selectedTime = $(this).parent().attr('id');
        console.log(this);
        localStorage.setItem(selectedTime, inputText);
    })

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));

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
            $(this).removeclass("past");
            $(this).addclass("future");
            $(this).removeClass("present");

        } else {
            $(this).removeclass("past");
            $(this).removeclass("future");
            $(this).addclass("present");
        }

       })
    
    }
    currentTime();
});

