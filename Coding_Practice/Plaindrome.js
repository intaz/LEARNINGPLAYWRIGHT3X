let str = "racecar";

let reverse = "";

for(let i = str.length - 1; i >= 0; i--){
    reverse = reverse + str[i];
}

if(reverse === str){
    console.log("YES");
}else{
    console.log("NO");
}

