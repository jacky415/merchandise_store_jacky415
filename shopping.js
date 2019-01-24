// selects all img with class item
var items = document.querySelectorAll(".item");

function clickitem (){
	for (var i=0; i<items.length; i++){
		items[i].addEventListener("click", function(){
		itemAdd();
		});
	}
}

function itemAdd() {
	alert("Item has been added to your cart!");
	/* add ejs to list the amount of items in my cart <%=ejs%> */
}

// initiate the function clickitem
clickitem();
