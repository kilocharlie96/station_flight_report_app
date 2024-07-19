$(document).ready(function() {
    $('#ata').on('change', function() {
        const staValue = $('#sta').val();
        const ataValue = $(this).val();
        const ttlDlyInput = $('#ttl-dly');

        if (staValue && ataValue) {
            const [staHours, staMinutes] = staValue.split(':').map(Number);
            const [ataHours, ataMinutes] = ataValue.split(':').map(Number);

            const staTotalMinutes = staHours * 60 + staMinutes;
            const ataTotalMinutes = ataHours * 60 + ataMinutes;

            if (staTotalMinutes < ataTotalMinutes) {
                const delayMinutes = ataTotalMinutes - staTotalMinutes;
                const delayHours = Math.floor(delayMinutes / 60);
                const remainingMinutes = delayMinutes % 60;

                // Format delay time as HH:MM
                const formattedDelay = `${String(delayHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;

                // Enable the input and set the value
                ttlDlyInput.prop('disabled', false).val(formattedDelay);
            } else {
                ttlDlyInput.prop('disabled', true).val('');
            }
        }
    });
});