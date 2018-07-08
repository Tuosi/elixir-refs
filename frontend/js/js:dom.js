
// 1. get element

// by id
target = document.getElementById("id");
// by class
target = document.getElementsByClassName("class");
// by tags
target = document.getElementsByTagName("p");
// nested
parent = document.getElementById("id");
child = parent.getElementsByTagName("p");

// 2. modify content and attributes

// content
target.innerHTML = "fooo";
target.innerText = "fooo";
// attribute
target.title = "the-title";
target.id = "the-unique-id";
target.classList.add("other-class");
// style
target.style.color = "black";
target.style.background = "yellow";
target.style.backgroundColor = "yellow";
target.style["background-color"] = "yellow";
target.style.visibility="hidden";
target.style.visibility="visible";

// 3. event

// onload, onunload
body.onload = function() { alert("onload"); }
body.onunload = function() { alert("onunload"); }
// onmousedown, onmouseup, onclick
target.onmousedown = function() { alert("first onmousedown"); }
target.onmouseup = function() { alert("then onmouseup"); }
target.onclick = function() { alert("last onclick"); }
// onmouseover, onmouseout
target.onmouseover = function() { ithis.innerHTML = "over"; }
target.onmouseout = function() { this.innerHTML = "out"; }
// onchange, onfocus, onblur
input.onfocus = function() { this.style.background = "red"; }
input.onblur = function() { this.style.background = "yellow"; }
input.onchange = function() { this.value = this.value.toUpperCase(); }

// addEventListener(), removeEventListener()
target.addEventListener("click", function(){ alert("foo"); });
target.addEventListener("click", function(){ alert("bar"); });

// 4. insert, remove element

// create element
target = document.createElement('p');
textNode = document.createTextNode('foo');
target.appendChild(textNode);

// appendChild
parent.appendChild(target);
// insertBefore
parent.insertBefore(target, child)
// removeChild
child.parentNode.removeChild(child);
// replaceChild
parent.replaceChild(target, child);

// 5. collections

// HTMLCollection
a = document.getElementsByTagName("p");
// NodeList
b = parent.childNodes;

