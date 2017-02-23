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

<<<<<<< HEAD
myRequest.open("POST", "http://localhost:8079/auto",true);
=======
myRequest.open("POST", "https://coders-autocomplete.herokuapp.com/" || "http://localhost:8079/auto",true);
>>>>>>> e8c4dc86fc8aa9fc724b31d67a92335d8e55a4d5
myRequest.send(search);


}
