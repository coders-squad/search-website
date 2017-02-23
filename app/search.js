<<<<<<< HEAD


function auto(){

    for (var j=0; j<roots.file.length; j++) {
      console.log(roots.file[j]);
    }
    return -1;


=======
var myRequest = new XMLHttpRequest();


function auto(){
	var search = document.getElementById('search').value;
  	myRequest.onreadystatechange = function() {
  		if (myRequest.readyState === 4) {
            if (myRequest.status === 200) {
			  	var options = JSON.parse(myRequest.responseText);
			  	var div = document.getElementById('words');
				div.innerHTML = "";
			    options.forEach(function(ele) {
			        var opt = document.createElement("option");
			        opt.setAttribute("value", ele);
			        opt.textContent = ele;
			        div.appendChild(opt);

   				 });
	        }
		}
}

myRequest.open("POST", "https://localhost:8079/auto",true);
myRequest.send(search);
>>>>>>> 6ab908e183041b435b5c942d145cad1b1bd3527c

}
