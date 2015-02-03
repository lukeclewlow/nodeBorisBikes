var Bike = require('../src/bike')

describe("a boris bike", function(){

	var bike = new Bike;

	it("should be working by default", function(){
		expect(bike.isWorking).toBe(true);
	});

	it("should be able to be broken", function(){
		bike.breakIt();
		expect(bike.isWorking).toBe(false);
	});

	it("should be able to be fixed", function(){
		bike.breakIt();
		bike.fixIt();
		expect(bike.isWorking).toBe(true);
	});

});