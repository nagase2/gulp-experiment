const fs = require('fs');



describe("A suite", function () {
    it("contains spec with an expectation", function () {

        // const fs = require('fs')
        // fs.readFile('spec/myconfig.json', function (err, data) {
        //     console.log("myconfig:", data)/*?*/


        //     done()
        // });

        console.log("end of test.....")

        const fs2 = require('fs');
        __dirname
        __filename

        console.log(fs2.readFileSync("spec/config.json", 'utf8')/*?*/);
    
        console.log("end of test")


    });
});