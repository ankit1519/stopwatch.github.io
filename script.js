var hr=0;
var min=0;
var sec=0;
var count=0;

var timer=false;
function start(){
    timer=true;
    stopwatch()
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("count").innerHTML="00"
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";

}
function stopwatch(){
    if(timer==true){
        count+=1;
        if(count==99){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min+=1;
            sec=0;
        }
        if(min==60){
            hr+=1;
            min=0;
            sec=0;
        }
        var hs=hr;
        var ms=min;
        var ss=sec;
        var cs=count;
        if(hr<10){
            hs="0"+hs;
        }
        if(min<10){
            ms="0"+ms;
        }
        if(sec<10){
            ss="0"+ss;
        }
        if(count<10){
            cs="0"+cs;
        }
        document.getElementById("count").innerHTML=cs;
        document.getElementById("sec").innerHTML=ss;
        document.getElementById("min").innerHTML=ms;
        document.getElementById("hr").innerHTML=hs;
        setTimeout("stopwatch()",10);
    }
}