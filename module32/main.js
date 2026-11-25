var text ="the best school in prishtina is DS";
var result = text.search(/DIGITAL SCHOOL/);
document.getElementById("result2").innerHTML=result;

var result = text.replace(/DIGITRAL SCHOOL/,"Emin Duraku");
document.getElementById("result3").innerHTML=result2;

var text="abcd";
var regex=new RegExp ("abcd");
document.getElementById("result4").innerHTML=regex.test(text);

var regex2= /school/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var regex2= /i/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var regex2= /[0-9]/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var regex2= /(top|best|school)/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var regex2= /\s/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var regex2= /e+/g;
document.getElementById("result5").innerHTML=text.match(regex2)

var text ="hi hi hi hi hi hi hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii ";
var redex=/hi/g;
document.getElementById("result").innerHTML=text.match(regex)

var redex=/i{2,5}/g;
document.getElementById("result").innerHTML=text.match(regex)

var text="hello hello hello"
var redex=/ello$/g;
document.getElementById("result5").innerHTML=text.match(regex)

var text="hi hi hih i hi"
var redex=/^hi/g;
document.getElementById("result5").innerHTML=text.match(regex)



