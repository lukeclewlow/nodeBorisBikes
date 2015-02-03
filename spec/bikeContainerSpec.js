var Holder = require("../src/bikeContainer")

describe("a bike container", function(){

	holder = new Holder;

	it("should be able to accept a bike", function(){
		holder.acceptBike();
		expect(holder.bikeCount.length).toEqual(1);
	});

});