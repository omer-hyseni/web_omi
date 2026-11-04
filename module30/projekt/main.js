var noon=12
function showCurrentTime{
    var clock=document.getElementById('clock')
    var currentTime=new Date();


var hours=getTime.getHours()
var minuts=getTime.getMinutes()
var seconds=getTime.getSeconds()

var meridian="AM";

if(hours>= noon)
{
    maridian="PM";
}

varClockTime= Hours + ":" + Minutes + ":" + Seconds + "   " + meridian;
}