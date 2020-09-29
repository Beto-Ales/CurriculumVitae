// this is the paragraph behind the picture
const scripts = document.querySelector(".scripts");

// this is the speed of the typing effect
var speed = 30;

// iteration counter
var i = 0;

// a bunch of code to be displayed as an effect
const code = `body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}`;

// typing effect
function typeWriter(){
    // print all the characters
    if(i < code.length){
        scripts.innerHTML += code.charAt(i);
        // increment iteration counter
        ++i;
        // set the speed of the typing effect
        setTimeout(typeWriter, speed);
    }
}

// run the function
typeWriter();