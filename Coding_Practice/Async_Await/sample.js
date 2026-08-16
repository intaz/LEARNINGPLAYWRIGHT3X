function openBrowser(){
    return new Promise(function (resolve){
        resolve("Browser Opened");
    });
}


function goToLoginPage(){
    return new Promise(function (resolve){
        resolve("Login page Opened");
    });
}

function enterCredentials(){
    return new Promise(function (resolve){
        resolve("Credentials entered");
    });
}

function clickLogin(){
    return new Promise(function (resolve){
        resolve("Logged in successfully");
    });
}


async function main(){
    let m1 = await openBrowser();
    console.log("Step1:" + m1);

    let m2 = await goToLoginPage();
    console.log("Step2:" + m2);

    let m3 = await enterCredentials();
    console.log("Step3:" + m3);

    let m4 = await clickLogin();
    console.log("Step4:" + m4);
}
