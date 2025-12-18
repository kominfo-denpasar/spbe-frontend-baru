export async function loadFooter() {
    const container = document.getElementById("footer");
    if (!container) return;

    try {
        const res = await fetch("/src/components/layout/footer.html", { cache: "no-store" });
        container.innerHTML = await res.text();

        initFooter();
    } catch (err) {
        console.error("Footer gagal dimuat:", err);
    }
}