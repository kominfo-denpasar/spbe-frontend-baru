let panelOpen = false;
let lang = localStorage.getItem("access_lang") || "id";
let fontSize = parseInt(localStorage.getItem("font_size")) || 100;

const text = {
    id: {
        voiceMode: "Mode Suara",
        increaseText: "Perbesar Teks",
        decreaseText: "Perkecil Teks",
        grayscale: "Skala Abu-Abu",
        highContrast: "Kontras Tinggi",
        negativeContrast: "Latar Gelap",
        lightBackground: "Latar Terang",
        readableFont: "Tulisan Mudah Dibaca",
        underlineLinks: "Garis Bawah Tautan",
        justifyText: "Rata Tulisan",
        reset: "Atur Ulang",
    },
    en: {
        voiceMode: "Voice Mode",
        increaseText: "Increase Text",
        decreaseText: "Decrease Text",
        grayscale: "Grayscale",
        highContrast: "High Contrast",
        negativeContrast: "Dark Mode",
        lightBackground: "Light Background",
        readableFont: "Readable Font",
        underlineLinks: "Underline Links",
        justifyText: "Justify Text",
        reset: "Reset",
    }
};

export async function loadDisabilitas() {
    const container = document.getElementById("disabilitas");
    if (!container) return;

    const res = await fetch("/src/components/disabilitas.html");
    container.innerHTML = await res.text();

    initDisabilitas();
}

function initDisabilitas() {
    const panel = document.getElementById("accessibilityPanel");
    const btn = document.getElementById("accessibilityBtn");
    const closeBtn = document.getElementById("closeAccessibilityPanel");

    btn.onclick = () => {
        panelOpen = !panelOpen;
        panel.classList.toggle("hidden", !panelOpen);
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            panelOpen = false;
            panel.classList.add("hidden");
        };
    }

    document.getElementById("langID").onclick = () => setLanguage("id");
    document.getElementById("langEN").onclick = () => setLanguage("en");

    document.documentElement.style.fontSize = fontSize + "%";

    updateLangUI();
    renderText();
}

/* ================= BAHASA ================= */

function setLanguage(newLang) {
    lang = newLang;
    localStorage.setItem("access_lang", lang);
    updateLangUI();
    renderText();
}

function updateLangUI() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("bg-white", "text-black", "font-semibold");
        btn.classList.add("text-gray-600");
    });

    const active =
        lang === "id"
            ? document.getElementById("langID")
            : document.getElementById("langEN");

    active.classList.add("bg-white", "text-black", "font-semibold");
    active.classList.remove("text-gray-600");
}

function renderText() {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.innerText = text[lang][el.dataset.key];
    });

    const title = document.getElementById("panelTitle");
    if (title) {
        title.innerText = lang === "id" ? "Sarana" : "Accessibility";
    }
}

window.toggleMenuActive = (el) => {
    el.classList.toggle("font-bold");
    el.classList.toggle("text-black");
};


window.increaseFont = () => {
    fontSize = Math.min(200, fontSize + 10);
    document.documentElement.style.fontSize = fontSize + "%";
    localStorage.setItem("font_size", fontSize);
};

window.decreaseFont = () => {
    fontSize = Math.max(60, fontSize - 10);
    document.documentElement.style.fontSize = fontSize + "%";
    localStorage.setItem("font_size", fontSize);
};

window.toggleVoiceMode = () => {
    alert("Voice mode aktif (Text-to-Speech dapat dikembangkan)");
};

window.toggleGrayScale = () => {
    document.documentElement.classList.toggle("grayscale");
};

window.toggleHighContrast = () => {
    document.documentElement.classList.toggle("contrast-150");
    document.documentElement.classList.toggle("brightness-125");
};

window.enableDarkMode = () => {
    document.documentElement.classList.add("bg-black", "text-white");
};

window.enableLightMode = () => {
    document.documentElement.classList.remove("bg-black", "text-white");
};

window.toggleReadableFont = () => {
    document.documentElement.classList.toggle("font-sans");
};

window.toggleUnderlineLinks = () => {
    document.documentElement.classList.toggle("underline");
};

window.toggleJustifyText = () => {
    document.documentElement.classList.toggle("text-justify");
};

window.resetAll = () => {
    localStorage.clear();
    location.reload();
};


document.addEventListener("click", (e) => {
    const panel = document.getElementById("accessibilityPanel");
    const btn = document.getElementById("accessibilityBtn");

    if (!panel || panel.classList.contains("hidden")) return;

    if (!panel.contains(e.target) && !btn.contains(e.target)) {
        panelOpen = false;
        panel.classList.add("hidden");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const panel = document.getElementById("accessibilityPanel");
        if (panel && !panel.classList.contains("hidden")) {
            panelOpen = false;
            panel.classList.add("hidden");
        }
    }
});
