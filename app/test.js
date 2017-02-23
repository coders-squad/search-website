var test = QUnit.test;

test("check if the function auto exists",function(t){
  t.ok(window.auto,"it exists");
});


test("check if the function auto sends the value of the input",function(t){
	t.ok(document.getElementById('search'),"input exists");
	document.getElementById('search').oninput = function(){
		var inpVal = this.value;
		t.deepEqual(auto(),inpVal,"it sends the value of the input");
	}
});
