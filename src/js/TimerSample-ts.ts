//@ts-check

var func1 = function trade() {
	console.log("trade")
	myTimer(100)
}
let num: number = 0;
function myTimer(repeatCount: number) {

	return new Promise(function (resolve, reject) {
		console.log("start of func1...")

		setTimeout(function () {
			setTimeout(myTimer, repeatCount)
			console.log("completed DESU....." + num)
			num++;
			resolve("msg:")

		}, 1000)
	})
}
function sample1(str: string, num: number) {
	console.log(num);
}

sample1("23", 3312345678901234567890123456789123456782323232132132132132132132132)



myTimer(1000)
