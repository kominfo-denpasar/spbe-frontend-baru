document.addEventListener("DOMContentLoaded", () => {
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            const content = parent.querySelector(".accordion-content");
            const icon = btn.querySelector(".accordion-icon");

            const isOpen = !content.classList.contains("hidden");

            // Tutup semua
            document.querySelectorAll(".accordion-content").forEach(item => {
                item.classList.add("hidden");
            });

            document.querySelectorAll(".accordion-icon").forEach(i => {
                i.textContent = "+";
            });

            // Buka jika sebelumnya tertutup
            if (!isOpen) {
                content.classList.remove("hidden");
                icon.textContent = "−";
            }
        });
    });
});
