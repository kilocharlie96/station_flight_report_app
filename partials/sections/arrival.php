<div class="fixed-grid has-3-cols mt-6">
    <ul class="grid">
        <li>
            <label class="has-text-weight-bold" for="arr">ARRIVAL</label>
            <input class="input" type="text" name="arr" id="arr" placeholder="IATA code">
        </li>
        <li>
            <label for="sta">STA</label>
            <input class="input" type="time" name="sta" id="sta">
        </li>
        <li>
            <label for="ata">ATA</label>
            <input class="input" type="time" name="ata" id="ata">
            <?php include 'partials\buttons\start.php'; ?>
        </li>
    </ul>

    <?php include 'pax-and-cargo.php'; ?>

</div>