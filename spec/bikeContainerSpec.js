var Holder = require("../src/bikeContainer")
var Bike = require("../src/bike")

describe("a bike container", function(){

	holder = new Holder;
	bike = new Bike;

	it("should be able to accept a bike", function(){
		holder.acceptBike(bike);
		expect(holder.bikeCount.length).toEqual(1);
	});

});