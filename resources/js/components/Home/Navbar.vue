<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container mx-auto px-4">
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex justify-between items-center py-4">
        <!-- Logo -->
        <a href="/" class="navbar-brand">
          <img 
            src="/assets/images/logo/neema-logo.png"
            alt="Neema Tradings Logo" 
            class="navbar-logo" />
          <!-- <div class="brand-text">
            <span class="brand-name">Neema Tradings</span>
            <span class="brand-tagline">Your Reliably Idea</span>
          </div> -->
        </a>

        <!-- Navigation Links -->
        <div class="nav-links">
          <a href="#home" @click.prevent="scrollTo('home')" class="nav-item">
            <span>Home</span>
          </a>
          <a href="#about" @click.prevent="scrollTo('about')" class="nav-item">
            <span>About</span>
          </a>
          <a href="#services" @click.prevent="scrollTo('services')" class="nav-item">
            <span>Services</span>
          </a>
          <a href="#why" @click.prevent="scrollTo('why')" class="nav-item">
            <span>Why Choose Us</span>
          </a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="nav-item nav-item-cta">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="lg:hidden flex justify-between items-center py-3">
        <!-- Mobile Logo -->
        <a href="/" class="navbar-brand-mobile">
          <img 
            src="/assets/images/logo/neema-logo.png"
            alt="Neema Tradings Logo" 
            class="navbar-logo-mobile" />
          <div class="brand-text-mobile">
            <span class="brand-name-mobile">Neema Tradings</span>
          </div>
        </a>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="mobile-menu-button" aria-label="Toggle menu">
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu">
          <div class="mobile-menu" @click.stop>
            <div class="mobile-menu-header">
              <div class="mobile-brand">
                <img 
                  src="/assets/images/logo/neema-logo.png"
                  alt="Neema Tradings Logo" 
                  class="mobile-menu-logo" />
                <div>
                  <div class="mobile-brand-name">Neema Tradings</div>
                  <div class="mobile-brand-tagline">Your Reliably Idea</div>
                </div>
              </div>
              <button @click="closeMobileMenu" class="mobile-close-button">
                <font-awesome-icon :icon="['fas', 'times']" />
              </button>
            </div>

            <div class="mobile-menu-content">
              <a href="#home" @click="handleMobileClick('home')" class="mobile-nav-item">
                <font-awesome-icon :icon="['fas', 'home']" class="mobile-nav-icon" />
                <span>Home</span>
              </a>
              <a href="#about" @click="handleMobileClick('about')" class="mobile-nav-item">
                <font-awesome-icon :icon="['fas', 'user-tie']" class="mobile-nav-icon" />
                <span>About Us</span>
              </a>
              <a href="#services" @click="handleMobileClick('services')" class="mobile-nav-item">
                <font-awesome-icon :icon="['fas', 'briefcase']" class="mobile-nav-icon" />
                <span>Our Services</span>
              </a>
              <a href="#why" @click="handleMobileClick('why')" class="mobile-nav-item">
                <font-awesome-icon :icon="['fas', 'star']" class="mobile-nav-icon" />
                <span>Why Choose Us</span>
              </a>
              <a href="#contact" @click="handleMobileClick('contact')" class="mobile-nav-item mobile-nav-item-highlight">
                <font-awesome-icon :icon="['fas', 'envelope']" class="mobile-nav-icon" />
                <span>Contact Us</span>
              </a>
            </div>

            <div class="mobile-menu-footer">
              <div class="mobile-contact-info">
                <div class="mobile-contact-item">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <a href="mailto:nomiemotso@gmail.com">nomiemotso@gmail.com</a>
                </div>
                <div class="mobile-contact-item">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  <a href="tel:+27738114652">+27 73 811 4652</a>
                </div>
              </div>
              <div class="mobile-social">
                <a href="https://web.facebook.com" class="mobile-social-link">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="https://www.instagram.com" class="mobile-social-link">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="https://www.linkedin.com" class="mobile-social-link">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
                <a href="https://wa.me/27738114652" class="mobile-social-link">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    seo: Object,
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      // Prevent body scroll when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    handleMobileClick(section) {
      this.closeMobileMenu();
      setTimeout(() => {
        this.scrollTo(section);
      }, 300);
    },
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* Main Navbar */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Desktop Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: translateX(5px);
}

