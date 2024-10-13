// Get all the popup triggers, close buttons, and popup elements
const openPopupLinks = document.querySelectorAll('.open-popup');
const closePopupLinks = document.querySelectorAll('.close-popup');
const popups = document.querySelectorAll('.popup-card');
const modalBackground = document.createElement('div');
modalBackground.classList.add('modal-background');
document.body.appendChild(modalBackground);
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

// Function to open the popup
openPopupLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page scroll on link click
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'block';
        modalBackground.style.display = 'block';
        document.body.classList.add('popup-open'); // Disable body scrolling
    });
});

// Function to close the popup
closePopupLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        this.closest('.popup-card').style.display = 'none';
        modalBackground.style.display = 'none';
        document.body.classList.remove('popup-open'); // Enable body scrolling again
    });
});

// Close popup when clicking outside of the popup content
modalBackground.addEventListener('click', function() {
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    modalBackground.style.display = 'none';
    document.body.classList.remove('popup-open'); // Enable body scrolling again
});

// Function to enable scrolling for images in the popup
document.addEventListener('DOMContentLoaded', function () {
    const popupCards = document.querySelectorAll('.popup-card');

    popupCards.forEach((popupCard) => {
        const leftButton = popupCard.querySelector('.left-scroll');
        const rightButton = popupCard.querySelector('.right-scroll');
        const popupImages = popupCard.querySelector('.popup-images');

        // Check if elements exist before adding event listeners
        if (leftButton && rightButton && popupImages) {
            // Scroll left (Previous)
            leftButton.addEventListener('click', function () {
                popupImages.scrollBy({
                    left: -popupImages.clientWidth, // Scroll one image width left
                    behavior: 'smooth'
                });
            });

            // Scroll right (Next)
            rightButton.addEventListener('click', function () {
                popupImages.scrollBy({
                    left: popupImages.clientWidth, // Scroll one image width right
                    behavior: 'smooth'
                });
            });

            // Drag-to-scroll functionality for desktop
            let isDragging = false;
            let startX;
            let scrollLeft;

            popupImages.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.pageX - popupImages.offsetLeft;
                scrollLeft = popupImages.scrollLeft;
                popupImages.style.cursor = 'grabbing';
            });

            popupImages.addEventListener('mouseleave', () => {
                isDragging = false;
            });

            popupImages.addEventListener('mouseup', () => {
                isDragging = false;
                popupImages.style.cursor = 'grab';
            });

            popupImages.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - popupImages.offsetLeft;
                const walk = (x - startX) * 2; // Scroll-fast multiplier
                popupImages.scrollLeft = scrollLeft - walk;
            });

            // Touch support for mobile devices
            popupImages.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].pageX - popupImages.offsetLeft;
                scrollLeft = popupImages.scrollLeft;
            });

            popupImages.addEventListener('touchend', () => {
                isDragging = false;
            });

            popupImages.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const x = e.touches[0].pageX - popupImages.offsetLeft;
                const walk = (x - startX) * 2; // Scroll-fast multiplier
                popupImages.scrollLeft = scrollLeft - walk;
            });
        }
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const leftButton = document.querySelector('.left-scroll2');
    const rightButton = document.querySelector('.right-scroll2');
    const certificateContainer = document.querySelector('.certificate-container');
    

    /// Ensure elements are found
    if (leftButton && rightButton && certificateContainer) {
        console.log("Event listeners attached");

        // Scroll left (Previous)
        leftButton.addEventListener('click', function () {
            console.log("Clicked left")
            certificateContainer.scrollBy({
                left: -certificateContainer.clientWidth, // Scroll one image width left
                behavior: 'smooth'
            });
        });

        // Scroll right (Next)
        rightButton.addEventListener('click', function () {
            console.log("Clicked right")
            certificateContainer.scrollBy({
                left: certificateContainer.clientWidth, // Scroll one image width right
                behavior: 'smooth'
            });
        });

        // Drag-to-scroll functionality for desktop
        let isDragging = false;
        let startX;
        let scrollLeft;

        certificateContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - certificateContainer.offsetLeft;
            scrollLeft = certificateContainer.scrollLeft;
            certificateContainer.style.cursor = 'grabbing';
        });

        certificateContainer.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        certificateContainer.addEventListener('mouseup', () => {
            isDragging = false;
            certificateContainer.style.cursor = 'grab';
        });

        certificateContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - certificateContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast multiplier
            certificateContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch support for mobile devices
        certificateContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - certificateContainer.offsetLeft;
            scrollLeft = certificateContainer.scrollLeft;
        });

        certificateContainer.addEventListener('touchend', () => {
            isDragging = false;
        });

        certificateContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - certificateContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast multiplier
            certificateContainer.scrollLeft = scrollLeft - walk;
        });
    }
});
