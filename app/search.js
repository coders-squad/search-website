var myRequest = new XMLHttpRequest();


function auto(){
console.log("root")
console.log("aaa")
  myRequest.onreadystatechange = function() {

}
myRequest.open("POST", "http://localhost:8079/auto",true);
myRequest.send();



}
