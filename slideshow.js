var text = null;
var x = null;
var playOn = true;
var current = 0;

window.onload = function () {

if (localStorage.getItem("index") === String(NaN)) {
    current = 0;
} else {
    current = parseInt(localStorage.getItem("index"));
}

  
function changeSlide () {
    x = setInterval(function() {
    
        if(current < 2){
            current = (current + 1);
        }
        else{
            current = 0;
        }  
        localStorage.setItem("index", (current-1));
        $("#otsikko").hide().html(text.uutiset[current].otsikko).fadeIn(1500);
        $("#pvm").hide().html(text.uutiset[current].päivämäärä).fadeIn(1500);
        $("#sisältö").hide().html(text.uutiset[current].sisältö).fadeIn(1500);
    }, 3000);
    
    console.log(current);
}
    
function pauseFunction() { 
    $("#pauseplay").click(function() {
            if(playOn === true){
                clearInterval(x);
                playOn = false;
                document.getElementById("pauseplay").innerHTML = ("Play");
            }
            else{
                changeSlide();
                playOn = true;
                document.getElementById("pauseplay").innerHTML = ("Pause");
            }
    });   
}
    
function previous() {
    $("#prev").click(function(){
        clearInterval(x);
        
        if(current === 0){
            current = 2;
        }
        else{
            current = current - 1;
        }  
        
        $("#otsikko").hide().html(text.uutiset[current].otsikko).fadeIn(1500);
        $("#pvm").hide().html(text.uutiset[current].päivämäärä).fadeIn(1500);
        $("#sisältö").hide().html(text.uutiset[current].sisältö).fadeIn(1500);
        localStorage.setItem("index", (current -1));
        console.log(current);
    });
}
                    
function next() {
       $("#next").click(function(){
          
        if(current == 2){
            current = 0;
        }
        else{
            current = (current + 1);
        }
        
        $("#otsikko").hide().html(text.uutiset[current].otsikko).fadeIn(1500);
        $("#pvm").hide().html(text.uutiset[current].päivämäärä).fadeIn(1500);
        $("#sisältö").hide().html(text.uutiset[current].sisältö).fadeIn(1500);
        clearInterval(x);
        localStorage.setItem("index", (current-1));
        console.log(current);
    });
}
    
$.getJSON("https://korvenl1-ff958.firebaseio.com/.json",function(data){    
    text = data;
    changeSlide();
    pauseFunction();
    previous();
    next();
});
    
};