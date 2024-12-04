const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase();
            const images = document.querySelectorAll('.image-item');
            images.forEach(function(image) {
                const keywords = image.getAttribute('data-keywords').toLowerCase();
                if (keywords.includes(filter)) {
                    image.style.display = '';
                } else {
                    image.style.display = 'none';
                }
            });
        });