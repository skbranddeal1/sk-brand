/* =====================================================
   SK BRAND - COMPLETE JAVASCRIPT
   Works with the existing index.html and style.css
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton = document.getElementById("mobileMenuButton");

const mainNavigation = document.getElementById("mainNavigation");


if (mobileMenuButton && mainNavigation) {

    mobileMenuButton.addEventListener("click", function () {

        mainNavigation.classList.toggle("active");

        const icon = mobileMenuButton.querySelector("i");

        if (mainNavigation.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (mainNavigation) {

            mainNavigation.classList.remove("active");

        }

        if (mobileMenuButton) {

            const icon = mobileMenuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


/* =====================================================
   PRODUCT SEARCH
===================================================== */

const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

const noProductsMessage =
    document.getElementById("noProductsMessage");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase().trim();

        let foundProducts = 0;


        productCards.forEach(function (product) {

            const productName =
                product.getAttribute("data-product-name")
                .toLowerCase();

            const productCategory =
                product.getAttribute("data-category")
                .toLowerCase();

            const productContent =
                product.textContent.toLowerCase();


            if (

                productName.includes(searchText) ||

                productCategory.includes(searchText) ||

                productContent.includes(searchText)

            ) {

                product.style.display = "block";

                foundProducts++;

            } else {

                product.style.display = "none";

            }

        });


        if (foundProducts === 0 && searchText !== "") {

            noProductsMessage.style.display = "block";

        } else {

            noProductsMessage.style.display = "none";

        }

    });

}


/* =====================================================
   SEARCH FORM
===================================================== */

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchText =
            searchInput.value.trim();


        if (searchText !== "") {

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

}


/* =====================================================
   PRODUCT CATEGORY FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.getAttribute("data-filter");


        let foundProducts = 0;


        productCards.forEach(function (product) {

            const productCategory =
                product.getAttribute("data-category");


            if (

                selectedCategory === "all" ||

                productCategory === selectedCategory

            ) {

                product.style.display = "block";

                foundProducts++;

            } else {

                product.style.display = "none";

            }

        });


        if (foundProducts === 0) {

            noProductsMessage.style.display = "block";

        } else {

            noProductsMessage.style.display = "none";

        }


        if (searchInput) {

            searchInput.value = "";

        }

    });

});


/* =====================================================
   CATEGORY CARDS
===================================================== */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function (categoryCard) {

    categoryCard.addEventListener("click", function () {


        const selectedCategory =
            categoryCard.getAttribute("data-category");


        filterButtons.forEach(function (button) {

            button.classList.remove("active");


            if (

                button.getAttribute("data-filter")
                === selectedCategory

            ) {

                button.classList.add("active");

            }

        });


        productCards.forEach(function (product) {

            const productCategory =
                product.getAttribute("data-category");


            if (productCategory === selectedCategory) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* =====================================================
   CLEAR SEARCH WHEN CLICKING PRODUCTS
===================================================== */

const productsLink =
    document.querySelector('a[href="#products"]');


if (productsLink) {

    productsLink.addEventListener("click", function () {

        if (searchInput) {

            searchInput.value = "";

        }

        productCards.forEach(function (product) {

            product.style.display = "block";

        });


        filterButtons.forEach(function (button) {

            button.classList.remove("active");

        });


        const allButton =
            document.querySelector(
                '.filter-button[data-filter="all"]'
            );


        if (allButton) {

            allButton.classList.add("active");

        }

    });

}


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

window.addEventListener("scroll", function () {

    const sections =
        document.querySelectorAll("section[id]");


    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (

            scrollPosition >= sectionTop &&

            scrollPosition < sectionTop + sectionHeight

        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");


                const activeLink =
                    document.querySelector(
                        '.nav-link[href="#' + sectionId + '"]'
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            });

        }

    });

});


/* =====================================================
   PAGE LOADED
===================================================== */

console.log("SK BRAND Website JavaScript Loaded Successfully!");