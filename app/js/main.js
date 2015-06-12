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