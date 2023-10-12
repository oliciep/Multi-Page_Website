const options = document.querySelectorAll(".option");
const textbox = document.querySelector(".textbox");
let activeOption = null;

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        // Hide the textbox
        setTimeout(() => {
            textbox.style.opacity = 0;
        }, 0);
        if (activeOption) {
            activeOption.classList.remove("active");
        }
        // Set the unique text for the selected option
        const texts = [
            "This is the content for Option 1.",
            "This is the content for Option 2.",
            "This is the content for Option 3.",
            "This is the content for Option 4."
        ];

        // Show the selected text
        setTimeout(() => {
            textbox.innerHTML = texts[index];
            textbox.style.opacity = 1;
        }, 500);
        option.classList.add("active");

        // Store the active option for future reference
        activeOption = option;
    });
});