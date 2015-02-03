var Holder = require("../src/bikeContainer")
var Bike = require("../src/bike")

describe("a bike container", function(){

	holder = new Holder;
	bike = new Bike;

	it("should be able to accept a bike", function(){
		holder.acceptBike(bike);
		expect(holder.bikeCount.length).toEqual(1);
	}); 

	it("should be able to take up to 5 bikes", function(){
		holder.acceptBike(bike);
		holder.acceptBike(bike);
		holder.acceptBike(bike);
		holder.acceptBike(bike);
		expect(holder.bikeCount.length).toEqual(5);
	});

	it("should return an error when more than 5 bikes are tring to be docked", function(){
		expect(holder.acceptBike(bike)).toEqual("Already Full")
	});

});