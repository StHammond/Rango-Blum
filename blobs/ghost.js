//GHOST
for(let i = 0; i < 20; i++ ){
    let ghost = document.createElement("div");
    document.body.insertBefore(ghost, null);
}
let ghost1 = document.getElementById("ghost1")
let ghost2 = document.getElementById("ghost2")
let ghost3 = document.getElementById("ghost3")
let ghost4 = document.getElementById("ghost4")
let ghost5 = document.getElementById("ghost5")
let ghost6 = document.getElementById("ghost6")
let ghost7 = document.getElementById("ghost7")
let ghost8 = document.getElementById("ghost8")
let ghost9 = document.getElementById("ghost9")
let ghost10 = document.getElementById("ghost10")
let ghost11 = document.getElementById("ghost11")
let ghost12 = document.getElementById("ghost12")
let ghost13 = document.getElementById("ghost13")
let ghost14 = document.getElementById("ghost14")
let ghost15 = document.getElementById("ghost15")
let ghost16 = document.getElementById("ghost16")
let ghost17 = document.getElementById("ghost17")
let ghost18 = document.getElementById("ghost18")
let ghost19 = document.getElementById("ghost19")
let ghost20 = document.getElementById("ghost20")

//FONCTION APPARITION DES DIFFERNTS GHOST
function apparition (g,i){
    setTimeout(function(){
        g.life = true
        g.style.width = "10px"
        g.style.height = "10px"
        g.style.backgroundColor = "rgb(216, 212, 205)"
        g.style.borderRadius = "50px"
        g.style.border = "2px solid black"
        g.position = entierAleatoire(1,830)
        //METHODE CASES COLOR GHOST
        g.color = function(){
            if(cases[this.position].color == "black" && this.style.backgroundColor == "blue"){
                cases[this.position].style.backgroundColor = "blue"
                cases[this.position].color = "blue"
                pointsBlue++
            }
            else if(cases[this.position].color == "black" && this.style.backgroundColor == "orange"){
                cases[this.position].style.backgroundColor = "orange"
                cases[this.position].color = "orange"
                pointsOrange++
            }
            else if(cases[this.position].color == "blue" && this.style.backgroundColor == "orange"){
                cases[this.position].style.backgroundColor = "orange"
                cases[this.position].color = "orange"
                pointsOrange++
                pointsBlue--
            }
            else if(cases[this.position].color == "orange" && this.style.backgroundColor == "blue"){
                cases[this.position].style.backgroundColor = "blue"
                cases[this.position].color = "blue"
                pointsOrange--
                pointsBlue++
            }
        }
        let barre = document.getElementById("barre")
        let blumLogo = document.getElementById("blumLogo")
        let etLogo = document.getElementById("etLogo")
        let rangoLogo = document.getElementById("rangoLogo")

        function end(color, shadow, animeB, animeEt, animeR){
            bordure[0].style.backgroundColor = color
            bordure[0].style.boxShadow = shadow
            bordure[1].style.backgroundColor = color
            bordure[1].style.boxShadow = shadow
            cacheD.style.transition = "transform 300ms"
            cacheD.style.transform = "scaleX(1)"
            cacheG.style.transition = "transform 300ms"
            cacheG.style.transform = "scaleX(1)"
            barre.style.transform = "scale(0)"
            blue.remove()
            blue = false
            orange.remove()
            orange = false  
            fin = true
            blumLogo.style.animation = animeB 
            etLogo.style.animation = animeEt 
            rangoLogo.style.animation = animeR
        }
        //METHODE GHOST TOUCHE JOUEUR
        function win1(couleur){
            let win = document.getElementById("win")
                win.style.color = couleur
                setTimeout(function(){win.innerHTML = "A"}, 8300)
                setTimeout(function(){win.innerHTML = "A G"}, 8400)
                setTimeout(function(){win.innerHTML = "A GA"}, 8500)
                setTimeout(function(){win.innerHTML = "A GAG"}, 8600)
                setTimeout(function(){win.innerHTML = "A GAGN"}, 8700)
                setTimeout(function(){win.innerHTML = "A GAGNÉ"}, 8800)
                setTimeout(function(){win.innerHTML = "A GAGNÉ HÉ "}, 15000)
                setTimeout(function(){win.innerHTML = "A GAGNÉ HÉ HÉ"}, 15200)
        }
        function win2(couleur){
            let win = document.getElementById("win")
                win.style.color = couleur
                setTimeout(function(){win.innerHTML = "A"}, 8300)
                setTimeout(function(){win.innerHTML = "A G"}, 8400)
                setTimeout(function(){win.innerHTML = "A GA"}, 8500)
                setTimeout(function(){win.innerHTML = "A GAG"}, 8600)
                setTimeout(function(){win.innerHTML = "A GAGN"}, 8700)
                setTimeout(function(){win.innerHTML = "A GAGNÉ"}, 8800)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AV "}, 9000)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVE"}, 9200)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVEC"}, 9300)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVEC C"}, 9500)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVEC CL"}, 9700)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVEC CLAS"}, 10000)
                setTimeout(function(){win.innerHTML = "A GAGNÉ AVEC CLASSE !"}, 10200)
        }
        g.eat = function(){
            if(this.position == blue.position){
                end("orange","0 0 10px orange","blumLose both linear 7s","etRango both linear 7s","rangoWin both linear 7s")
                win1("orange")
            }
            else if(this.position == orange.position){
                end("blue","0 0 10px blue","blumWin both linear 7s","etBlum both linear 7s","rangoLose both linear 7s")
                win1("blue")
            }
        }
        //METHODE JOUEUR BARRE WIN
        setInterval(function(){g.eat()
            if(pointsBlue == pointFinal){
                end("blue","0 0 10px blue","blumWin both linear 7s","etBlum both linear 7s","rangoLose both linear 7s")
                win2("blue")
            }
           else if(pointsOrange == pointFinal){
                end("orange","0 0 10px orange","blumLose both linear 7s","etRango both linear 7s","rangoWin both linear 7s")
                win2("orange")
            }
        }
        ,100),cases[g.position].appendChild(g)}, i)

        setInterval(function(){if (g.life == true){marche(g)}}, entierAleatoire(500, 1000))
    }

