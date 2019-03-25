
function init() {
// DOM 4   
    let image = document.createElement("img");
    image.setAttribute("src","car1.png");
    
document.getElementById("new_element").appendChild(image);
    
// DOM 5    	
let spans = document.getElementById("rainbow").getElementsByTagName("span");
let colors = ["red", "orange", "blue","#ff66cc","#cc33ff", "#99ccff"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}
// DOM 6
	var changeSrc = function(event) {
		if (event.target.src) {	
			if (event.target.src.includes("car2.png")) {
				event.target.src = "car1.png";	
			}
			else{
				event.target.src = "car1.png";
			}
		}
	  };
    document.getElementById("event").addEventListener("mouseover", changeSrc);
};
    // SHOPPING PART 
function addItem(){
	let list = document.createElement("li");
	let put = document.getElementById("iput").value;
	let str = document.createTextNode(put);
	if(document.getElementById("important").checked)
	{
		list.style.color = "red";
	}
	if(document.getElementById("bought").checked)
	{
		list.style.textDecoration = "underline";
	}
	list.appendChild(str);
	document.getElementById("shoplist").appendChild(list);
    
    };

    