//adding the tuple list inthis script

let  first_tuple:readonly [string,number] = ["Dipu",124];
console.log(first_tuple[0]);
console.log(first_tuple[1]);

//tuple are fixed when type you can not adde yiour own sequenc - they are strict
//along with that tuple - during intialization hose are equal to declare dataype in tuple and after that u can add the data type

// first_tuple.push("yyt","Dpu") //make tuple readonly if not in that case it just behave like normal arr with no strict validaion on sequence while useing arr method
console.log(first_tuple)

let collection_arr :[string,number][] = [["Dipu",33],["Mick",234]];
collection_arr.push(["Dipu",123],["Dipu",123]);
console.log(collection_arr)
console.log(collection_arr[0])