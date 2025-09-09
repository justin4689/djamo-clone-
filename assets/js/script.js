// Animation du menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Animation au défilement
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animation des cartes de fonctionnalités au survol
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Animation fluide des ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Fermer le menu mobile si ouvert
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Animation au chargement de la page
window.addEventListener('load', () => {
    // Ajouter une classe pour déclencher les animations
    document.body.classList.add('loaded');
    
    // Animation des cartes de fonctionnalités
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Gestion du formulaire d'inscription (exemple)
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneNumber = signupForm.querySelector('input[type="tel"]').value;
        // Ici, vous pouvez ajouter la logique pour traiter le numéro de téléphone
        console.log('Numéro saisi :', phoneNumber);
        
        // Afficher un message de succès (à personnaliser selon vos besoins)
        alert('Merci ! Un lien de téléchargement vous sera envoyé par SMS.');
    });
}

// Détection du défilement pour l'animation des éléments
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initialisation des animations au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter des écouteurs d'événements pour les interactions utilisateur
    setupEventListeners();
    
    // Vérifier si l'utilisateur est sur mobile
    checkMobileView();
    
    // Détecter les changements de taille d'écran
    window.addEventListener('resize', checkMobileView);
});

function setupEventListeners() {
    // Ajouter des écouteurs d'événements pour les interactions utilisateur
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Animation au clic sur les boutons CTA
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function checkMobileView() {
    // Vérifier si l'utilisateur est sur mobile et ajuster le comportement en conséquence
    if (window.innerWidth <= 768) {
        // Comportement spécifique pour mobile
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

// Gestion du chargement paresseux des images
const lazyLoadImages = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
};

// Appeler la fonction de chargement paresseux après le chargement du DOM
document.addEventListener('DOMContentLoaded', lazyLoadImages);