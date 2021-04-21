(function() {

    "use strict";
    window.addEventListener("load", initialize);

    /**
     * Contains all of the eventListeners for interactivity.
     */
    function initialize() {

        let links = document.querySelectorAll("#projects li");
        links.forEach(link => {
            link.addEventListener("mouseover", () => {
                openHover(link.innerHTML);
            });
        });
   
    }

    function openHover(text) {
        let allHidden = document.querySelectorAll("aside p");
        allHidden.forEach(hidden => {
            hidden.classList.add("hidden");
        })

        text = text.replace(" ", "-").replace(" ", "-");
        let newText = document.querySelector("#"+text);
        newText.classList.remove("hidden");
    }
})();
