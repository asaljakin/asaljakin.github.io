/**
 * Created by andrew on 27.10.16.
 */


//by stack overflow protection
var max_call_i = 300;

var kolCyclov = 10000;

console.log('******* P1_1 Factorial *******');
var pf = 15;
console.log('factorial('+pf+'):');
console.log(factorial(pf));
console.log(inputElapsedTime('factorial',[pf],kolCyclov));

console.log('factorial_cycle('+pf+'):');
console.log(factorial_cycle(pf));
console.log(inputElapsedTime('factorial_cycle',[pf],kolCyclov));
console.log('');

console.log('******* P1_2 Power *******');
var pp1 = 2, pp2 = 4;
console.log('pow('+pp1+','+pp2+'):');
console.log(pow(pp1,pp2));
console.log(inputElapsedTime('pow',[pp1,pp2],kolCyclov));

console.log('pow_cycle('+pp1+','+pp2+'):');
console.log(pow_cycle(pp1,pp2));
console.log(inputElapsedTime('pow_cycle',[pp1,pp2],kolCyclov));
console.log('');

console.log('******* P1_3 Sum of numbers *******');
var psn = 1549;
console.log('sumNum('+psn+'):');
console.log(sumNum(psn));
console.log(inputElapsedTime('sumNum',[psn],kolCyclov));

console.log('sumNum_cycle('+psn+'):');
console.log(sumNum_cycle(psn));
console.log(inputElapsedTime('sumNum_cycle',[psn],kolCyclov));
console.log('');

console.log('******* P1_4 Arithmetical progression *******');
var pap = 20;
console.log('sumTo_rec('+pap+'):');
console.log(sumTo_rec(pap));
console.log(inputElapsedTime('sumTo_rec',[pap],kolCyclov));

console.log('sumTo_cycle('+pap+'):');
console.log(sumTo_cycle(100000));
console.log(inputElapsedTime('sumTo_cycle',[pap],kolCyclov));

console.log('arithProg('+pap+'):');
console.log(arithProg(pap));
console.log(inputElapsedTime('arithProg',[pap],kolCyclov));
console.log('');

console.log('******* P1_5 Fibonacci numbers *******');
var pfn = 7;
console.log('fib_rec('+pfn+'):');
console.log(fib_rec(pfn));
console.log(inputElapsedTime('fib_rec',[pfn],kolCyclov));

console.log('fib_cycle('+pfn+'):');
console.log(fib_cycle(pfn));
console.log(inputElapsedTime('fib_cycle',[pfn],kolCyclov));



//***** FACTORIAL
function factorial(num) {
    if(!num) return 1;
    if (num > 1) {return num*factorial(--num);
    } else return num;
}

function factorial_cycle(num) {
    var rez = 1;
    //if(!num) return 1;
    while(num > 1) {
        rez *= num;
        --num;
    }
    return rez;
}

//***** POWER
function pow(num,p) {
    if (p === 0 && num === 0) return NaN;
    if (p === 0) return 1;
    if ( p > 1 ) {
        return num * pow(num, --p);
    } else return num;
}

function pow_cycle(num,p) {
    var rez = 1;
    if (p === 0 && num === 0) return NaN;

    while ( p > 0) {
        rez *= num;
        --p;
    }
    return rez;
}

//***** SUMANum
function sumNum(num) {
    if (num >= 1) {return (num % 10)+sumNum(Math.floor(num/10));
    }else return num;
}

function sumNum_cycle(num) {
    var rez = 0;
    while(num >= 1) {
        rez += (num % 10);
        num = Math.floor(num/10);
    }
    return rez;
}

//***** sumTo_Cycle
function sumTo_cycle(num) {

    var rez = 0;
    for (i=1; num >= i; i++) {
        rez += i;

    }
    return rez;
}

//***** sumTo_Rec
function sumTo_rec(num) {
    if (num > 0) {return num + sumTo_rec(--num);
    }else return num;
}

//***** Arithmetical progression
function arithProg(num,start,d) {
    if(!start) start = 1;
    if(!d) d = 1;
    return (2*start + d*(num-1))/2*num;
}

//***** Fibonacci numbers Recursion
function fib_rec(num) {

    if (num > 1){return fib_rec(num-1)+fib_rec(num-2)
    } else return num;
}

//***** Fibonacci numbers Cycle
function fib_cycle(num) {
    var a1 = 1, a2 = 1, rez = 1;
    for(i = 3; num >= i; i++){
        rez = a1 + a2;
        a1 = a2;
        a2 = rez;
    }
   return rez;
}

function inputElapsedTime(name,par,cyc){
    var start = new Date;
    for(var i=0; i<cyc; i++){
        this[name].apply(null,par);
    }
    var end = new Date;
    //return end - start;
    return 'Time elapsed for '+name+' '+cyc+' cycles:'+(end - start)+' ms';
}