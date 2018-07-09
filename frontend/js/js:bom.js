// BOM

// window
window.document;
window.open();
window.close();
window.moveTo();
window.resizeTo();

// screen
window.screen;
screen.availWidth;
screen.availHeight;

// location
window.location;
location.protocol;
location.hostname;
location.pathname;
location.port;

// history
window.history;
history.back();
history.forward();

// navigator
window.navigator;
navigator.appCodeName;
navigator.appName;
navigator.appVersion;
navigator.cookieEnabled;
navigator.platform;
navigator.userAgent;
navigator.systemLanguage;

// pop window
alert("warning!");
isSure = confirm("are u sure?"); // true, false
answer = prompt("the question", "defaults");

// timer
x = setTimeout(func, milliseconds);
clearTimeout(x); // stop timeout process

y = setInterval(func, milliseconds);
clearInterval(y); // stop interval process

// cookie
// get
document.cookie;
// set and modify
document.cookie = "foo=bar";
document.cookie = "foo=bar; expires=Thu, 18 Dec 2018 12:00:00 GMT";
// delete -> set expires as previous time
document.cookie = "foo=bar; expires=Thu, 18 Dec 2010 12:00:00 GMT";
