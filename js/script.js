document.addEventListener("DOMContentLoaded", function() {
    var likeButtons = document.querySelectorAll('.catalog__item-likeButton');

    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var heartIcon = button.querySelector('.heart-icon');
            var pathElement = heartIcon.querySelector('path');

            var isActive = heartIcon.classList.contains('active');

            heartIcon.classList.toggle('active');
            if (isActive) {
                pathElement.setAttribute('fill', 'white');
                pathElement.setAttribute('stroke', 'black');
                pathElement.setAttribute('stroke-width', '2');
            } else {
                pathElement.removeAttribute('fill');
                pathElement.removeAttribute('stroke');
                pathElement.removeAttribute('stroke-width');
            }
        });
    });
});
