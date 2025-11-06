// Configuración de tests
const TESTS = {
    'sociales-p1': 'https://docs.google.com/forms/d/e/1FAIpQLSfRlxJGVJYT3SheduibwKf7AndG-mPG7mhQTzUuM50MxxZ5Ng/viewform?usp=header',
    'sociales-p2': 'https://docs.google.com/forms/d/e/1FAIpQLSfawD-AgSXccFiRsLZwAQuTPlht_RnFRbq10RvWhHgSQMEeYA/viewform?usp=header',
    'sociales-p3': 'https://docs.google.com/forms/d/e/1FAIpQLScXyOICx3gd4NnvD2TQ9e5HREsIyjw9eh6rL1CMz_eG47_Xew/viewform?usp=header',
    'sociales-p4': 'https://docs.google.com/forms/d/e/1FAIpQLSdB1sn_uvqWpl6GOj9NRw5pZkDhZfeFNKvp8bLBzAQx8I0EOA/viewform?usp=header'
};

// Elementos
const modal = document.getElementById('testModal');
const closeBtn = document.getElementById('closeModal');
const testFrame = document.getElementById('testFrame');
const testCards = document.querySelectorAll('.test-card');
const modalOverlay = document.querySelector('.modal-overlay');

// Abrir modal
function openModal(testId) {
    const url = TESTS[testId];
    if (!url) return;
    
    testFrame.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => testFrame.src = '', 300);
}

// Event listeners
testCards.forEach(card => {
    card.addEventListener('click', () => {
        const testId = card.getAttribute('data-test');
        openModal(testId);
    });
});

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

console.log('✓ Sparta Academy cargado correctamente');
