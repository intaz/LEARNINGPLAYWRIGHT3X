let data = 1900;

if(data % 4 === 0 && data % 100 !==0) {     
    console.log("YES");
}
else if(data % 400 === 0){
    console.log("YES");
}else{
    console.log("NO");
}