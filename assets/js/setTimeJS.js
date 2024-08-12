var buttons = document.querySelectorAll('.setTimeButton');

    buttons.forEach(function(button) {
        button.addEventListener('click', function setTime() {
            // Získanie aktuálneho času na strane klienta
            var now = new Date();
            var hours = now.getHours().toString().padStart(2, '0');
            var minutes = now.getMinutes().toString().padStart(2, '0');
            var currentTime = hours + ':' + minutes;

            // Získanie predchádzajúceho elementu
            var prevElement = button.previousElementSibling;

            if (prevElement && prevElement.tagName === 'INPUT') {
                // Nastavenie času do input poľa
                prevElement.value = currentTime;
            }
        });
    });