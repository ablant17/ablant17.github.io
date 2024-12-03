document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically load menus
    function loadMenu(containerId, jsonFile) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);
                data.forEach(item => {
                    const link = document.createElement("a");
                    link.textContent = item.name;
                    link.href = item.url;
                    link.classList.add("menu-item");
                    container.appendChild(link);
                });
            })
            .catch(error => console.error(`Error loading ${jsonFile}:`, error));
    }

    // Load Header Menu
    loadMenu("header-container", "menu.json");

    // Load Footer Menu
    loadMenu("footer-container", "footer.json");

    // Validation Functions
    window.validateHTML = function () {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
    };

    window.validateCSS = function () {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
    };
});
