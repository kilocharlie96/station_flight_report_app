$(document).ready(function() {
    $('#atd').on('input', function() {
        var std = $('#std').val(),
            atd = $('#atd').val(),
            ttlDly = atd - std;

        $('#ttl-dly').val(ttlDly);
    });

    $('#setTimeButton').on('click', function() {
        $('#ttl-dly').val(ttlDly).trigger('input');
    });


});