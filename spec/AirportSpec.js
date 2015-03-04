describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });

  it("should be empty when created", function(){
    expect(airport.landedPlanes).toEqual([]);
  });

  it("should be able to dock a plane", function(){
    airport.dock(plane);
    expect(airport.landedPlanes).toEqual([plane]);
  });

  it("should be able to land a plane", function(){
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("should be able to release a plane", function(){
    airport.dock(plane);
    airport.release(plane)
    expect(airport.landedPlanes).toEqual([])
  });

  it("should know when its full", function(){
    airport.dock(plane);
    airport.checkCapacity();
    expect(airport.full).toBe(true);
  });


});