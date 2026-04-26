//word counter

let pharses = `The morning, morning felt calm, calm and soft, soft like a gentle breeze, breeze moving slowly, slowly through the trees, trees standing still, still and quiet, quiet in the light, light of the sun, sun shining bright, bright across the sky, sky wide and blue, blue without clouds, clouds far away, away from sight, sight clear and open, open to the day, day full of moments, moments that repeat, repeat in rhythm, rhythm steady and smooth, smooth like time, time passing by, by each second, second after second, second by second, second by second, bringing peace, peace to the mind, mind at rest.`;

let replaceText = pharses.replace(",","")
let newWordArr = pharses.split(" ");
// let newWordArr = replaceText.split(" ");
console.log(newWordArr);

let recirdHolder = new Map();
let counter = 0;
for(let word of newWordArr){
    for(let inner_word of newWordArr){
        if(word == inner_word){
            counter +=1
        }else{

        }
    }
    recirdHolder.set(word,counter);
    counter = 0;
}

console.log(recirdHolder)