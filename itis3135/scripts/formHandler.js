function handleUserInput() {
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;
    const message = `The Adroit Bunny welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById('greeting-message').textContent = message;
}
function showPolygon() {
    const number = Math.abs(Math.round(document.getElementById('number').value));
    const polygons = {
        2: "digon",
        3: "triangle",
        4: "quadrilateral",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon"
    };
    const polygonName = polygons[number] || "invalid number";
    document.getElementById('polygon-result').textContent = `Your polygon is a ${polygonName}!`;
}

