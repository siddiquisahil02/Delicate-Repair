document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
  }

  // Fade-in animations
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  fadeElements.forEach((el) => observer.observe(el));

  // FAQs Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      // Close all others
      faqQuestions.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.nextElementSibling.classList.remove("open");
      });
      // Toggle current
      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.nextElementSibling.classList.add("open");
      }
    });
  });

  // Testimonials Carousel
  const track = document.getElementById("testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".t-dot");
  const prevBtn = document.getElementById("t-prev");
  const nextBtn = document.getElementById("t-next");
  
  if (track && slides.length > 0) {
    let currentSlide = 0;
    
    function updateCarousel(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      currentSlide = index;
    }
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        const index = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateCarousel(index);
      });
      nextBtn.addEventListener("click", () => {
        const index = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        updateCarousel(index);
      });
    }
    
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => updateCarousel(i));
    });
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form-el") || document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");
  if (contactForm && successMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simulate form submission
      contactForm.reset();
      successMsg.classList.add("show");
      setTimeout(() => {
        successMsg.classList.remove("show");
      }, 5000);
    });
  }
});
