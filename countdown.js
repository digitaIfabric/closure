// ================================================================================
// MAIN
// ================================================================================

var countdownGenerator = function (N) {

    return function countdown() {
        if (N > 0) {
            console.log("T-minus " + N + "...");
        }
        else if (N === 0) {
            console.log("Blast Off!");
        }
        else if (N < 0) {
            console.log("Rockets already gone, bub");
        }
        N--

    }

};

// ================================================================================
// OUTPUTS
// ================================================================================

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!