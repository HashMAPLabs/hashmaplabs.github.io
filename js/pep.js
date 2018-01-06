/*
 * Pegs!
 *
 * This file makes the pegs fancy.
 *
 */

;(function() {
	var seed = Math.floor(Math.random() * 10000);

	function randomFromSeed() {
	    var x = Math.sin(seed++) * 10000;
	    return Math.floor((x - Math.floor(x)) * 10000);
	}

	function generatePegs() {
		var rows = 10;
		var columns = 60;

		// Set the grid rows and columns
		var gridContainer = $('#peg-grid-overflow');

		// Generate pegs
		// TODO: Fix the src URLs for the images below on production
		var totalPegs = (rows * columns);
		for (var i = 0; i < totalPegs; ++i) {
			var rand = randomFromSeed() % 4;
			switch (rand) {
				case 0:
					gridContainer.append('<img class="peg" src="./assets/rred.png" />');
					break;
				case 1:
					gridContainer.append('<img class="peg" src="./assets/rblue.png" />');
					break;
				case 2:
					gridContainer.append('<img class="peg" src="./assets/ryel.png" />');
					break;
				case 3:
					gridContainer.append('<img class="peg" src="./assets/rgre.png" />');
					break;
			}
		}

	}

	$(document).ready(generatePegs);
})();