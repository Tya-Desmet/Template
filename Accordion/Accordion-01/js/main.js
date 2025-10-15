
//select all btns 
const btns = document.querySelectorAll(".btn");


// for all btn do this
btns.forEach(btn => {
    //add event on clic 
    btn.addEventListener("click", () => {
        //for the next element after element. (here its div accordion-content)
        const content = btn.nextElementSibling;


        // Toggle content (add and remove class css .active)
        content.classList.toggle("active");

        // Toggle icônes (add and remove .open in css.)
        btn.classList.toggle("open");
    });
});
