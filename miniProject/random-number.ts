
function generateNumber(minmum:number , maximum:number){
    if(minmum > maximum){
        console.log("Minmum should be less than Maximum")
        return false
    }
    let num = Math.random()*(maximum - minmum)+minmum;
    console.log(num)
    
}

generateNumber(20,30)