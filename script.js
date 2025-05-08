
function generateDraw() {
    const userNumbers = [];
    for (let i = 0; i < 7; i++) {
        const val = parseInt(document.getElementById('num' + i).value);
        if (isNaN(val) || val < 1 || val > 39 || userNumbers.includes(val)) {
            alert("Unesi 7 različitih brojeva između 1 i 39.");
            return;
        }
        userNumbers.push(val);
    }

    const draw = [];
    while (draw.length < 7) {
        let num = Math.floor(Math.random() * 39) + 1;
        if (!draw.includes(num)) draw.push(num);
    }

    const hits = userNumbers.filter(n => draw.includes(n));
    document.getElementById("results").innerHTML = 
        "<p>Izvučeni brojevi: <strong>" + draw.join(", ") + "</strong></p>" +
        "<p>Tvoji brojevi: <strong>" + userNumbers.join(", ") + "</strong></p>" +
        "<p>Pogodio si <strong>" + hits.length + "</strong> broja: " + hits.join(", ") + "</p>";
}

window.onload = () => {
    let html = "";
    for (let i = 0; i < 7; i++) {
        html += `<input type="number" id="num${i}" min="1" max="39">`;
    }
    document.getElementById("user-inputs").innerHTML = html;
};
