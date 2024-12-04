$(document).ready(function () {
    // Data for slideshow: update paths with your image file names and captions
    const images = [
        { letter: "A", item: "Apple", src: "images/A-item.jpg" },
        { letter: "S", item: "Sand", src: "images/S-item.jpg" },
        { letter: "H", item: "Heart", src: "images/H-item.jpg" },
        { letter: "L", item: "Leaf", src: "images/L-item.jpg" },
        { letter: "E", item: "Espresso", src: "images/E-item.jpg" },
        { letter: "Y", item: "Yellow", src: "images/Y-item.jpg" },
        { letter: "B", item: "Butterfly", src: "images/B-item.jpg" },
        { letter: "L", item: "Lamp", src: "images/LL-item.jpg" },
        { letter: "A", item: "Art", src: "images/AA-item.jpg" },
        { letter: "N", item: "Nail", src: "images/N-item.jpg" },
        { letter: "T", item: "Tea", src: "images/T-item.jpg" },
        { letter: "O", item: "Orchids", src: "images/O-item.jpg" },
        { letter: "N", item: "Notebook", src: "images/NN-item.jpg" }
    ];

    // Dynamically populate slides and navigation
    images.forEach((img, index) => {
        $(".slides").append(`<div class="slide ${index === 0 ? 'active' : ''}">
            <img src="${img.src}" alt="${img.item}">
            <p>${img.letter} - ${img.item}</p>
        </div>`);
        $(".navigation").append(`<button class="${index === 0 ? 'active-btn' : ''}" data-index="${index}">${img.letter}</button>`);
    });

    // Handle navigation clicks
    $(".navigation button").on("click", function () {
        const index = $(this).data("index");
        $(".slide").removeClass("active").eq(index).addClass("active");
        $(".navigation button").removeClass("active-btn").eq(index).addClass("active-btn");
    });
});

