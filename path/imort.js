const { builtinModules } = require("module");

const add=(a,b)=>{
    console.log(a+b);
}
const sub=(a,b)=>{
    console.log(a-b);
}
const name={
    title:"hello",
    name:"harsh",
    class:"b-tech",
}
module.exports={
    add,sub,name
};

add(2,3);
