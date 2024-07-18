<div class="fixed-grid has-3-cols mt-6">
    <ul class="grid mt-6">
        <li>
            <label class="has-text-weight-bold" for="arr">DEPARTURE</label>
            <input class="input" type="text" name="arr" id="arr" placeholder="IATA code">
        </li>
        <li>
            <label for="">STD</label>
            <input class="input" type="text" name="sta" id="sta">
        </li>
        <li>
            <label for="">ATD</label>
            <input class="input" type="text" name="ata" id="ata">
        </li>
    </ul>

    <?php include 'pax-and-cargo.php'; ?>
</div>