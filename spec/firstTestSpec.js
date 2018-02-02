

//ソースコードのパス
const SRC_PATH = "../"

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      

        var mo1 = require(SRC_PATH + "src/js/Module1")
        //var mo2 = require("./Module2")

        expect(3).toBe(mo1.add(1,2));

    });
  });


  describe("A suite is just a function", function() {
    var a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
  });

  describe("Included matchers:", function() {

    it("The 'toBe' matcher compares with ===", function() {
      var a = 12;
      var b = a;
  
      expect(a).toBe(b);
      expect(a).not.toBe(null);
    });
});