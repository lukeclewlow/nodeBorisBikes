function Bike(){
	this.isWorking = true;
};

Bike.prototype.breakIt = function(){
	this.isWorking = false;
};

Bike.prototype.fixIt = function(){
	this.isWorking = true;
};

module.exports = Bike;