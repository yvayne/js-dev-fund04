/**
 * Created by jalatraining on 5/30/2015.
 */
console.log('This is a code from MAIN.JS');


var sayHello = function(name) {
    console.log('Hello ' + name);
};

var age = '';

var calculateAge =  function(bornYear) {
    age = 2015 - bornYear;

    return age;
};

var calculateAll = function(){
    console.log(arguments);
    console.log('SUM: ', sum(arguments));
    console.log('AVG: ', average(arguments));
    console.log('MAX: ', max(arguments));
    console.log('MIN: ', min(arguments));
};

var sum = function(numbers, pos){

    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        return (numbers[pos]);

    return numbers[pos] + sum(numbers, pos + 1);
};

var average = function(numbers,pos){
	if (!pos)
        pos = 0;
		
    if (pos == numbers.length - 1)
        return numbers[pos];
		
    return ((numbers[pos] + sum(numbers, pos + 1))/numbers.length);
};

var max = function(numbers, pos, mayor){
    if(!pos){
		pos = 0;
		mayor=numbers[0];}
	if (pos == numbers.length - 1)
        return mayor;
	if(numbers[pos] > mayor)
		mayor = numbers[pos];
 	return max(numbers, pos+1, mayor);
};

var min = function(numbers, pos, minor){
    if(!pos){
		pos = 0;
		minor=numbers[0];}
	if (pos == numbers.length - 1)
        return minor;
	if(numbers[pos] < minor)
		minor = numbers[pos];
 	return min(numbers, pos+1, minor);
};

var pepe = {
    name: 'pepe',
    age: 20,
    sayHello: function () {
        console.log('hello')
    }
};

var countWords = function(){

    var paragraph = window.prompt('Introduce the pragraph');
    return paragraph.split(' ').length;
};


var Calculator = function(){

    var memory = 0;

    this.getMemory = function(){
        return memory;
    };

    this.setMemory = function(newValue){
        memory = newValue;
        return memory;
    };
};

Calculator.prototype.add = function(ope1, ope2){

    if (!ope2)
        return this.setMemory(this.getMemory() + ope1) ;

    this.setMemory(ope1 + ope2);
    return this.getMemory();
};
//add, subtract, multiply and divide
Calculator.prototype.subtract = function(ope1, ope2){

    if (!ope2)
        return this.setMemory(this.getMemory() - ope1) ;

    this.setMemory(ope1 - ope2);
    return this.getMemory();
};

Calculator.prototype.multiply = function(ope1, ope2){

    if (!ope2)
        return this.setMemory(this.getMemory() * ope1) ;

    this.setMemory(ope1 * ope2);
    return this.getMemory();
};

Calculator.prototype.divide = function(ope1, ope2){

    if (!ope2)
        return this.setMemory(this.getMemory() / ope1) ;

    this.setMemory(ope1 / ope2);
    return this.getMemory();
};

Calculator.prototype.sum = function(numbers, pos){

    if (!pos)
        pos = 0;

    if (pos == numbers.length - 1)
        return (numbers[pos]);

    return numbers[pos] + this.sum(numbers, pos + 1);
};

Calculator.prototype.average = function(numbers,pos){
	if (!pos)
        pos = 0;
		
    if (pos == numbers.length - 1)
        return numbers[pos];
		
    return ((numbers[pos] + this.average(numbers, pos + 1))/numbers.length);
};

Calculator.prototype.max = function(numbers, pos, mayor){
    if(!pos){
		pos = 0;
		mayor=numbers[0];}
	if (pos == numbers.length - 1)
        return mayor;
	if(numbers[pos] > mayor)
		mayor = numbers[pos];
 	return this.max(numbers, pos+1, mayor);
};

Calculator.prototype.min = function(numbers, pos, minor){
    if(!pos){
		pos = 0;
		minor=numbers[0];}
	if (pos == numbers.length - 1)
        return minor;
	if(numbers[pos] < minor)
		minor = numbers[pos];
 	return this.min(numbers, pos+1, minor);
};
Calculator.prototype.reset = function(){

    this.setMemory(0);
};
