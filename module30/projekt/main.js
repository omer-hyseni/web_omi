var noon=12
var wakeupTime
var dsTime
var sleepTime
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

ClockTime.innerText=ClockTime;
Changeimage()
}

var oneSecond=1000
setInterval(showCurrentTime, oneSecond)

function Changeimage(){
    var time = new Data().getHours("timeImage") 
    console.log(time)

    var image = "https://www.bing.com/images/search?view=detailV2&ccid=B1kP9pyT&id=B4D6432C151771C0C5774F9C28E3E2F42AC49081&thid=OIP.B1kP9pyTZxB_xPcvvJLpjAHaHa&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f71JQQ%2bz3%2bpL.jpg&exph=2560&expw=2560&q=analog+clock&FORM=IMVNXT&ck=40A8B3985A690DF917E3BCCD365D9388&selectedIndex=2&itb=0&rtpu=%2fimages%2fsearch%3fq%3dclock"

    var imageHTML = document.getElementById("timeImage")

    if(time ==sleepTime){
        image = "https://th.bing.com/th/id/OIP.O0EpsWY4EPcHWfQoi7HgEQHaHa?w=190&h=190&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    else if(time == wakeupTime){
        image = "https://th.bing.com/th/id/OIP.WrKWLKwT4VEtV7SJBzE72gHaHa?w=179&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    else{
        image = "https://th.bing.com/th/id/OIP.RoQSlfJSJpOMJO2DbYGjZQHaEK?w=321&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    imageHTML.src=image; 

}

function updateClock{
    var wakeupTimeSelector = document.getElementById("wakeupTimeSelector")
wakeupTime=wakeupTimeSelector.Value
var sleepTimeSelector = document.getElementById("sleepTimeSelector")
sleepTime=sleepTimeSelector.Value
var dsTimeSelector = document.getElementById("dsTimeSelector")
dsTime=dsTimeSelector.Value

}

var saveButton = document.getElementById("saveButton")

saveButton.addEventListener("click",updateClock)
