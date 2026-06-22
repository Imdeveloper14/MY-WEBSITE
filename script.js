document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Screen Logic
    const loader = document.getElementById('loader');
    const MIN_LOADER_TIME = 5000;

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add('fade-out');
                
                // Trigger initial scroll animations as the loader starts fading out
                setTimeout(initScrollAnimations, 300);

                setTimeout(() => {
                    loader.remove();
                }, 800);
            } else {
                initScrollAnimations();
            }
        }, MIN_LOADER_TIME);
    });

    // 2. Dynamic Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) icon.classList.replace('ph-x', 'ph-list');
            }
        });
    });

    // 4. Navbar Scroll Effect & Auto-Hide Sticky navbar
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 1. Add background transparency class when scrolled past 50px
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 2. Hide/Show navbar based on scroll direction
        const isMobileMenuOpen = navLinks && navLinks.classList.contains('active');

        if (!isMobileMenuOpen) {
            if (scrollTop <= 0) {
                // At the very top, always show navbar
                navbar.classList.remove('navbar-hidden');
            } else if (scrollTop > lastScrollTop && scrollTop > 80) {
                // Scrolling down past navbar height -> hide it
                navbar.classList.add('navbar-hidden');
            } else if (scrollTop < lastScrollTop) {
                // Scrolling up -> show it
                navbar.classList.remove('navbar-hidden');
            }
        }

        lastScrollTop = scrollTop;
    });

    // 5. Scroll Animations (Intersection Observer)
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Stop observing once animated
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // 6. Lightbox Gallery Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeLightbox = document.querySelector('.lightbox-close');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-img');
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');

            lightboxImg.src = imgSrc;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close lightbox on outside click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 7. Form Submission Logic
    const contactForm = document.getElementById('contactForm');
    const quoteSuccess = document.getElementById('quoteSuccess');
    const quoteError = document.getElementById('quoteError');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('quoteSubmitBtn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sending...';
            btn.disabled = true;
            
            if (quoteError) quoteError.classList.add('hidden');
            if (quoteSuccess) quoteSuccess.classList.add('hidden');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    contactForm.style.display = 'none';
                    if (quoteSuccess) quoteSuccess.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        console.error(data.errors.map(err => err.message).join(", "));
                    }
                    if (quoteError) quoteError.classList.remove('hidden');
                }
            } catch (error) {
                console.error("Form submission error", error);
                if (quoteError) quoteError.classList.remove('hidden');
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }

    // 8. Consultation Modal Logic
    const consultBtn = document.getElementById('consultBtn');
    const consultModal = document.getElementById('consultModal');
    const closeConsultModalBtn = document.getElementById('closeConsultModal');
    const cancelConsultBtn = document.getElementById('cancelConsultBtn');
    const consultForm = document.getElementById('consultForm');
    const consultFormWrapper = document.getElementById('consultFormWrapper');
    const consultSuccess = document.getElementById('consultSuccess');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');

    function openConsultModal() {
        consultModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset form state if it was previously submitted
        consultFormWrapper.classList.remove('hidden');
        consultSuccess.classList.add('hidden');
        consultForm.reset();
    }

    function closeConsultModal() {
        consultModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (consultBtn) consultBtn.addEventListener('click', openConsultModal);
    const consultBtnHero = document.getElementById('consultBtnHero');
    if (consultBtnHero) consultBtnHero.addEventListener('click', openConsultModal);
    if (closeConsultModalBtn) closeConsultModalBtn.addEventListener('click', closeConsultModal);
    if (cancelConsultBtn) cancelConsultBtn.addEventListener('click', closeConsultModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeConsultModal);

    if (consultModal) {
        consultModal.addEventListener('click', (e) => {
            if (e.target === consultModal) {
                closeConsultModal();
            }
        });
    }

    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('consultSubmitBtn');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate network request (Here is where you'd connect Formspree/EmailJS)
            setTimeout(() => {
                consultFormWrapper.classList.add('hidden');
                consultSuccess.classList.remove('hidden');
                
                // Reset button for next time
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // 9. Animated Counters Logic
    function initCounters() {
        const counters = document.querySelectorAll('.stat-num-v2');

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const duration = 1500; // 1.5 seconds animation
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);

                        // Ease out quad
                        const easeProgress = progress * (2 - progress);
                        const value = easeProgress * target;

                        if (target % 1 !== 0) {
                            counter.innerText = value.toFixed(1);
                        } else {
                            counter.innerText = Math.floor(value);
                        }

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.2 });

        counters.forEach(c => counterObserver.observe(c));
    }

    initCounters();

    // 10. Scroll Spy for Active Navigation Highlighting
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
                current = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
