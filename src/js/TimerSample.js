


var func1 = function trade(){
    console.log("trade")
   timer()
}

function timer(){
   
    return new Promise(function(resolve,reject){
        console.log("start of func1")
        setTimeout(function(){
           setTimeout(timer,3000)
            console.log("complete")
           resolve("msg:")
           
        },1000)
    })
}




timer()