const obj ={
    js: "javascript",
    Jv: "java",
    Py: "python",
    Rb: "ruby"
}
//console.log(obj);

for(const keys in obj){
    //console.log(keys)
    //=== for key and value
    //console.log(`shortcut of ${keys} is ${obj[keys]}`)
}

const programming = ["java", "python", "ruby", "javascript"]

for (const key in programming){
    console.log(programming[key])
}

