

//make event listeners for all the keys
var keys=document.querySelectorAll("button");
keys.forEach(key=>key.addEventListener("click", (e)=>console.log(e)));//add event listeners
					






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