let data = 4;

/*for (let i = data; i >= 1; i--) {
    console.log("*".repeat(i));
}*/

for(let i= data; i>0; i--){
    for(let j = 0; j<i; j++){
        process.stdout.write("*");
    }
    console.log("");
    
}