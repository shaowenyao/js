//FUNC DECLARE PARAMETERS
var foo ( x=1, str="text", array=[]) { return true; }

//TEMPLATE LITERALS
var old_declare = 'a + b';
var NEW_DECLARE= '$a $b';

//MULTIPLE LINE STRINGS
var multstr = 'line1 
no need for +s anymore!
line2,
line3.'

//ARROW FUNCTIONS
return function () { console.log("old method")};
return ()         => console.log("NEW COMPACT METHOD");

//ARROW FUNCTIONS IN A CALL
something.somefunc(function (value) { console.log("old method")});
something.somefunc(          value => console.log("NEW COMPACT METHOD"));

//BLOCK VS FUNC VS CONST SCOPE
function blockscopefunc() {
	var funcscope = 0 + "this refers to the function";
	const nochangestr = "this string does not change";
	if (true) {
		let blockscope=1 + "this references the prev { block } ";
	}
}

//ES6 BETTER FOR LOOP + ARROW FUNC
let forarray = [1,2,3];
for (let value of forarray) { console.log(value); }
//ES6 FOREACHLOOP
forarray.forEach( anything_justhastomatch => console.log(anything_justhastomatch));
