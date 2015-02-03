function Holder() {
	this.bikeCount = [];
};

Holder.prototype.acceptBike = function(bike){
	if(this.bikeCount.length < 5){
		this.bikeCount.push(bike);
	}
	else {
		return "Already Full";
	};
};


module.exports = Holder;