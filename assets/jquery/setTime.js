// $(document).ready(function() {
//     $('.setTimeButton').click(function() {
//         // Získanie aktuálneho času na strane klienta
//         var now = new Date();
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var currentTime = hours + ':' + minutes;

//         var prevElement = $(this).prev();
//         var prevElementId = '#' + prevElement.attr('id');
//         // Nastavenie času do input poľa s ID "timeInput"

//         $(prevElementId).val(currentTime);
//     });
// });