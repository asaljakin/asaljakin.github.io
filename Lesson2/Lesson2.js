/**
 * Created by andrew on 25.10.16.
 */

var testArr = ['a', 'b', 'c', 4, 5, 6];
var myObject = new Object();
myObject = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
}
console.log("******* par.1 Create {push, pop, slice, join, reverse} ********");
//Primer 1 (Pop)
var myPop = function () {
    // if (arr == undefined){ arr = this; console.log("Izmenen!!!"); console.log(arr.toString()); };
    // if (!(this instanceof Array)){
    if (!this.length){
        console.log('Dont array!!!');
        return undefined;
    };
    if (this.length < 1) {return undefined;};

    var rez = this[this.length - 1];
    delete this[this.length -1];
    --this.length;
    return rez;
}
console.log("******* 1_a: Pop ********");
console.log("The initial value of Array (testArr):");
console.log(testArr.toString());
myObject.myPop = myPop;
console.log("myObject.myPop.call(testArr):");
rez = myObject.myPop.call(testArr);
console.log(rez.toString());
console.log(testArr.toString());

Array.prototype.pop = myPop;
rez = testArr.pop();
console.log("testArr.pop():");
console.log(rez.toString());
console.log(testArr.toString());

//Primer 2 (Push)
var myPush = function (arr) {
    if(!this.length){this.length = 0;}
    var l = this.length;
    if (arr) {
        for (i=0; i<arr.length; i++ ) {
            this[l] = arr[i];
            l++;
        }
        //  --l;
    }

    return this.length = l;
}
console.log("******* 1_b: Push *******");
console.log("The initial value of Array (testArr):");
console.log(testArr.toString());
myObject.myPush = myPush;
console.log("myObject.myPush.call(testArr,[7,8,100]):");
rez = myObject.myPush.call(testArr,[7,8,100]);
console.log(rez.toString());
console.log(testArr.toString());
Array.prototype.push = myPush;
testArr.push(['end']);
console.log("testArr.push([end])");
console.log(testArr.toString());


//Primer 3 (Slice)
var mySlice = function (begin,end) {
    if (!begin) begin = 0;
    if (!end) end = this.length;
    if (begin<0) begin = this.length + begin;
    if (end<0) end = this.length + end;
    var arr = [];
    for (i=0; begin < end; i++) {
        arr[i] = this[begin];
        begin++;
    }
    return arr;
}
console.log("******* 1_c: Slice *******");
console.log("The initial value of Array (testArr):");
console.log(testArr.toString());

myObject.mySlice = mySlice;
console.log("rez = myObject.mySlice.call(testArr,1,5):");
rez = myObject.mySlice.call(testArr,1,5);
console.log(rez.toString());
console.log(testArr.toString());

Array.prototype.slice = mySlice;
console.log("testArr.slice():");
rez = testArr.slice();
console.log(rez.toString());
console.log(testArr.toString());

//Primer 4 (Join)
var myJoin = function(tsep) {
    if(!this.length) return "";
    if(tsep == undefined ) tsep = ',';
    var str = this[0];

    for (i=1; i<this.length; i++){
        str = str + tsep + this[i];
    }

    return str;
}
console.log("******* 1_d: Join *******");
console.log("The initial value of Array (testArr):");
console.log(testArr.toString());
myObject.myJoin = myJoin;
rez = myObject.myJoin.call(testArr, "; ");
console.log("rez = myObject.myJoin.call(testArr, ; ):");
console.log(rez.toString());
Array.prototype.join= myJoin
console.log("testArr.join():");
rez = testArr.join();
console.log(rez.toString());
console.log(testArr.toString());


//Primer 5 (Reverse)
var myReverse = function() {
    if(!this.length) return "";
    /* if(tsep == undefined ) tsep = ',';
     var str = this[0];*/

    for (i=0,z=this.length-1; i<z; i++, z--){
        temp = this[i];
        this[i] = this[z];
        this[z] = temp;
    }

    return this;
}
console.log("******* 1_e: Reverse *******");
console.log("The initial value of Array (testArr):");
console.log(testArr.toString());
myObject.myReverse = myReverse;
myObject.myReverse.call(testArr);
console.log("myObject.myReverse.call(testArr):");
console.log(testArr.toString());

Array.prototype.reverse = myReverse;
testArr.reverse();
console.log("testArr.reverse():");
console.log(testArr);





console.log("******* par.2 ( x.sum(y) === x + y ) ********");

function mySum(int) {
    //  num = this;
    return this + +int;;
}

Number.prototype.sum = mySum;

console.log("25 .sum(25) = ");
console.log(25 .sum(25)); // or console.log(Number('25').sum(25));