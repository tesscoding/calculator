

//make event listeners for all the keys
var keys=document.querySelectorAll("button");
keys.forEach(key=>key.addEventListener("click", (e)=>press(e)));//add event listeners
					
function press(e){
	var input=document.querySelector(".bottom-screen");
	var previous=document.querySelector(".top-screen");
	var key=e.target.textContent;
	if(key!="x"&&key!="/"&&key!="-"&&key!="+"&&key!="="&&key!="c"){
		input.textContent+=key;
	} else if(key!="="&&key!="c") {
		previous.textContent=input.textContent+key;
		input.textContent="";
	} else if(key=="c"){
		previous.textContent="";
		input.textContent="";
	}
	console.log(e.target.textContent)
	console.log(parseFloat(input.textContent));
	
}





//create functions
operate("*",2,5);
function operate(operator, operand1, operand2){
	var result;
	if(operator=="+"){
		result =plus(operand1, operand2);
	}
	if(operator=="-"){
		result=minus(operand1, operand2);
	}
	if(operator=="/"){
		result=divide(operand1, operand2);
	}
	if(operator=="*"){
		result=multiply(operand1, operand2);
	}
	return result;
}
function plus(a,b){
	return a+b;
}

function minus(a, b){
	return a-b;
}

function divide(a,b){
	return a/b;

}
function multiply(a,b){
	return a*b;
}