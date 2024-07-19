<div class="fixed-grid has-3-cols mt-6">
    <ul class="grid mt-6">
        <li>
            <label class="has-text-weight-bold" for="dep">DEPARTURE</label>
            <input class="input" type="text" name="dep" id="dep" placeholder="IATA code">
        </li>
        <li>
            <label for="">STD</label>
            <input class="input" type="time" name="std" id="std">
        </li>
        <li>
            <label for="atd">ATD</label>
            <input class="input" type="time" name="atd" id="atd">
            <?php include 'partials\buttons\start.php'; ?>
        </li>
    </ul>



    <?php include 'pax-and-cargo.php'; ?>
</div>