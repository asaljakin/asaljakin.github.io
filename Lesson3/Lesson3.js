/**
 * Created by andrew on 27.10.16.
 */

console.log('******* P1_1 Factorial *******');
console.log('factorial(10):');
console.log(factorial(10));
console.log(inputElapsedTime('factorial',[10],10000));

console.log('factorial_cycle(10):');
console.log(factorial_cycle(10));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('factorial_cycle',[10])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));
console.log();

console.log('******* P1_2 Power *******');
console.log('pow(2,4):');
console.log(pow(2,4));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('pow',[2,4])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));

console.log('pow_cycle(2,4):');
console.log(pow_cycle(2,4));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('pow_cycle',[2,4])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));
console.log();

console.log('******* P1_3 Sum of numbers *******');
console.log('sumNum(1549):');
console.log(sumNum(1549));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('sumNum',[1549])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));

console.log('sumNum_cycle(1549):');
console.log(sumNum_cycle(1549));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('sumNum_cycle',[1549])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));
console.log();

console.log('******* P1_4 Arithmetical progression *******');
console.log('sumTo_rec(10):');
console.log(sumTo_rec(10));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('sumTo_rec',[10])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));

console.log('sumTo_cycle(10):');
console.log(sumTo_cycle(10));
//console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('sumTo_cycle',[10])+' ms');
//console.log(inputElapsedTime('factorial',[10],10000));

console.log('arithProg(100):');
console.log(arithProg(10));
console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('arithProg',[10])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));
console.log();

console.log('******* P1_5 Fibonacci numbers *******');
console.log('fib_rec(7):');
console.log(fib_rec(7));
//console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('fib_rec',[3])+' ms');
console.log(inputElapsedTime('factorial',[10],10000));

console.log('fib_cycle(7):');
console.log(fib_cycle(7));
//console.log('Time elapsed for 10000 cycles:'+inputElapsedTime('fib_cycle',[3])+' ms');
//console.log(inputElapsedTime('factorial',[10],10000));



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
    if(!start) start = 0;
    if(!d) d = 1;
    return (start + d*(num-1))/2*num;
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
    for(i=0; i<cyc; i++){
        this[name].apply(null,par);
    }
    var end = new Date;
    //return end - start;
    return 'Time elapsed for '+name+' '+cyc+' cycles:'+(end - start)+' ms';
}