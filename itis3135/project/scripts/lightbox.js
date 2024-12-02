function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
}

document.querySelector(".close").onclick = function() {
    document.getElementById("lightbox").style.display = "none";
}