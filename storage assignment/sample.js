let value1=0,value2=0;
function showContent(){
    if(sessionStorage.getItem("value")==null){
        sessionStorage.setItem("value",0)
    }
    if(typeof(localStorage.getItem("value"))=='undefined' ){
        localStorage.setItem("value",0)
        sessionStorage.setItem("value",0)
    }

    else{

        value1 = parseInt(localStorage.getItem("value"))
        value2 = parseInt(sessionStorage.getItem("value"))
    }
    document.getElementById("localStorage").innerText=value1
    document.getElementById("sessionStorage").innerText=value2
}
function increment(){
    value1 = parseInt(localStorage.getItem("value"))
    value2 = parseInt(sessionStorage.getItem("value"))
    localStorage.setItem("value",value1+1)
    sessionStorage.setItem("value",value2+1)
    showContent()
}