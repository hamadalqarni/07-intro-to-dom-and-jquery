/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/
    function addToList(list, newThing) {
		var l = document.createElement("li");
    	var n = document.createTextNode(newThing);
    	var newL=l.appendChild(n);
    	list.appendChild(newL);
}

window.onload = function() {
		
		document.getElementById('new-thing-button').onclick=function(event){
		event.preventDefault();
		/*var l = document.createElement("li");
		var w=document.getElementById("new-thing").value;
		var n = document.createTextNode(w);
		l.appendChild(n);
    	document.getElementById("fav-list").appendChild(l);*/

    	addToList(document.getElementById("fav-list"),document.getElementById("new-thing").value);

	}
  // when someone clicks the button...
	var main_heading = document.createElement("h1");
    var heading_text = document.createTextNode("Hello dynamic world!");
    main_heading.appendChild(heading_text);
    document.body.appendChild(main_heading);
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  	var helloElem = document.getElementById("hello");
    // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
    helloElem.style.color = "red";

    var campusesContainer = document.getElementById("gaCampuses");
    // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
    var gaCampuses = campusesContainer.getElementsByTagName("li");

    // We can iterate through the returned collection with a for loop
    for (var i = 0; i < gaCampuses.length; i++) {
        gaCampuses[i].style.backgroundColor = "green";
    }

    button = document.getElementById('my-input-button');
    // Event parameter is the default object event that would have happened on user click
    button.onclick = function(event) {
      // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
      event.preventDefault();
      MyApp.do_something("world");
    };
};

MyApp = {};

  MyApp.do_something = function(name) {
    console.log("Hello " + name);
  }

/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


