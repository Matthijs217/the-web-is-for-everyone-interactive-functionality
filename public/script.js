document.addEventListener("DOMContentLoaded", function() {
    const successMessage = document.querySelector(".succes-box");

    if (successMessage) {
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 4);

        setTimeout(() => {
            successMessage.classList.add('fade-out');
        }, 2400);
    }
});