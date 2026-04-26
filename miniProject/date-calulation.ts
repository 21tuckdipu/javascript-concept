//daty between 2 days

let dateDefault = new Date("02-02-2003");
let dateCurrentDate =new  Date();
console.log(dateDefault);
console.log(dateCurrentDate);

let monthDiffernce = dateCurrentDate.getMonth()-dateDefault.getMonth()
let yearDiff = dateCurrentDate.getFullYear() - dateDefault.getFullYear();
let dateDiffer = dateCurrentDate.getDate() - dateDefault.getDate()

console.log(monthDiffernce+": "+yearDiff+" : "+dateDiffer)