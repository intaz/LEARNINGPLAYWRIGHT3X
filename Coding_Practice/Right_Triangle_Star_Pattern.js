let data = 3;

/*for (let i = 1; i <= data; i++) {
    console.log("*".repeat(i));
}*/

for (let i =0; i< data; i++){
    for(let j =0; j<=i; j++){
        process.stdout.write("*");
    }
    console.log("");
}

