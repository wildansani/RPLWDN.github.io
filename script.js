// Navigasi Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animasi Link
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Tutup menu mobile saat mengklik link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        links.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Scroll Halus untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Toggle Mode Gelap
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Cek preferensi pengguna yang tersimpan
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', '');
    }
});

// Filter Portofolio
const filterButtons = document.querySelectorAll('.btn-filter');
const portofolioCards = document.querySelectorAll('.portofolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Perbarui tombol aktif
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter proyek
        const filter = button.getAttribute('data-filter');
        
        portofolioCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Tombol Kembali ke Atas
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Tahun di Footer
document.getElementById('tahun').textContent = new Date().getFullYear();

// Validasi Form
const kontakForm = document.querySelector('.kontak-form');

kontakForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = kontakForm.querySelector('input[type="text"]');
    const email = kontakForm.querySelector('input[type="email"]');
    const message = kontakForm.querySelector('textarea');
    
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Harap isi semua field!');
    } else {
        alert('Pesan terkirim! (Ini hanya demo)');
        kontakForm.reset();
    }
});

// Animasi Scroll
const scrollElements = document.querySelectorAll('.hidden');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('show');
};

const hideScrollElement = (element) => {
    element.classList.remove('show');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Inisialisasi animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});