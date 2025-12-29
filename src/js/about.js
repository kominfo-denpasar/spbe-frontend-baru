const imageTrigger = document.getElementById('unsurSpbeImage');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

imageTrigger.addEventListener('click', () => {
    const img = imageTrigger.querySelector('img');
    modalImage.src = img.src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});
