let counter = (function(){
	let _number; // _xxxx - приватный
  
	let setValue = function(x){
	   _number = x;
	} 

	let setNumber = function(x){
	    if (_checkNumber(x)){
	      _number = x;
	    } else {
	      console.log("неверное значение");
	    }
	}
  
	let increaseCounter = function(){
		_number++;
	}
	let decreaseCounter = function(){
	    _number--;
	 }
	let printCounter = function(){
	    console.log(_number);
	}

	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setValue(8);
counter.printCounter(); 
counter.increaseCounter();
counter.increaseCounter(); 
counter.printCounter(); 
