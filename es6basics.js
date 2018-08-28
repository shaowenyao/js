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

//ES6 BETTER FOR LOOP 
let forarray = [1,2,3];
for (let value of forarray) { console.log(value); }
//ES6 FOREACHLOOP + ARROW FUNC
forarray.forEach( function(item) { console.log(item)});
forarray.forEach( anything_justhastomatch => console.log(anything_justhastomatch));

//VALUE WITH let vs const
console.log(thisisnotdefinedyet);
let thisisnotdefinedyet="this cannot be accessed, put above";

console.log(thisisnotdefinedyet_NOTLET);
let thisisnotdefinedyet_NOTLET="this still returns undefined";

//ES6 IS BLOCK SCOPED
if (true) { let y = "this is not in scope of the console call"; }
console.log(y + "y refers to nothing, unless there is prev block or global/func var");

//ES6 ANON FUNC
(function() { console.log("self-executes anon func") })();

//FUNCTIONAL HOSTING
is_hoisted();
is_hoisted function () { };
is_NOT_hoisted();
var is_NOT_hoisted = function ( "declarations are hoisted, expressions are not")

//VAR HOISTING var only
console.log(x + "can use but value not transferred!"); // true
var x = "value is declared";

y="DO NOT HOIST LETS OR CONSTS";
var y;
console.log(y + "this returns value")
