// mouse click event handler
var imagess = document.getElementsByTagName ("img");
for (var i = 0; i < imagess.length; i++) {
    imagess [i].onclick = showAnswer;
}
function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg + ";
    image.src =name;
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg + ";
    image.src =name;
}