.navbar-logo {
  height: 50px;
  width: auto;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #303032;
  line-height: 1;
}

.brand-tagline {
  font-size: 0.75rem;
  color: #9d9a6f;
  font-style: italic;
  font-weight: 500;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  padding: 10px 20px;
  color: #303032;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item span {
  position: relative;
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 20px;
  right: 20px;
  height: 2px;
  background: #9d9a6f;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-item:hover {
  color: #9d9a6f;
}

.nav-item:hover::before {
  transform: scaleX(1);
}

.nav-item-cta {
  background: #9d9a6f;
  color: #ffffff;
  font-weight: 600;
  margin-left: 8px;
}

.nav-item-cta::before {
  display: none;
}

.nav-item-cta:hover {
  background: #b8b588;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(157, 154, 111, 0.3);
}

/* Mobile Brand */
.navbar-brand-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.navbar-logo-mobile {
  height: 40px;
  width: auto;
}

.brand-text-mobile {
  display: flex;
  flex-direction: column;
}

.brand-name-mobile {
  font-size: 1.1rem;
  font-weight: 700;
  color: #303032;
  line-height: 1;
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: #303032;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* Mobile Menu Header */
.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 2px solid #9d9a6f;
  background: #303032;
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-menu-logo {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
}

.mobile-brand-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.mobile-brand-tagline {
  font-size: 0.75rem;
  color: #9d9a6f;
  font-style: italic;
}

.mobile-close-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

/* Mobile Menu Content */
.mobile-menu-content {
  flex: 1;
  padding: 24px 0;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  color: #303032;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.mobile-nav-item:hover {
  background: rgba(157, 154, 111, 0.1);
  border-left-color: #9d9a6f;
  padding-left: 32px;
}

.mobile-nav-icon {
  width: 24px;
  color: #9d9a6f;
  font-size: 1.1rem;
}

.mobile-nav-item-highlight {
  margin: 8px 24px;
  background: #9d9a6f;
  color: #ffffff;
  border-radius: 12px;
  border-left: none;
}

.mobile-nav-item-highlight:hover {
  background: #b8b588;
  padding-left: 24px;
  transform: translateX(4px);
}

.mobile-nav-item-highlight .mobile-nav-icon {
  color: #ffffff;
}

/* Mobile Menu Footer */
.mobile-menu-footer {
  padding: 24px;
  border-top: 1px solid rgba(157, 154, 111, 0.2);
  background: rgba(157, 154, 111, 0.05);
}

.mobile-contact-info {
  margin-bottom: 20px;
}

.mobile-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #303032;
}

.mobile-contact-item svg {
  color: #9d9a6f;
  width: 16px;
}

.mobile-contact-item a {
  color: #303032;
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-contact-item a:hover {
  color: #9d9a6f;
}

.mobile-social {
  display: flex;
  gap: 12px;
}

.mobile-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9d9a6f;
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.mobile-social-link:hover {
  background: #303032;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(48, 48, 50, 0.3);
}

/* Mobile Menu Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu,
.mobile-menu-leave-active .mobile-menu {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu,
.mobile-menu-leave-to .mobile-menu {
  transform: translateX(100%);
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .mobile-menu {
    width: 100%;
    max-width: none;
  }

  .navbar-logo-mobile {
    height: 35px;
  }

  .brand-name-mobile {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .mobile-menu-header {
    padding: 20px 16px;
  }

  .mobile-menu-content {
    padding: 16px 0;
  }

  .mobile-nav-item {
    padding: 14px 16px;
    font-size: 0.95rem;
  }

  .mobile-menu-footer {
    padding: 20px 16px;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>