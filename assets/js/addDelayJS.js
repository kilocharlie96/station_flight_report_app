var delayElement = document.querySelector('.delay');
var delayCounter = 2;

// Pridanie udalosti na kliknutie pre tlačidlo s triedou 'addButton'
document.querySelector('.addButton').addEventListener('click', function() {
    // HTML kód pre nový element div s triedou delay-codes
    var newDelayCodes = `
        <div class="delay-codes mt-6">
            <h3 class="subtitle">Delay #${delayCounter}</h3>
            <ul class="grid">
                <li>
                    <label for="code">CODE</label>
                    <input class="input is-small" type="text" name="code" id="code">
                </li>
                <li>
                    <label for="time">TIME</label>
                    <input class="input is-small" type="time" name="time" id="time">
                </li>
                <li>
                    <label for="remarks">REMARKS</label>
                    <input class="input is-small" type="text" name="remarks" id="remarks">
                </li>
                <li>
                    <label for="ctot">CTOT</label>
                    <input class="input is-small" type="time" name="ctot" id="ctot">
                </li>
            </ul>
        </div>`;

    // Pridanie nového elementu na koniec prvého div s triedou delay
    delayElement.insertAdjacentHTML('beforeend', newDelayCodes);

    // Zvýšenie delayCounter o 1
    delayCounter++;
});