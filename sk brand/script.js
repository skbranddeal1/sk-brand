// ================================
// SK BRAND - SCRIPT.JS
// ================================

// Dark Mode

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Search Box
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    let filter = this.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.classList.remove("highlight");

        if (filter !== "" && card.innerText.toLowerCase().includes(filter)) {

            card.classList.add("highlight");

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

});
// Smooth Scroll

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        let href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

console.log("SK Brand Website Loaded Successfully");