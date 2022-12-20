console.clear();
// const { log } = require("console");
function zeroFuel(distanceToPump, mpg, fuelLeft) {
	// TODO dalis
	const availableDistance = fuelLeft * mpg;
	return distanceToPump <= availableDistance;
}

console.log(zeroFuel(50, 25, 2), "--->", true);
console.log(zeroFuel(100, 50, 1), "--->", false);
console.log(zeroFuel(150, 100, 5), "--->", true);

// const assert = require("chai").assert; <--- cia aprasoma norima gauti funkcija. issitrinam kas nereikalinga
// describe("zeroFill", function () {
// 	it("Sample Tests", function () {
// assert.equal(zeroFuel(50, 25, 2), true);
// assert.equal(zeroFuel(100, 50, 1), false);
// 	});
// });
