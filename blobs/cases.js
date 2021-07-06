
const cases = document.querySelectorAll("#map > div")

for(let i = 0; i < cases.length; i++ ){
    cases[i].num = String(i)
    cases[i].color = "black"
    cases[i].trapB = false
    cases[i].trapO = false
    cases[i].blue = function(){
        if(this.color == "black"){
            cases[blue.position].style.backgroundColor = "blue"
            this.color = "blue"
            pointsBlue++
        }
        else if(this.color == "orange"){
            cases[blue.position].style.backgroundColor = "blue"
            this.color = "blue"
            pointsBlue++
            pointsOrange--
        }
        else if(this.color == "yellow"){
            cases[blue.position].style.backgroundColor = "blue"
            this.color = "blue"
            pointsBlue++
            pointsOrange--
        }
    }
    cases[i].orange = function(){
        if(this.color == "black"){
            cases[orange.position].style.backgroundColor = "orange"
            this.color = "orange"
            pointsOrange++
        }
        else if(this.color == "blue"){
            cases[orange.position].style.backgroundColor = "orange"
            this.color = "orange"
            pointsOrange++
            pointsBlue--
        }
        else if(this.color == "aqua"){
            cases[orange.position].style.backgroundColor = "orange"
            this.color = "orange"
            pointsOrange++
            pointsBlue--
        }
    }
    cases[i].bonusB = function(){
        cases[blue.position].style.animation= "blue 1s infinite"
        cases[blue.position].style.backgroundColor="blue"
        this.color = "aqua"
    }
    cases[i].bonusO = function(){
        cases[orange.position].style.animation= "orange 1s infinite"
        cases[orange.position].style.backgroundColor="orange"
        this.color = "yellow"
    }  
}