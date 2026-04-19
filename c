[33mcommit 38291e0c252e377021bfb8a01b7b9709833a48b1[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Dipu <153580850+21tuckdipu@users.noreply.github.com>
Date:   Sun Apr 19 22:22:02 2026 +0530

    basic array-object

[1mdiff --git a/BasicPart2/array-method.js b/BasicPart2/array-method.js[m
[1mnew file mode 100644[m
[1mindex 0000000..9b9242f[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/array-method.js[m
[36m@@ -0,0 +1,82 @@[m
[32m+[m[32m"use strict";[m
[32m+[m[32mconst fruits = ["Banana", "Orange", "Apple", "Mango"];[m
[32m+[m[32mconsole.log(`ARRAY  : ${fruits}`);[m
[32m+[m[32m//Methods[m
[32m+[m[32mlet size = fruits.length;[m
[32m+[m
[32m+[m[32mlet arrayToString = fruits.toString(); //convert arr to comman seperated value[m
[32m+[m
[32m+[m[32m//accessing the elemnts[m
[32m+[m[32mlet thirdFruitsElementType01 = fruits.at(2); //modern support negative index[m
[32m+[m[32mlet  thirdFruitsElementType02 = fruits[2];  // not supported negative index due to object property[m
[32m+[m[32mlet lastFruits = fruits.at(-1);[m
[32m+[m
[32m+[m[32m//join()[m
[32m+[m[32mlet joinArray = fruits.join('*');[m
[32m+[m
[32m+[m[32m//removing elements[m
[32m+[m[32mlet lastPoppedFruits = fruits.pop();  //last element[m
[32m+[m[32mlet lastShiftingElement = fruits.shift(); //first Elements[m
[32m+[m
[32m+[m[32m//adding elements[m
[32m+[m[32mlet lastPushFruits = fruits.push("Kiwi");[m
[32m+[m[32mlet lastUnShiftFruits = fruits.unshift("Lemon");[m
[32m+[m
[32m+[m[32m//changing Elements[m
[32m+[m[32mfruits[0] = 'Mango'[m
[32m+[m[32m// delete fruits[0]; //do not use it unsual behaior (not like python)[m
[32m+[m
[32m+[m
[32m+[m[32m//merning Array[m
[32m+[m[32mconst myGirls = ["Cecilie", "Lone"];[m
[32m+[m[32mconst myBoys = ["Emil", "Tobias", "Linus"];[m
[32m+[m
[32m+[m[32mconst myChildren = myGirls.concat(myBoys);[m
[32m+[m
[32m+[m[32mconst arr1 = ["Cecilie", "Lone"];[m
[32m+[m[32mconst arr2 = ["Emil", "Tobias", "Linus"];[m
[32m+[m[32mconst arr3 = ["Robin", "Morgan"];[m
[32m+[m[32mconst myChildren02 = arr1.concat(arr2, arr3);[m
[32m+[m
[32m+[m[32mconst arr4 = ["Emil", "Tobias", "Linus"];[m
[32m+[m[32mconst myChildren03 = arr1.concat("Peter");[m[41m [m
[32m+[m
[32m+[m
[32m+[m[32mconst myArr = [[1,2],[3,4],[5,6]];[m
[32m+[m[32mconst newArr = myArr.flat();[m
[32m+[m
[32m+[m[32m//slice[m
[32m+[m[32mconst citrus = fruits.slice(1,3);[m
[32m+[m
[32m+[m[32m//printing[m
[32m+[m[32m// console.log("Array Size  : "+size);[m
[32m+[m[32m// console.log(arrayToString);[m[41m [m
[32m+[m[32m// console.log("Third Elements using .at() : "+thirdFruitsElementType01);[m
[32m+[m[32m// console.log('Third Elements using [] : '+thirdFruitsElementType02);[m
[32m+[m
[32m+[m[32m//negativing accessing[m
[32m+[m[32m// console.log(`last Elements : ${lastFruits}`);[m
[32m+[m[32m// console.log(`Last ELEMENTS : ${fruits[-1]}`); //give an undefined[m
[32m+[m[32m// console.log('JOIN ARRAY : '+joinArray);[m
[32m+[m
[32m+[m[32m//ELEMENTS REDUCTION[m
[32m+[m[32m// console.log(`POPPED ELEMENTS : ${lastPoppedFruits}`);[m
[32m+[m[32m// console.log(`SHIFTED ELEMENTS : ${lastShiftingElement}`);[m
[32m+[m
[32m+[m[32m// console.log(`PUSHED ELEMENTS : ${lastPushFruits}`);[m
[32m+[m[32m// console.log(`UNSHIFT ELEMENTS : ${lastUnShiftFruits}`);[m
[32m+[m
[32m+[m[32m// console.log(`FIRST ELEMET AFTER DELETE : ${fruits[0]}`) //define besacuse use undefine[m
[32m+[m[32m// console.log(`'ARRAY' : ${fruits}`);[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32mconsole.log(`MERGES ARRAY : ${myChildren}`);[m
[32m+[m[32mconsole.log(`merge  THREE ARRAY : ${myChildren02}`);[m
[32m+[m[32mconsole.log('merge  VALUES IN ARRAY :'+myChildren03);[m
[32m+[m
[32m+[m[32mconsole.log(myArr)[m
[32m+[m[32mconsole.log(`AFTER THE FLAT() ${newArr}`);[m
[32m+[m
[32m+[m[32mconsole.log(citrus);[m
\ No newline at end of file[m
[1mdiff --git a/BasicPart2/array_01.js b/BasicPart2/array_01.js[m
[1mnew file mode 100644[m
[1mindex 0000000..538f2c6[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/array_01.js[m
[36m@@ -0,0 +1,47 @@[m
[32m+[m[32m'use strict';[m
[32m+[m
[32m+[m[32mconst myarray = [1,2,3,4,5,6]  //array contain comman datatype element , mutiple datatype element also[m
[32m+[m
[32m+[m[32m//javascript array are mixed[m
[32m+[m[32m//javascript array are not fixed in  size[m
[32m+[m[32m// javascript array are not access by string based value[m[41m [m
[32m+[m[32m//array made a shalllow copy means change in array[m[41m [m
[32m+[m
[32m+[m[32mconst myFavoriteHeore = ['Shaktiman', 'Nagaraj'][m
[32m+[m[32mconst myArray2 = new Array(1,2,34,4);[m
[32m+[m
[32m+[m[32mconsole.log(myarray);[m
[32m+[m[32m//console.log(myArray2);[m
[32m+[m[32m//console.log(myFavoriteHeore);[m
[32m+[m
[32m+[m[32m//console.log(myarray[1]);[m
[32m+[m[32m//myarray.push(71);[m
[32m+[m
[32m+[m[32m//console.log(myarray);[m
[32m+[m[32m//myarray.pop(); // remove the last elemrnt form the array[m
[32m+[m
[32m+[m[32m//console.log(myarray);[m
[32m+[m
[32m+[m[32m//myarray.unshift(9); //add the element at the start of the arry[m
[32m+[m[32m//myarray.shift()  // remove the first elemt from the array[m
[32m+[m
[32m+[m[32m// console.log(myarray.includes(9));  // check wehther thw values exit or not in the arry[m
[32m+[m
[32m+[m[32m//console.log(myarray.indexOf(3));  // return the  index value of the values pass in teh arry[m
[32m+[m[32m//console.log(myarray);[m
[32m+[m
[32m+[m[32m// console.log(myarray.join())  // convert the array in to string[m
[32m+[m
[32m+[m[32m//Slice , Splice[m
[32m+[m
[32m+[m[32mconsole.log("A",myarray);[m
[32m+[m[32mconst myn1 = myarray.slice(1,3);[m
[32m+[m[32mconsole.log(myn1);[m
[32m+[m[32mconsole.log("A",myarray);[m
[32m+[m
[32m+[m[32mconst myn2 = myarray.splice(1,3);[m
[32m+[m[32mconsole.log(myn2);[m
[32m+[m[32mconsole.log(myn2);[m
[32m+[m
[32m+[m[32m//in splice the whole array sturcture has beeen change the index which is passed in splice is remove from the main array[m
[32m+[m
[1mdiff --git a/BasicPart2/array_02.js b/BasicPart2/array_02.js[m
[1mnew file mode 100644[m
[1mindex 0000000..f248ffa[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/array_02.js[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[32m'use strict';[m
[32m+[m
[32m+[m[32mconst marvel_heors = ["john cena", "emiway_banrai","adc","albetp"][m
[32m+[m[32mconst dc_heros  = ['superman' , 'Flash','batman'][m
[32m+[m
[32m+[m[32m// marvel_heors.push(dc_heros)[m
[32m+[m[32m// console.log(marvel_heors);  // it does not merege the array . it makes array with in the array[m
[32m+[m[32m// console.log(marvel_heors[4] [1]);  //asscessing  the flash values directly in the databases[m
[32m+[m
[32m+[m[32m//concatation[m[41m [m
[32m+[m[32m// let all_heros = marvel_heors.concat(dc_heros)[m
[32m+[m[32m//console.log(marvel_heors);[m
[32m+[m[32m//console.log(all_heros);[m
[32m+[m
[32m+[m[32m/*[m[41m [m
[32m+[m[32mpush added array ion the existing array[m
[32m+[m[32mcocat merge the array and return the new array[m
[32m+[m
[32m+[m[32m*/[m
[32m+[m
[32m+[m[32m//spread : alernate of concat[m
[32m+[m[32m// const all_newHeros  = [...marvel_heors ,...dc_heros][m
[32m+[m[32m// console.log(all_newHeros);[m
[32m+[m
[32m+[m[32m//Complex array handling[m
[32m+[m[32m//const anotherArray = [1,2,3,4,5,[143,45],6,7,8,[89,[8,9,0],9]][m
[32m+[m[32m//let useAbleArray = anotherArray.flat(Infinity)[m
[32m+[m[32m//console.log(useAbleArray)[m
[32m+[m
[32m+[m[32m//[m
[32m+[m[32m// console.log(Array.isArray("Dipu"));[m
[32m+[m[32m// console.log(Array.from("Dipu"));[m
[32m+[m[32m//console.log(Array.isArray((name:"Dipu" )));   //error in this line of code[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32mlet  score1 = 100[m
[32m+[m[32mlet score3 = 234[m
[32m+[m[32mlet score2 = 333[m
[32m+[m[32m// console.log(Array.of(score1 , score2 , score3));  //forming an array  from the set of the variable[m
[32m+[m
[32m+[m[32m//learn more about the is , from , of method of the array[m
[32m+[m
[1mdiff --git a/BasicPart2/objectDeStructure.js b/BasicPart2/objectDeStructure.js[m
[1mnew file mode 100644[m
[1mindex 0000000..0cd2172[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/objectDeStructure.js[m
[36m@@ -0,0 +1,22 @@[m
[32m+[m[32m'use strict';[m
[32m+[m
[32m+[m[32mconst course ={[m
[32m+[m[32m    courseName : "JsInHindi",[m
[32m+[m[32m    price : 999,[m
[32m+[m[32m    coureInstructor: "Rajesh"[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//syntax for object desturcting[m[41m [m
[32m+[m
[32m+[m[32mconst { coureInstructor} = course[m
[32m+[m[32mconst {courseName :name} = course[m
[32m+[m[32mconsole.log(coureInstructor)[m
[32m+[m[32mconsole.log(name)[m
[32m+[m
[32m+[m[32m//api concept :[m
[32m+[m[32m//api in simple language : jabi apko apana kam kisi aur ke sir pe dalana hota hai tu wose api kaha the hai[m
[32m+[m
[32m+[m[32m//json values comes from backened  (javascript object notation)==> universal in all language not limited to javascript only[m
[32m+[m[32m//randomuserme  ===> a webseite for getting the api[m
[32m+[m[32m//then this data can be fetch by the programmmer[m
[32m+[m[32m//u can alsom use dan apiformater to look and understanf theapi[m
\ No newline at end of file[m
[1mdiff --git a/BasicPart2/object_01.js b/BasicPart2/object_01.js[m
[1mnew file mode 100644[m
[1mindex 0000000..2c6ae80[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/object_01.js[m
[36m@@ -0,0 +1,51 @@[m
[32m+[m[32m'use strict';[m
[32m+[m
[32m+[m[32m//object ===class01[m
[32m+[m[32m/*[m
[32m+[m[32mSingleton[m
[32m+[m
[32m+[m[32mobject literals[m
[32m+[m[32m*/[m
[32m+[m[32m//Object.create = {} //singleton[m
[32m+[m
[32m+[m
[32m+[m[32mconst mySym = Symbol("key1")[m
[32m+[m[32m//displaying the symbol in object[m
[32m+[m[32m//literal method[m
[32m+[m[32mconst Jsuser = {[m
[32m+[m[32m    [mySym] : "key1",[m
[32m+[m[32m    "fullname":"DipuSonar",[m
[32m+[m[32m    name :"Dipu",[m
[32m+[m[32m    locationWork : "Jaipur",[m
[32m+[m[32m    email:"dipu@google.com" ,[m
[32m+[m[32m    age :21 ,[m
[32m+[m[32m    isloggedIn : false,[m
[32m+[m[32m    lastLoginDays : ["Minday","Tuesday"][m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//accessing the object[m[41m [m
[32m+[m[32m// console.log(Jsuser.email);[m
[32m+[m[32m// console.log(Jsuser['email']);[m
[32m+[m
[32m+[m[32m//use of sqaure notation[m
[32m+[m[32m// console.log(Jsuser["fullname"]);[m
[32m+[m[32m// Jsuser.email = "dipuSoanr@microsoft.com"[m
[32m+[m[32m//Object.freeze(Jsuser)[m
[32m+[m
[32m+[m[32m//console.log(Jsuser)[m
[32m+[m
[32m+[m[32m//in javascript function can also declare has a string[m
[32m+[m
[32m+[m[32mJsuser.greeting = function(){[m
[32m+[m[32m    console.log("hello Js user");[m
[32m+[m[32m}[m
[32m+[m[32m// console.log(Jsuser.greeting());[m
[32m+[m[32m// Jsuser.greeting()[m
[32m+[m
[32m+[m[32mJsuser.greetingtwo = function(name){[m
[32m+[m[32m    console.log(`hello world , ${this.name}`);[m
[32m+[m[32m}[m
[32m+[m[32m// Jsuser.greetingtwo('Dipu')[m
[32m+[m
[32m+[m[32mconsole.log(Jsuser)[m
\ No newline at end of file[m
[1mdiff --git a/BasicPart2/object_02.js b/BasicPart2/object_02.js[m
[1mnew file mode 100644[m
[1mindex 0000000..b34d854[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/object_02.js[m
[36m@@ -0,0 +1,60 @@[m
[32m+[m[32m'use strict';[m
[32m+[m
[32m+[m[32m//const tinderUser = new Object( )     //singleton object[m
[32m+[m[32mconst tinderUser = {}  //non  SingletonUser[m
[32m+[m
[32m+[m[32mtinderUser.name = "Sam"[m
[32m+[m[32mtinderUser.id = 23[m
[32m+[m[32mtinderUser.isloggedIn =false[m
[32m+[m
[32m+[m[32m//console.log(tinderUser)[m
[32m+[m
[32m+[m[32mconst regularUser ={[m
[32m+[m[32m    email:"somedigital@gmail.com",[m
[32m+[m[32m    fullname:{[m
[32m+[m[32m        firstname :"Dipu",[m
[32m+[m[32m        LastName : "Sonar"[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m[32m// console.log(regularUser.fullname)[m
[32m+[m[32m// console.log(regularUser.fullname.firstname)  //you can go has many nesting in objects in javascripts[m
[32m+[m
[32m+[m
[32m+[m[32m//we can combine the object to eachother[m
[32m+[m[32m//while combining one ibject to another object , object also behave same ha s array property of combining to eachother[m
[32m+[m
[32m+[m[32mconst obj1 = { 1:"a" , 2 :"b"}[m
[32m+[m[32mconst obj2 = {3:"c" , 4:"r"}[m
[32m+[m
[32m+[m
[32m+[m[32mconst obj3 = {obj1 , obj2}[m
[32m+[m[32m// console.log(obj3)[m
[32m+[m
[32m+[m[32mconst obj4  = Object.assign({},obj1,obj2)[m
[32m+[m[32m// console.log(obj4)   //mereging two object into one object (tareget object)[m
[32m+[m
[32m+[m[32m//latest and array concept while merging the objects[m
[32m+[m[32mconst obj5 = {...obj1,...obj2}[m
[32m+[m[32m// console.log(obj5)[m
[32m+[m
[32m+[m[32m//when value are coming from the databases[m
[32m+[m[32mconst user =[[m
[32m+[m[32m    {[m
[32m+[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m[32m][m
[32m+[m
[32m+[m
[32m+[m[32m//below dot method return the  array the output[m
[32m+[m[32mconsole.log(Object.keys(tinderUser));[m
[32m+[m[32mconsole.log(Object.values(tinderUser));[m
[32m+[m[32mconsole.log(Object.entries(tinderUser));[m
[32m+[m
[32m+[m
[32m+[m[32m// console.log(tinderUser.hasOwnProperty("name"));  //return true or false based on the parameter psseed in it[m
\ No newline at end of file[m
[1mdiff --git a/BasicPart2/tempCodeRunnerFile.js b/BasicPart2/tempCodeRunnerFile.js[m
[1mnew file mode 100644[m
[1mindex 0000000..31125ca[m
[1m--- /dev/null[m
[1m+++ b/BasicPart2/tempCodeRunnerFile.js[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mg(obj5)[m
\ No newline at end of file[m
