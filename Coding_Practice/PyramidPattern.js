let data = 3;


for(let i=1 ; i<=data; i++){
    let result = "";
    for(let j=1; j<=data-i; j++){
        result = result + " ";
    }
    for(let k=1; k<=2*i-1; k++){
        result = result + "*";
    }
    console.log(result);

}

