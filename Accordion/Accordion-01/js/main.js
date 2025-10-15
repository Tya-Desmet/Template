
console.log("Plugin lancé");

let btns = document.querySelectorAll(".btn"); // tous les boutons

btns.forEach(element => {
    element.addEventListener("click", () => {
        const content = element.nextElementSibling;
        const iconsplus = element.querySelector(".iconplus");
        const iconminus = element.querySelector(".iconminus")

            // Toggle contenu
    content.style.display = content.style.display === "block" ? "none" : "block";

    // Toggle icône
    iconsplus.hidden = !iconsplus.hidden;
    iconminus.hidden = !iconminus.hidden;
    });
});
