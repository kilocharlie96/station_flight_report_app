$(document).ready(function() {
    var delayElement = $('.delay').first();
    var delayCounter = 2;
    
    $('.addButton').click(function() {
        // HTML kód pre nový element div s triedou delay-codes
        var newDelayCodes = `
            <div class="delay-codes mt-6">
                <h3 class="subtitle">Delay #${delayCounter}</h3>
                <ul class="grid">
                    <li>
                        <label for="zfw">CODE</label>
                        <input class="input is-small" type="text" name="zfw" id="zfw">
                    </li>
                    <li>
                        <label for="mtow">TIME</label>
                        <input class="input is-small" type="text" name="mtow" id="mtow">
                    </li>
                    <li>
                        <label for="block">REMARKS</label>
                        <input class="input is-small" type="text" name="block" id="block">
                    </li>
                    <li>
                        <label for="block">CTOT</label>
                        <input class="input is-small" type="text" name="block" id="block">
                    </li>
                </ul>
            </div>`;
        
        // Pridanie nového elementu na koniec prvého div s triedou delay
        delayElement.append(newDelayCodes);

        delayCounter++;
    });
});