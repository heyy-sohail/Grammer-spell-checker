document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const loading = document.getElementById("loading");

    if (form) {
        form.addEventListener("submit", () => {
            loading.style.display = "block";
        });
    }

    const copyBtn = document.getElementById("copyBtn");
    const correctedText = document.getElementById("correctedText");
    const copyMsg = document.getElementById("copyMsg");

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            const text = correctedText.innerText;
            navigator.clipboard.writeText(text).then(() => {
                copyMsg.style.display = "block";
                setTimeout(() => {
                    copyMsg.style.display = "none";
                }, 2000);
            });
        });
    }
});
