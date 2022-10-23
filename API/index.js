function doSomething(){
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
     document.getElementById("title").innerText= data.activity;
     
     });
}
function doSomething2(){
    fetch("http://www.boredapi.com/api/activity?type")
    .then(response => response.json())
    .then(data => {
     document.getElementById("context").innerText= data.type;
     
     });
}
doSomething();
doSomething2();

setInterval(()=> {doSomething()},2000);
setInterval(()=> {doSomething2()},2000);