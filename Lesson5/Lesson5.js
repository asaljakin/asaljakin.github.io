/**
 * Created by andrew on 10.11.16.
 */

var heightRocks = [2,1,5,0,3,4,7,2,3,1,0];

function calculate(heightRocks){
    var maxHead =heightRocks.shift(), maxTail = heightRocks.pop(), rez = 0;
    console.log("Height rocks: "+heightRocks);
    while (heightRocks.length >0) {
        var nextHead = (heightRocks.shift());
        var nextTail = (heightRocks.pop());

        if (nextHead === undefined) { nextHead = maxHead};
        if (nextTail === undefined) { nextTail = maxTail};

        if (nextHead>maxHead){
            maxHead = nextHead;
        }else{
            rez +=maxHead -nextHead;
        }

        if (nextTail>maxTail){
            maxTail = nextTail;
        }else{
            rez +=maxTail -nextTail;
        }
        console.log("rez: "+rez);
    }
    return rez;
}

console.log(calculate(heightRocks));





