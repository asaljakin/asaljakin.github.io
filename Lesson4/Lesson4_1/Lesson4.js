/**
 * Created by andrew on 04.11.16.
 */
var MaxParam = 10;
var MinParam = 0;
var MaxAge = 30;

// beginning

function Tam(nickname, health, happiness, luck, life, operability, hunger, age) {
    this.nickname =       nickname || 'Unknown';
    this.health   =         health ||  MaxParam;
    this.happiness =     happiness ||  MaxParam;
    this.luck =               luck ||  MaxParam;
    this.life =               life ||  MaxParam;
    this.operability = operability ||  MaxParam;
    this.hunger =          hunger  ||  MinParam;
    this.age =                age  ||  MinParam;
    this.control = function (){
        if (this.health < 1 || this.age >=MaxAge || this.hunger < 0 || this.life < 1){
            this.dead();
        }
        if ((this.happiness < 1) || (this.luck<1 && this.operability > 2)){
            this.missing();
        }
        if (this.hunger < MaxParam/2) {this.eat();}

        if (this.operability > MaxParam/2) {this.training();}
        else if (!this.operability <1 ) {this.walk()}
        else {this.dream();}

        if ((this.happiness> MaxParam/2 || this.luck >MaxParam/2)&&(this.health >0)){this.game()}
    }
    this.dead = function(){
        console.log(this.nickname + ' is dead :(( '+ this.age);
    }

    this.missing = function(){
        console.log(this.nickname + ' is missing :(( '+ this.age);
    }

    this.walk = function(){
        console.log(this.nickname + ' is walk :(( '+ this.age);
        this.health++;
        this.happiness++;
        this.luck++;
        this.life++;
        this.operability--;
        this.hunger++;
    }

    this.training = function(){
        console.log(this.nickname + ' is training :(( '+ this.age);
        this.health--;
        this.happiness--;
        this.luck += 2;
        this.life--;
        this.operability -= 2;
        this.hunger += 2;
    }

    this.eat = function(){
        console.log(this.nickname + ' is eating :(( '+ this.age);
        this.health++;
        this.happiness++;
        this.luck -= 2;
        this.life++;
        this.operability++;
        this.hunger -= 2;
    }
    this.dream = function(){
        console.log(this.nickname + ' is dreaming :(( '+ this.age);
        this.health++;
        this.happiness++;
        this.luck++;
        this.life++;
        this.operability++;
        this.hunger++;
    }
    this.game = function(){
        console.log(this.nickname + ' is gameing :(( '+ this.age);
        this.health++;
        this.happiness++;
        this.luck++;
        this.life++;
        this.operability--;
        this.hunger++;
    }
}

var Doggy = new Tam('Westik');
/*Vasya.shout('Ky');
Vasya.shout('Ka');
Vasya.shout('Ri');
Vasya.shout('Ky');
console.log('Vasya.getShoutTimes', Vasya.getShoutTimes());

var Petya = new Person('Petya', 'Peshkin');
console.log('Petya.getShoutTimes', Petya.getShoutTimes());*/