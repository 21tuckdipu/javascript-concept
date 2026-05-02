{}
//herer we explicit define the type of varianle which does nly one thing reduce tnhe type infernce 
let my_Score :any = 2324;
// let my_Score :any = "123";
let final_scroe =  my_Score as number;

console.log(final_scroe+" : "+typeof(final_scroe))

// let my_name :any = "Dipu";
let my_name :any = "123";
let con_name =  my_name as string;
console.log(con_name+" : "+typeof(con_name))

let my_Status :any = true;
let con_status =  my_Status as boolean;
console.log(con_status+" : "+typeof(con_status));

let user_undefine:undefined = undefined;
let usr_null:null = null