let regles = document.getElementById("regles")
let next = document.getElementById("next")
let cacheD = document.getElementById("cacheD")
let cacheG = document.getElementById("cacheG")
let bordure = document.querySelectorAll("#bordure > div")
let piege = document.getElementById("piege")

let fin = false

//INTRODUCTION
setTimeout(function(){level1()}, 5000)
function level1(){
    let text = document.querySelector("#intro div")
    let blobs = document.querySelectorAll("#blobs div")
    let info = document.getElementById("info")
    let toucheO = document.getElementById("toucheO")
    let toucheB = document.getElementById("toucheB")
    
    
    setTimeout(function(){text.innerHTML = "D"}, 300)
    setTimeout(function(){text.innerHTML = "DE"}, 400)
    setTimeout(function(){text.innerHTML = "DEUX"}, 500)
    setTimeout(function(){text.innerHTML = "DEUX B"}, 600)
    setTimeout(function(){text.innerHTML = "DEUX BL"}, 700)
    setTimeout(function(){text.innerHTML = "DEUX BLO"}, 800)
    setTimeout(function(){text.innerHTML = "DEUX BLOB"}, 900)
    setTimeout(function(){text.innerHTML = "DEUX BLOBS"}, 1000)
    setTimeout(function(){text.innerHTML = "DEUX BLOBS ."}, 1100)
    setTimeout(function(){text.innerHTML = "DEUX BLOBS ..."}, 1100)
    setTimeout(function(){blobs[0].style.transition = " transform 200ms", blobs[0].style.transform = "scale(1)"}, 2000)
    setTimeout(function(){blobs[1].style.transition = " transform 200ms", blobs[1].style.transform = "scale(1)"}, 2000)
    
    setTimeout(function(){text.innerHTML = "I"}, 3000)
    setTimeout(function(){text.innerHTML = "ILS"}, 3100)
    setTimeout(function(){text.innerHTML = "ILS N'"}, 3200)
    setTimeout(function(){text.innerHTML = "ILS N'EN "}, 3300)
    setTimeout(function(){text.innerHTML = "ILS N'EN R"}, 3400)
    setTimeout(function(){text.innerHTML = "ILS N'EN RE"}, 3500)
    setTimeout(function(){text.innerHTML = "ILS N'EN RES"}, 3600)
    setTimeout(function(){text.innerHTML = "ILS N'EN RESTERA "}, 3700)
    setTimeout(function(){text.innerHTML = "ILS N'EN RESTERA  QU"}, 4500)
    setTimeout(function(){text.innerHTML = "ILS N'EN RESTERA  QU'U"}, 4550)
    setTimeout(function(){text.innerHTML = "ILS N'EN RESTERA  QU'UN"}, 4600)
    setTimeout(function(){text.innerHTML = "IL N'EN RESTERA  QU'UN"}, 6000)
    
    setTimeout(function(){text.innerHTML = "V"}, 7000)
    setTimeout(function(){text.innerHTML = "VO"}, 7200)
    setTimeout(function(){text.innerHTML = "VOT"}, 7300)
    setTimeout(function(){text.innerHTML = "VOTRE"}, 7400)
    setTimeout(function(){text.innerHTML = "VOTRE M"}, 7500)
    setTimeout(function(){text.innerHTML = "VOTRE MI"}, 7600)
    setTimeout(function(){text.innerHTML = "VOTRE MISS"}, 7700)
    setTimeout(function(){text.innerHTML = "VOTRE MISSI"}, 7800)
    setTimeout(function(){text.innerHTML = "VOTRE MISSION"}, 7900)
    
    setTimeout(function(){text.innerHTML = "M"}, 8500)
    setTimeout(function(){text.innerHTML = "MA"}, 8600)
    setTimeout(function(){text.innerHTML = "MAR"}, 8700)
    setTimeout(function(){text.innerHTML = "MARQU"}, 8800)
    setTimeout(function(){text.innerHTML = "MARQUER"}, 8900)
    setTimeout(function(){text.innerHTML = "MARQUER V"}, 9000)
    setTimeout(function(){text.innerHTML = "MARQUER VOT"}, 9100)
    setTimeout(function(){text.innerHTML = "MARQUER VOTR"}, 9200)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE T"},9300)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TER"}, 9400)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRI"}, 9500)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRIT"}, 9550)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRITOI"}, 9600)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRITOIRE"}, 9650)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRITOIRE !"}, 10000)
    setTimeout(function(){text.innerHTML = "MARQUER VOTRE TERRITOIRE !!!"}, 12000)

    setTimeout(function(){toucheO.style.transition = " transform 200ms", toucheO.style.transform = "scale(1)"}, 12500)
    setTimeout(function(){toucheB.style.transition = " transform 200ms", toucheB.style.transform = "scale(1)"}, 12500)
    setTimeout(function(){info.style.transition = " transform 200ms", info.style.transform = "scale(1)"}, 12500)
}

//BOUTON QUI PERMET DE JOUÉ
next.addEventListener("click", function(){
    regles.style.transition = "transform 300ms"
    regles.style.transform = "scale(0)"
    next.style.transform = "scale(0)"
    next.style.animation = "none"
    setTimeout(function(){
        cacheD.style.transition = "transform 300ms"
        cacheD.style.transform = "scaleX(0)"
        cacheG.style.transition = "transform 300ms"
        cacheG.style.transform = "scaleX(0)"
        bordure[0].style.transition = "transform 1s"
        bordure[0].style.backgroundColor = "white"
        bordure[0].style.boxShadow = "0 0 5px white"
        bordure[1].style.transition = "transform 1s"
        bordure[1].style.backgroundColor = "white"
        bordure[1].style.boxShadow = "0 0 5px white"
        piege.style.transform = "translateY(60px)"
        level2()
    },1000)
})
//GAMEPLAY
function level2(){
    setInterval(function(){if(fin == false){stun(),barre("barreB",pointsBlue),barre("barreO",pointsOrange,piegeOnombre.innerHTML = orange.trap, piegeBnombre.innerHTML = blue.trap)}}, 100)
    setInterval(function(){if(fin == false){delaiB(),restB(),delaiO(),restO()}}, 500)
    allGhost()
    deplacement()
}




