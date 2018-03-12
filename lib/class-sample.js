

class Example {
    
    constructor(val1, val2){
        this.val1 = val1
        this.val2 = val2
    }

    get hello() {
      return 'world';
    }

    set val1(val1){
       this.val1 = val1
    }
    get val1(){
        return this.val1
    }

   
    
  }

  function Example2(){
      this.hello = function(){
          return "xxxxx"
      }
  }
  
  const obj = new Example();

  console.log(obj.hello);
  console.log(obj.val2);
  

