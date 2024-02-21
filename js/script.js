function getRandomInt(max) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * max);
}
function changeHeader(names) {
    let index = getRandomInt(9);
     document.getElementById("name").innerHTML = names[index];
}