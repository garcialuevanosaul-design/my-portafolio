document.addEventListener('DOMContentLoaded', () =>{
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to set the active tab
    function setActibeTab(targetId){
        // Hide all the content & desactivate the buttons

        // Loop over each content
        tabContents.forEach(content => {
            content.classList.remove('active-content'); // Desactivate
        });

        // Loop over each button
        tabButtons.forEach(btn => {
            btn.classList.remove('active-btn') // Desactivate
        });

        // Find the correct content & buttons
        const targetContent = document.getElementById(targetId);
        const targetButton = document.querySelector(`.tab-btn[data-target="${targetId}"]`);

        // Only activate the selected button & content
        if(targetContent && targetButton){
            targetContent.classList.add('active-content');
            targetButton.classList.add('active-btn');
        }
    }

        // Add 'click listeners' to the buttons
    // Loop over each button
    tabButtons.forEach(button =>{
        // attach a click listener to each button
        button.addEventListener('click', () => {
            // caññ back the function only when a button is clicked
            const targetId = button.getAttribute('data-target');
            setActibeTab(targetId);
        });
    });

    // Set as default the first tab 
    setActibeTab('cl1')
});


/**
     * FUNCTION: openModal
     * This function runs when you click on a certificate card (the div with class 'card-layTwo').
     * * @param {HTMLElement} element - The specific <div> you clicked on. 
     * We pass 'this' from HTML to know exactly which card triggered the click.
     */
    function openModal(element) {
        
        // 1. SEARCH FOR THE IMAGE
        // We look inside the clicked <div> ('element') to find the first <img> tag.
        const imgTag = element.querySelector('img');
        
        // Safety Check: If for some reason there is no image, we stop here to avoid errors.
        if (!imgTag) return;

        // 2. GET THE MODAL ELEMENTS
        // We grab the main dark background container (the modal) by its ID.
        const modal = document.getElementById('imageModal');
        // We grab the empty image tag inside the modal where we will show the certificate.
        const modalImg = document.getElementById('modalImage');

        // 3. COPY THE IMAGE SOURCE
        // We take the URL (src) from the small card image and give it to the big modal image.
        modalImg.src = imgTag.src;

        // 4. SHOW THE MODAL
        // The modal is hidden by default with the class 'hidden'.
        // We remove 'hidden' to make it visible.
        modal.classList.remove('hidden');
        // We add 'flex' to activate Flexbox, which centers the image on the screen.
        modal.classList.add('flex');
    }

    /**
     * FUNCTION: closeModal
     * This function runs when you click the "X" button or the dark background.
     */
    function closeModal() {
        // 1. GET THE MODAL
        const modal = document.getElementById('imageModal');
        
        // 2. HIDE THE MODAL
        // We add 'hidden' back to make it disappear.
        modal.classList.add('hidden');
        // We remove 'flex' to stop the layout calculation.
        modal.classList.remove('flex');
        
        // 3. CLEAN UP (Optional but recommended)
        // We remove the image source so the next time you open a modal, 
        // it doesn't briefly show the previous image while loading the new one.
        document.getElementById('modalImage').src = '';
    }

    /**
     * EVENT LISTENER: Keyboard Support
     * This allows the user to close the modal by pressing the 'Escape' (Esc) key.
     */
    document.addEventListener('keydown', function(event) {
        // We check if the key pressed was "Escape"
        if (event.key === "Escape") {
            // If yes, we trigger the close function
            closeModal();
        }
    });

