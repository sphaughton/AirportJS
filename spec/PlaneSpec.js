describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying when created", function(){
    expect(plane.isFlying).toBe(true);
  });

  it("should be able to land", function(){
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it("should be able to take off", function(){
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true)
  })

});