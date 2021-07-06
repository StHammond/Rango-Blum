//BLOBS BLEU
let blue = document.getElementById("blue")
blue.moov = true
blue.position = entierAleatoire(1,863)
blue.life = true
blue.trap = 5
cases[blue.position].appendChild(blue)
let pointsBlue = 0
let piegeBnombre =  document.getElementById("piegeBnombre")

//BLOBS ORANGE
let orange = document.getElementById("orange")
orange.moov = true
orange.position = entierAleatoire(1,863)
orange.life = true
orange.trap = 5
cases[orange.position].appendChild(orange)
let pointsOrange = 0
let piegeOnombre =  document.getElementById("piegeOnombre")


//GAMEPLAY
function deplacement(){    
    window.addEventListener("keydown", function(){
        if(blue.moov == true){
            if(event.keyCode == 16 && blue.trap > 0 && cases[blue.position].trapB == false){
                cases[blue.position].trapB = true
                blue.trap--
            }
            if(event.keyCode == 38 && blue.position > 53){
                if(blue.position < 108 && blue.position-54 == orange.position){}
                else{
                    anime("upper 300ms",54,blue)
                    cases[blue.position].blue()
                    if(blue.position == orange.position){
                    timeO = 0
                    anime("upper 300ms",54,orange)
                    }
                }
            }
            else if(event.keyCode == 40 && blue.position < 810){
                if(blue.position > 755 && blue.position+54 == orange.position){

                }
                else{
                    anime("down 300ms",(-54),blue)
                    cases[blue.position].blue()
                    if(blue.position == orange.position){
                    timeO = 0
                    anime("down 300ms",(-54),orange)
                    }
                }
            }
            else if(event.keyCode == 39){
                if(blue.position == 53 || blue.position == 107|| blue.position == 161 || blue.position == 215 || blue.position == 269 || blue.position == 323|| blue.position == 377|| blue.position == 431|| blue.position == 485|| blue.position == 539|| blue.position == 593|| blue.position == 647|| blue.position == 701|| blue.position == 755 || blue.position == 809|| blue.position == 863){

                }
                else if(blue.position+1 == orange.position && (blue.position == 52 || blue.position == 106 || blue.position == 160 || blue.position == 214 || blue.position == 268 || blue.position == 322|| blue.position == 376|| blue.position == 430|| blue.position == 484|| blue.position == 538|| blue.position == 592|| blue.position == 646|| blue.position == 700|| blue.position == 754 || blue.position == 808|| blue.position == 862)){

                }
                else{
                    anime("right 300ms",(-1),blue)
                    cases[blue.position].blue()
                    if(blue.position == orange.position){
                    timeO = 0
                    anime("right 300ms",(-1),orange)
                    }
                }
            }
            if(event.keyCode == 37){
                if(blue.position == 0 || blue.position == 54 || blue.position == 108 || blue.position == 162 || blue.position == 216 || blue.position == 270 || blue.position == 324 || blue.position == 378|| blue.position == 432|| blue.position == 486|| blue.position == 540|| blue.position == 594|| blue.position == 648|| blue.position == 702|| blue.position == 756|| blue.position == 810){
                }
                else if(blue.position-1 == orange.position && (blue.position == 1 ||blue.position == 55 || blue.position == 109 || blue.position == 163 || blue.position == 217 || blue.position == 271 || blue.position == 325 || blue.position == 379|| blue.position == 433|| blue.position == 487|| blue.position == 541|| blue.position == 595|| blue.position == 649|| blue.position == 703|| blue.position == 757|| blue.position == 811)){
                }
                else{
                    anime("left 300ms",1,blue)
                    cases[blue.position].blue()
                    if(blue.position == orange.position){
                    timeO = 0
                    anime("left 300ms",1,orange)
                    }
                }
            }
        }
        if(orange.moov == true){
            if(event.keyCode == 65 && orange.trap > 0 && cases[orange.position].trapO == false){
                cases[orange.position].trapO = true
                orange.trap--
            }
            if(event.keyCode == 90 && orange.position > 53){
                if(orange.position < 108 && orange.position-54 == blue.position){}
                else{
                    anime("upper 300ms",54,orange)
                    cases[orange.position].orange()
                    if(orange.position == blue.position){
                    timeB = 0
                    anime("upper 300ms",54,blue)
                    }
                }
            }
            else if(event.keyCode == 83 && orange.position < 810){
                if(orange.position > 755 && orange.position+54 == blue.position){

                }
                else{
                    anime("down 300ms",(-54),orange)
                    cases[orange.position].orange()
                    if(orange.position == blue.position){
                    timeB = 0    
                    anime("down 300ms",(-54),blue)
                    }
                }
            }
            else if(event.keyCode == 68){
                if(orange.position == 53 || orange.position == 107|| orange.position == 161 || orange.position == 215 || orange.position == 269 || orange.position == 323|| orange.position == 377|| orange.position == 431|| orange.position == 485|| orange.position == 539|| orange.position == 593|| orange.position == 647|| orange.position == 701|| orange.position == 755 || orange.position == 809|| orange.position == 863){

                }
                else if(orange.position+1 == blue.position && (orange.position == 52 || orange.position == 106 || orange.position == 160 || orange.position == 214 || orange.position == 268 || orange.position == 322|| orange.position == 376|| orange.position == 430|| orange.position == 484|| orange.position == 538|| orange.position == 592|| orange.position == 646|| orange.position == 700|| orange.position == 754 || orange.position == 808|| orange.position == 862)){

                }
                else{
                    anime("right 300ms",(-1),orange)
                    cases[orange.position].orange()
                    if(orange.position == blue.position){
                    timeB = 0
                    anime("right 300ms",(-1),blue)
                    }
                }
            }
            if(event.keyCode == 81){
                if(orange.position == 0 || orange.position == 54 || orange.position == 108 || orange.position == 162 || orange.position == 216 || orange.position == 270 || orange.position == 324 || orange.position == 378|| orange.position == 432|| orange.position == 486|| orange.position == 540|| orange.position == 594|| orange.position == 648|| orange.position == 702|| orange.position == 756|| orange.position == 810){
                }
                else if(orange.position-1 == blue.position && (orange.position == 1 ||orange.position == 55 || orange.position == 109 || orange.position == 163 || orange.position == 217 || orange.position == 271 || orange.position == 325 || orange.position == 379|| orange.position == 433|| orange.position == 487|| orange.position == 541|| orange.position == 595|| orange.position == 649|| orange.position == 703|| orange.position == 757|| orange.position == 811)){
                }
                else{
                    anime("left 300ms",1,orange)
                    cases[orange.position].orange()
                    if(orange.position == blue.position){
                    timeB = 0
                    anime("left 300ms",1,blue)
                    }
                }
            }
        }
        
    })
}




