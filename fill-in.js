document.getElementById("submit").onclick = function () {
    for (let i = 1; i <= 7; i++) {
        let word = document.getElementById('noun' + i + 'Box').value;
        document.getElementById("noun" + i).innerHTML = word;
    }

    for (let i = 1; i <= 4; i++) {
        let word = document.getElementById('verb' + i + 'Box').value;
        document.getElementById("verb" + i).innerHTML = word;
    }

    for (let i = 1; i <= 3; i++) {
        let word = document.getElementById('adj' + i + 'Box').value;
        document.getElementById("adj" + i).innerHTML = word;
    }

    var word = document.getElementById('gameBox').value;
    document.getElementById("game").innerHTML = word;
    var word = document.getElementById('plantBox').value;
    document.getElementById("plant").innerHTML = word;
    var word = document.getElementById('bodypartBox').value;
    document.getElementById("bodypart").innerHTML = word;
    var word = document.getElementById('placeBox').value;
    document.getElementById("place").innerHTML = word;
    var word = document.getElementById('numberBox').value;
    document.getElementById("number").innerHTML = word;
    
    var element = document.getElementById('result');
    element.classList.remove('hidden');
}