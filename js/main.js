// ==========================================
// CONFIGURACIÓN
// ==========================================
const TESTS = {
    'sociales-p1': 'https://docs.google.com/forms/d/e/1FAIpQLSfRlxJGVJYT3SheduibwKf7AndG-mPG7mhQTzUuM50MxxZ5Ng/viewform?usp=header',
    'sociales-p2': 'https://docs.google.com/forms/d/e/1FAIpQLSfawD-AgSXccFiRsLZwAQuTPlht_RnFRbq10RvWhHgSQMEeYA/viewform?usp=header',
    'sociales-p3': 'https://docs.google.com/forms/d/e/1FAIpQLScXyOICx3gd4NnvD2TQ9e5HREsIyjw9eh6rL1CMz_eG47_Xew/viewform?usp=header',
    'sociales-p4': 'https://docs.google.com/forms/d/e/1FAIpQLSdB1sn_uvqWpl6GOj9NRw5pZkDhZfeFNKvp8bLBzAQx8I0EOA/viewform?usp=header'
};

// ==========================================
// ELEMENTOS DOM
// ==========================================
const modal = document.getElementById('testModal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.getElementById('closeModal');
const testFrame = document.getElementById('testFrame');
const testButtons = document.querySelectorAll('.test-item');

// ==========================================
// FUNCIONES
// ==========================================

/**
 * Abre el modal con el test seleccionado
 */
function openModal(testId) {
    const url = TESTS[testId];
    if (!url) return;
    
    testFrame.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal
 */
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        testFrame.src = '';
    }, 300);
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Abrir modal desde botones de test
testButtons.forEach(button => {
    button.addEventListener('click', () => {
        const testId = button.getAttribute('data-test');
        openModal(testId);
    });
});

// Cerrar modal
closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevenir cierre al hacer clic en el contenido
modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// ==========================================
// INICIALIZACIÓN
// ==========================================
console.log('✓ Sparta Academy inicializado correctamente');
