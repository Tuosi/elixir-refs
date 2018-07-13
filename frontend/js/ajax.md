# Ajax

## set server ruby on rails

````ruby
# application_controller.rb
after_action :access_control_headers
private def access_control_headers
  # or your web site like http://localhost:4200
  headers['Access-Control-Allow-Origin'] = "*"
  headers['Access-Control-Request-Method'] = %w{GET POST OPTIONS}.join(",")
end
````

````javascript
let xmlhttp = new XMLHttpRequest();
let httpMethod = "GET"; // "POST"
let url = "http://localhost:3002/users.json";
let isAsync = true;

xmlhttp.setRequestHeader("foo", "bar");
xmlhttp.open(httpMethod, url, isAsync);
xmlhttp.send();

xmlhttp.readyState; // 4
xmlhttp.status; // 200

res = xmlhttp.responseText; // string data
users = JSON.parse(res); // list of users

// invoke when readyState change
xmlhttp.onreadystatechange = function() {
  // todo
}
````

## readyState:
- when 0: init...
- when 1: connect servce
- when 2: send request
- when 3: process request
- when 4: receive response

## http status code:
- when 200: ok
- when 304: browser cache ok
- when 400: wrong action
- when 401: unauthenticate
- when 403: unauthorized
- when 404: not found
- when 405: forbidden resource
- when 414: url too long
- when 500: server error
