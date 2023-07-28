// Immediatly Invoked function expression 

(function rupesh(){
    console.log(`Connected to DB`);
})();

// Arrow and unnamed IIFe condition

(( name) => {
    console.log(`This is unamed arrow IFF ${name}`)
})("Rupesh");