//FONCTION DEPLACEMENT FANTOME
function marche(g){
    let i = entierAleatoire(1,4)
    if (cases[g.position].color == "aqua"){
        g.style.backgroundColor = "blue"
    }
    else if (cases[g.position].color == "yellow"){
        g.style.backgroundColor = "orange"
    }
     if (i == 1){
         if(g.position > 53){
            g.style.animation = "upper 300ms"
            cases[g.position-=54].appendChild(g)
         } 
         else{
            g.style.animation = "down 300ms"
            cases[g.position+=54].appendChild(g)
         }
     }
     else if (i == 2 && g.position < 810){
        if(g.position < 810){
            g.style.animation = "down 300ms"
            cases[g.position+=54].appendChild(g)
         }
         else{
            g.style.animation = "upper 300ms"
            cases[g.position-=54].appendChild(g) 
         }
     }
     else if (i == 3){
         if(g.position == 0){
            g.style.animation = "right 300ms"
            cases[g.position+=1].appendChild(g)
         }
         else{
            g.style.animation = "left 300ms"
            cases[g.position-=1].appendChild(g)
         }
     }
     else if (i == 4){
         if(g.position == 864){
            g.style.animation = "left 300ms"
            cases[g.position-=1].appendChild(g)  
         }
         else{
            g.style.animation = "right 300ms"
            cases[g.position+=1].appendChild(g) 
         }
     }
     g.color()
 }


function allGhost(){
    apparition(ghost1, 2000)
    apparition(ghost2, 5000)
    apparition(ghost3, 10000)
    apparition(ghost4, 15000)
    apparition(ghost5, 20000)
    apparition(ghost6, 25000)
    apparition(ghost7, 30000)
    apparition(ghost8, 35000)
    apparition(ghost9, 40000)
    apparition(ghost10, 50000)
    apparition(ghost11, 55000)
    apparition(ghost12, 60000)
    apparition(ghost13, 65000)
    apparition(ghost14, 70000)
    apparition(ghost15, 75000)
    apparition(ghost16, 80000)
    apparition(ghost17, 85000)
    apparition(ghost18, 90000)
    apparition(ghost19, 95000)
    apparition(ghost20, 100000)
}





