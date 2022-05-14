//METHOD 1

    function getData(uId) {
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            // return "skc@gmail.com";
            resolve("skc@gmail.com");
           }, 4000);
        });
    }

 async function fun2(){
    console.log("start");
    const email = await getData("sks");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}
fun2();



//METHOD 2


    //     function getData(uId) {
    //         console.log("start");
    //         return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             console.log("Fetched the data!");
    //             // return "skc@gmail.com";
    //             resolve("skc@gmail.com");
    //            }, 4000);
    //         });
    //     }
    
    //  function fun2(email){
       
    //     // const email = await getData("sks");
    //     console.log("Email id of the user id is: " + email);
    //     console.log("end");
    // }
    // getData("sks").then((email)=>fun2(email));



//METHOD 3

// function getData(uId,callback) {
    //     setTimeout(() => {
    //     console.log("Fetched the data!");
    //     callback("skc@gmail.com");
    //     }, 4000);
    //     }
    // function fun1(email){
    //     console.log("Email id of the user id is: " + email);
    //     console.log("end");
    // }
    // console.log("start");
    // getData("skc",fun1);
     
     
        




