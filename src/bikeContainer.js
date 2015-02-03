function Holder() {
	this.bikeCount = [];
};

Holder.prototype.acceptBike = function(bike){
	this.bikeCount.push(bike)
};


module.exports = Holder;