<?php include 'partials\sections\header.php'; ?>

<?php include 'partials\sections\flight-info.php'; ?>

<?php include 'partials\sections\arrival.php'; ?>

<?php include 'partials\sections\departure.php'; ?>

                
        </header>

        <main>
            <?php include 'partials\sections\fuel-figures.php'; ?>
            <?php include 'partials\sections\turnaround-times.php'; ?>

            <h2 class="subtitle mt-6">DELAY CODES</h2>

            <?php include 'partials\sections\delays.php'; ?>
            <?php include 'partials\sections\services.php'; ?>
            <?php include 'partials\sections\de-icing.php'; ?>
        </main>
    </div>

    <script src="assets/js/add-delay.js"></script>
    <script src="assets/js/setTime.js"></script>
</body>
</html>