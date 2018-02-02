describe("The 'toEqual' matcher", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("xxxworks for simple literals and variables", function() {
        var a = 12;
        expect(a).toEqual(12);
      });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });

    // describe("Mocking the Date object", function(){
    //     it("mocks the Date object and sets it to a given time", function() {
    //       var baseTime = new Date(2013, 9, 23);
    
    // //If you do not provide a base time to mockDate it will use the current date.
    
    //       jasmine.clock().mockDate(baseTime);
    
    //       jasmine.clock().tick(50);
    //       expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
    //     });
      
    // });

    describe("Asynchronous specs", function() {
        var value;
        beforeEach(function(done) {
            setTimeout(function() {
              value = 0;
              done();
            }, 1);
        });
    });
});
