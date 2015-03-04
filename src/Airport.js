var Airport = function() {
  this.landedPlanes = [];
  this.capacity = 1;
  this.full = false;
};

Airport.prototype.dock = function(plane){
  this.landedPlanes.push(plane);
  plane.land();
};

Airport.prototype.release = function(plane){
  this.landedPlanes.splice(plane);
  plane.takeOff();
};

Airport.prototype.checkCapacity = function(){
  if (this.landedPlanes.length >= this.capacity) {
    this.full = true; 
  };
};