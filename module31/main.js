var cars=["mercedes","audi","BMW"]
var i;
var text = " ";

for(var i=0;i<cars.length;i++){
    text+= cars[i] + " "
}

console.log(text);

var j;
var text2="vlera e j eshte ";
for(j=1;j<=6;j++){
    text2+= [j] +" ";
}

console.log(text2)

var person = {
    firstName:"omer",
    surname:"hyseni",
    age:12
}

var text3=" ";
var x;

for(x in person){
    text3 += person[x]+" "
}

console.log(text3)


var names=["Omer","Jon","Adriatik","Erin"]
var o;
var text = "shokt e mi";

for(o of names ){
  
    document.write(o + '<br>')
}

var text=['J','a','v','q','s','c','h','r','o','x']
var y;

for(y of text){
   document.write(y + "<br>")
}

let n=0;

do {
    n+=1;
    console.log(n)

}while(n<5)


let e=0;
let r=0;

while(e<3){
    e++;
    r+=3;
console.log(e)
console.log(r)
}

var phone=["Iphone","Samsung","Android"]
var s;
var text4 = " ";

for(var s=0;s<phone.length; s++){
    text4+= phone[s] + " "
}

console.log(text4);