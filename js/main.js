// ========================================
// CONFIGURACIÓN DE TESTS
// ========================================
const testsConfig = {
    'sociales-p1': 'https://docs.google.com/forms/d/e/1FAIpQLSfRlxJGVJYT3SheduibwKf7AndG-mPG7mhQTzUuM50MxxZ5Ng/viewform?usp=header',
    'sociales-p2': 'https://docs.google.com/forms/d/e/1FAIpQLSfawD-AgSXccFiRsLZwAQuTPlht_RnFRbq10RvWhHgSQMEeYA/viewform?usp=header',
    'sociales-p3': 'https://docs.google.com/forms/d/e/1FAIpQLScXyOICx3gd4NnvD2TQ9e5HREsIyjw9eh6rL1CMz_eG47_Xew/viewform?usp=header',
    'sociales-p4': 'https://docs.google.com/forms/d/e/1FAIpQLSdB1sn_uvqWpl6GOj9NRw5pZkDhZfeFNKvp8bLBzAQx8I0EOA/viewform?usp=header'
};

// ========================================
// ELEMENTOS DEL DOM
// ========================================
const modal = document.getElementById('testModal');
const closeModalBtn = document.getElementById('closeModal');
const testFrame = document.getElementById('testFrame');
const testButtons = document.querySelectorAll('.test-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// ========================================
// FUNCIONES PRINCIPALES
// ========================================

/**
 * Abre el modal con el test seleccionado
 * @param {string} testId - ID del test a mostrar
 */
function openModal(testId) {
    const testUrl = testsConfig[testId];
    
    if (testUrl) {
        // Configurar el iframe con la URL del test
        testFrame.src = testUrl;
        
        // Mostrar el modal con animación
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        
        // Reproducir sonido (opcional)
        playSound('open');
    } else {
        console.error('Test no encontrado:', testId);
        showNotification('Test no disponible', 'error');
    }
}

/**
 * Cierra el modal
 */
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
    
    // Limpiar el iframe después de la animación
    setTimeout(() => {
        testFrame.src = '';
    }, 300);
    
    // Reproducir sonido (opcional)
    playSound('close');
}

/**
 * Reproduce un efecto de sonido (opcional)
 * @param {string} type - Tipo de sonido ('open' o 'close')
 */
function playSound(type) {
    // Puedes agregar sonidos si lo deseas
    // const audio = new Audio(`sounds/${type}.mp3`);
    // audio.play().catch(e => console.log('Audio no disponible'));
}

/**
 * Muestra una notificación (opcional)
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo de notificación ('success', 'error', 'info')
 */
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-gold);
        color: var(--color-black);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Añade efectos de hover a las tarjetas
 */
function addCardEffects() {
    const cards = document.querySelectorAll('.test-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Inicializa efectos de parallax para las partículas
 */
function initParallax() {
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

/**
 * Añade animaciones de scroll reveal
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.test-card, .intro-section');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

// Botones de tests
testButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const testId = this.getAttribute('data-test');
        openModal(testId);
    });
});

// Botón de cerrar modal
closeModalBtn.addEventListener('click', closeModal);

// Cerrar modal al hacer clic en el overlay
modalOverlay.addEventListener('click', closeModal);

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevenir cierre accidental al hacer clic dentro del modal
document.querySelector('.modal-container').addEventListener('click', (e) => {
    e.stopPropagation();
});

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Sparta Academy - Simuladores cargados correctamente');
    
    // Inicializar efectos
    addCardEffects();
    initParallax();
    initScrollReveal();
    
    // Mensaje de bienvenida
    setTimeout(() => {
        console.log('💪 ¡Listo para practicar! Selecciona un test para comenzar.');
    }, 1000);
});

// ========================================
// OPTIMIZACIONES DE RENDIMIENTO
// ========================================

// Throttle para eventos de scroll/mouse
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar throttle a eventos costosos
const throttledParallax = throttle(initParallax, 100);

// ========================================
// MANEJO DE ERRORES
// ========================================
window.addEventListener('error', (e) => {
    console.error('Error detectado:', e.error);
});

// Verificar disponibilidad de iframe
testFrame.addEventListener('error', () => {
    showNotification('Error al cargar el formulario. Por favor, intenta de nuevo.', 'error');
    closeModal();
});
