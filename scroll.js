document.addEventListener("DOMContentLoaded", function() {
    // Options for the IntersectionObserver
    var options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.5 // Trigger when 50% of the .col-container is visible
    };

    // Callback function to handle intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('intersecting');
            } else {
                entry.target.classList.remove('intersecting');
            }
        });
    }

    // Create a new IntersectionObserver with the callback function and options
    var observer = new IntersectionObserver(handleIntersection, options);

    // Get the .col-container element
    var colContainer = document.querySelector(".col-container");

    // Observe the .col-container element
    observer.observe(colContainer);
});
