//by clicking on the button
var numofDrumButtons=document.querySelectorAll(".drum").length;//to find the length of total number of button
for( var i=0;i<numofDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleclick(){
    var buttoninnerhtml=this.innerHTML;


    makesound(buttoninnerhtml);// function call
    buttonanimation(buttoninnerhtml);
     
    });
}





//for w a s d j k l keypress happen
document.addEventListener("keydown",function(event){
                makesound(event.key);//function call
                buttonanimation(event.key);
                        });
        




function makesound(key){

    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default:
            console.log();
    }   
    }




function buttonanimation(currkey){
    var activebutton=document.querySelector("."+currkey);//it selects the current key pressed

    activebutton.classList.add("pressed");
    
    setTimeout(function() {
        activebutton.classList.remove("pressed");
        
    }, 100);

}
