function clearPlaceholders() {
    document.getElementById('random-bunny-fact').textContent = "";
    document.getElementById('gift-idea').textContent = "";
    document.getElementById('wrap-suggestion').textContent = "";
    document.getElementById('hop-quote').textContent = "";
    document.getElementById('adopt-bunny').textContent = "";
    document.getElementById('polygon-result').textContent = "";
}
function randomBunnyFact() {
    clearPlaceholders();
    document.getElementById('random-bunny-fact').textContent = "Fun Fact: A bunny can hop up to 3 feet in the air!";
}
function giftIdea() {
    clearPlaceholders();
    document.getElementById('gift-idea').textContent = "Gift Idea: How about a bunny-themed eco-friendly wrapping kit?";
}
function wrapSuggestion() {
    clearPlaceholders();
    document.getElementById('wrap-suggestion').textContent = "Wrap Suggestion: Use 100% cotton cloth with bunny prints to wrap your gifts!";
}
function hopQuote() {
    clearPlaceholders();
    document.getElementById('hop-quote').textContent = "Hop Quote: \"Hop lightly and wrap wisely!\" - Adroit Bunny";
}
function adoptBunny() {
    clearPlaceholders();
    document.getElementById('adopt-bunny').textContent = "Adopt a Bunny: Visit our adoption page to find your furry friend!";
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("random-bunny-fact-button").addEventListener("click", randomBunnyFact);
    document.getElementById("gift-idea-button").addEventListener("click", giftIdea);
    document.getElementById("wrap-suggestion-button").addEventListener("click", wrapSuggestion);
    document.getElementById("hop-quote-button").addEventListener("click", hopQuote);
    document.getElementById("adopt-bunny-button").addEventListener("click", adoptBunny);
});


