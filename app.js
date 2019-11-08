

//make event listeners for all the keys
var keys=document.querySelectorAll("button");
keys.forEach(key=>key.addEventListener("click", (e)=>press(e)));//add event listeners
	var operand2="";
	var operator="";
	var operand1="";
					
function press(e){
	var input=document.querySelector(".bottom-screen");
	var previous=document.querySelector(".top-screen");
	var key=e.target.textContent;

	if(key!="x"&&key!="/"&&key!="-"&&key!="+"&&key!="="&&key!="c"){
		input.textContent+=key;
	} else if(key!="="&&key!="c") { 
	    operand1=input.textContent;                   
		previous.textContent=input.textContent+key; //if key is an operator, move number from bottom to top of screen
		input.textContent="";
		operator=key;
		
	} else if(key=="c"){
		previous.textContent="";
		input.textContent="";
	} else if(key=="="){                          //set the two operands and call operate();
		
		 operand2=input.textContent;
		 previous.textContent=operand1+" " +operator+ " " + operand2 + " =";
		 input.textContent=operate(operator,parseFloat(operand1),parseFloat(operand2));
	}
	//console.log(`operator: ${operator}, operand1: ${operand1}, operand 2: ${operand2}`);

	
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
	if(b==0){
		return "Not a number"
	}
	return Math.round((10**12)*a/b)/(10**12);

}
function multiply(a,b){
	return a*b;
}