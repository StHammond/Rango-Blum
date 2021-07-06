
//FONCTION ALÉATOIRE
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
//FONCTION BONUS DE COULEUR
let timeB = 0
function restB(){
    window.addEventListener("keydown", function(){
        if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
            timeB = 0
        }
    })
}
function delaiB(){
   if(timeB > 1){
    cases[blue.position].bonusB()
    }
    timeB++
}

//FONCTION BONUS DE COULEUR
let timeO = 0
function restO(){
    window.addEventListener("keydown", function(){
        if(event.keyCode == 90 || event.keyCode == 81 || event.keyCode == 83 || event.keyCode == 68){
            timeO = 0
        }
    })
}
function delaiO(){
   if(timeO > 1){
    cases[orange.position].bonusO()
    }
    timeO++
}

//FONCTION ANIMATION DEPLACEMENT
function anime(a,p,c){
c.style.animation = a
cases[c.position-=p].appendChild(c)
}

//FUNCTION PIEGE STUN
function stun (){
    if(cases[blue.position].trapO == true){
        blue.moov = false
        cases[blue.position].trapO = false
        setTimeout(function(){blue.moov = true}, 3000)
    }
    if(cases[orange.position].trapB == true){
        orange.moov = false
        cases[orange.position].trapB = false
        setTimeout(function(){orange.moov = true}, 3000)
    }
}

//FONCTION BARRE
let pointFinal = entierAleatoire(100,350)
function barre(id,points){
    let jauge = points/pointFinal
    let barre = document.getElementById(id)
    barre.style.transform = "scaleX("+jauge+")"
}














