
export async function loadNavbar() {
    const container = document.getElementById("navbar");
    if (!container) return;

    try {
        const res = await fetch("/src/components/layout/navbar.html", { cache: "no-store" });
        container.innerHTML = await res.text();

        initNavbar();
    } catch (err) {
        console.error("Navbar gagal dimuat:", err);
    }
}

function initNavbar() {

    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("mobileMenuIcon");

    if (btn && menu && icon) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });
    }

    function setActiveMenuByURL() {
        const path = window.location.pathname;
        const page = path.split("/").pop().replace(".html", "") || "index";

        document.querySelectorAll("[data-page]").forEach(el => {
            el.classList.remove("active-menu");
        });

        document.querySelectorAll(`[data-page="${page}"]`).forEach(el => {
            el.classList.add("active-menu");
        });
    }

    setActiveMenuByURL();

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            if (!menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    let lastScroll = 0;
    const header = document.getElementById("mainHeader");

    if (header) {
        window.addEventListener("scroll", () => {
            let current = window.pageYOffset;

            if (current > lastScroll && current > 80) {
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0)";
            }

            lastScroll = current;
        });
    }
}
