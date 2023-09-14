// Mobile 

const burgerIcon = document.querySelector("#burgerItems");
const navbarLinks = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarLinks.classList.toggle("is-active");
});

// tabs

const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll(".tab-content > div");

console.log(tabs);
console.log(tabContentBoxes);

tabs.forEach( (tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("is-active"));
        tab.classList.add("is-active");

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute("id") === target){
                box.classList.remove("is-hidden");
            } else {
                box.classList.add("is-hidden");
            }
        })
    })
})

// modals

const signUpButton = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signUpButton.addEventListener("click", () => {
    modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
});

