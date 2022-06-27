
var yesButton = document.getElementById("one");



function clicked(){
    if(check.checked){
        console.log("i am clicked");
        yesButton.href="/index.html"

    }else{
        console.log("unchecked");
        yesButton.href="#";
        yesText.className = "show";
    }
    
}

function makeVisible(){
    // cl.className = "show";
    console.log(pel);
    pel[0].className = "show";
    yesText.className = "hide";

}

// var link = document.getElementById("button");
// link.onclick = clicked;

var check = document.getElementById("agree");
var cl = document.getElementById("no");
var pel= document.getElementsByClassName("hide");
var yesText = document.getElementById("yes-text");
yesButton.onclick = clicked;

cl.onclick = makeVisible;

