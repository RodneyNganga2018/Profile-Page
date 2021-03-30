var numRequests = 2;
var numConnections = 500;
var requests = document.querySelector("#first1");
var connections = document.querySelector("#first2");

function add1(element) {
    numRequests--;
    numConnections++;
    requests.textContent = numRequests
    connections.textContent = numConnections;
    element.parentElement.remove();
}

function remove1(element) {
    numRequests--;
    requests.textContent = numRequests
    element.parentElement.remove();
}

function changeName () {
    var customerName = prompt("Please enter your new name: ", "");
    if (customerName!= null && customerName!="") {
        document.getElementById("fullName").innerHTML = customerName;
    }
}