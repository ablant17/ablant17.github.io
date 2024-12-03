document.addEventListener("DOMContentLoaded", function () {
    function validateHTML() {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
    }
    
    function validateCSS() {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
    }
    
    function validateAccessibility() {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://wave.webaim.org/report#/url=${currentURL}`, "_blank");
    }
    
    // Fetch JSON data for menu
    fetch("menu.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data for the menu
            const menuContainer = document.getElementById("header-container");
            data.forEach((item) => {
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                // Append menu item to the container
                menuContainer.appendChild(menuItem);
            });
        })
        .catch((error) => console.error("Error fetching menu:", error));

    // Fetch JSON data for footer links
    fetch("footer-links.json")
        .then((response) => response.json())
        .then((data) => {
            const footerContainer = document.getElementById("footer-container");

            // Create footer links div
            const footerLinks = document.createElement("div");
            footerLinks.id = "footer-links";

            data.forEach((item) => {
                const footerLink = document.createElement("a");
                footerLink.classList.add("footer-link");
                footerLink.textContent = item.name;
                footerLink.href = item.url;
                footerLink.target = "_blank"; // Open links in a new tab
                footerLinks.appendChild(footerLink);
            });

            footerContainer.appendChild(footerLinks);

            // Create validation buttons if they do not exist already
            if (!document.getElementById("validation-buttons")) {
                const buttonsContainer = document.createElement("div");
                buttonsContainer.id = "validation-buttons";

                const htmlButton = document.createElement("button");
                htmlButton.textContent = "Validate HTML";
                htmlButton.addEventListener("click", validateHTML);
                buttonsContainer.appendChild(htmlButton);

                const cssButton = document.createElement("button");
                cssButton.textContent = "Validate CSS";
                cssButton.addEventListener("click", validateCSS);
                buttonsContainer.appendChild(cssButton);

                const accessibilityButton = document.createElement("button");
                accessibilityButton.textContent = "Validate Accessibility";
                accessibilityButton.addEventListener("click", validateAccessibility);
                buttonsContainer.appendChild(accessibilityButton);

                // Append validation buttons to footer container
                footerContainer.appendChild(buttonsContainer);
            }

            // Add "Designed by" and "Certified by" links at the very bottom of the page
            const footerCredits = document.createElement("div");
            footerCredits.id = "footer-credits";
            footerCredits.innerHTML = ` 
                <a href="https://webpages.charlotte.edu/ablant17/itis3135/abwebinnovations.com/index.html" target="_blank">Designed by AB Web Innovations</a> 
                <span> | </span> 
                <a href="https://www.freecodecamp.org/certification/ablant17/javascript-algorithms-and-data-structures-v8" target="_blank">Certified in JavaScript</a> 
            `;

            document.body.appendChild(footerCredits);

            // Add "Puellastar" and tagline at the bottom of the page
            const footerContent = document.createElement("div");
            footerContent.id = "footer-content";
            footerContent.innerHTML = ` 
                <p>© 2024 <strong>Puellastar</strong></p> 
                <p class="tagline">Wrap with Care, Hop with Flair!</p> 
            `;
            document.body.appendChild(footerContent);
        })
        .catch((error) => console.error("Error fetching footer links:", error));
});
