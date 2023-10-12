const options = document.querySelectorAll(".option");
const textboxes = document.querySelectorAll(".textbox");

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        // Hide all textboxes
        textboxes.forEach((textbox) => {
            textbox.style.opacity = 0;
        });

        // Show the selected textbox with fading effect
        textboxes[index].style.opacity = 1;
    });
});