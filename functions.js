/*
function sum() {
	console.log(this);
}
sum();

var obj = {
	a: 4,
	b: 5,
	sum: function(){
		console.log(this);
	}
}
obj.sum();


function car(usercolor){
	this.color = usercolor;
	this.accelerate = function(){
		console.log(this);
	}
	console.log(this);
}

car();

var bmw = new car('black');
console.log(bmw);
var audi = new car('red');
console.log(audi);
*/
/*
var obj = {
	1: "Buy something",
	2: "Do something",
	3: "have something"
}
for(index in object){
	obj[index]
}*/

function Bakery() {
	this.applyCream = function(){
		this.creamApplied = true;
		return this;
	}
	this.applyWriting = function(){
		this.writingApplied = true;
		return this;
	}
}
var akhil = new Bakery();
akhil = akhil.applyCream().applyWriting();
console.log(akhil);