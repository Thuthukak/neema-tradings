<template>
  <footer class="footer-main">
    <div class="container px-4">
      
      <!-- Main Footer Content -->
      <div class="row footer-content">

        <!-- Column 1: Logo & About -->
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div class="footer-brand">
            <img src="/assets/images/logo/neema-logo.png" 
                 alt="Neema Tradings Logo" 
                 class="footer-logo mb-3" 
            />
            <h5 class="footer-tagline">Your Trusted Supply Solution</h5>
            <p class="footer-description">
              Empowering businesses through comprehensive compliance solutions, tender training, and professional business support services.
            </p>
          </div>
          
          <!-- Owner Info -->
          <div class="owner-info">
            <h6 class="owner-name">Nomthandazo Nkosi</h6>
            <p class="owner-title">Founder & Business Consultant</p>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="#about" @click.prevent="scrollTo('about')">About Us</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">Services</a></li>
            <li><a href="#why" @click.prevent="scrollTo('why')">Why Choose Us</a></li>
            <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">Our Services</h5>
          <ul class="footer-links">
            <li><a href="#services" @click.prevent="scrollTo('services')">CSD Registration</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">Company Registration</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">Beneficial Ownership</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">Annual Returns</a></li>
            <li><a href="#services" @click.prevent="scrollTo('services')">Tender Training</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact & Social -->
        <div class="col-lg-3 col-md-6">
          <h5 class="footer-heading">Get In Touch</h5>
          <ul class="contact-list">
            <li class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              </div>
              <span>Johannesburg, South Africa</span>
            </li>
            <li class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <span>
                <a href="tel:+277794997916">+27 79 499 7916</a>
              </span>
            </li>
            <li class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <span>
                <a href="mailto:enquiries@neematradings.co.za">enquiries@neematradings.co.za</a>
              </span>
            </li>
          </ul>

          <!-- Social Media -->
          <div class="social-section">
            <h6 class="social-heading">Follow Us</h6>
            <div class="social-links">
              <a href="https://web.facebook.com" class="social-link" aria-label="Facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
              <a href="https://www.instagram.com" class="social-link" aria-label="Instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.linkedin.com" class="social-link" aria-label="LinkedIn">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://wa.me/27794997916" class="social-link" aria-label="WhatsApp">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Newsletter Section -->
      <div class="newsletter-section">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-3 mb-lg-0">
            <h5 class="newsletter-title">Stay Updated</h5>
            <p class="newsletter-description">Subscribe to our newsletter for business tips, compliance updates, and special offers.</p>
          </div>
          <div class="col-lg-6">
            <form @submit.prevent="subscribe" class="newsletter-form">
              <div class="input-wrapper">
                <input 
                  type="email" 
                  v-model="form.email"
                  class="newsletter-input" 
                  placeholder="Enter your email address"
                  required
                >
                <button class="newsletter-btn" type="submit">
                  <span>Subscribe</span>
                  <font-awesome-icon :icon="['fas', 'paper-plane']" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="container px-4">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p class="copyright-text">
              © {{ currentYear }} Neema Tradings. All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-links-bottom">
              <a href="#" class="bottom-link">Privacy Policy</a>
              <span class="separator">|</span>
              <a href="#" class="bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  seo: Object,
});

const form = ref({
  email: '',
});

const currentYear = ref(new Date().getFullYear());

const subscribe = async () => {
  try {
    const response = await axios.post('/newsletter', form.value);
    console.log(response.data);

    // Show success message
    alert('Thank you for subscribing! You will receive updates on business tips and opportunities.');

    // Reset form
    form.value = {
      email: '',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error subscribing. Please try again.');
  }
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
.footer-main {
  background: linear-gradient(135deg, #303032 0%, #1a1a1c 100%);
  color: #ffffff;
  padding-top: 80px;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
}

.footer-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #9d9a6f, transparent);
}

.footer-content {
  padding-bottom: 60px;
}

/* Brand Section */
.footer-brand {
  margin-bottom: 30px;
}

.footer-logo {
  max-width: 180px;
  height: auto;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  font-size: 1.4rem;
  font-weight: 600;
  color: #9d9a6f;
  margin-bottom: 12px;
  font-style: italic;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Owner Info */
.owner-info {
  padding: 20px;
  background: rgba(157, 154, 111, 0.1);
  border-radius: 12px;
  border-left: 3px solid #9d9a6f;
  margin-top: 20px;
}

.owner-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #9d9a6f;
  margin-bottom: 4px;
}

.owner-title {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
}

/* Headings */
.footer-heading {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12px;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #9d9a6f;
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-links a::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.3s ease;
  color: #9d9a6f;
}

.footer-links a:hover {
  color: #9d9a6f;
  transform: translateX(10px);
}

.footer-links a:hover::before {
  opacity: 1;
  left: -15px;
}

/* Contact List */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.contact-icon {
  width: 36px;
  height: 36px;
  background: rgba(157, 154, 111, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9a6f;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #9d9a6f;
}

/* Social Media */
.social-section {
  margin-top: 30px;
}

.social-heading {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  width: 44px;
  height: 44px;
  background: rgba(157, 154, 111, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9d9a6f;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.social-link:hover {
  background: #9d9a6f;
  color: #303032;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(157, 154, 111, 0.3);
}

/* Newsletter Section */
.newsletter-section {
  background: rgba(157, 154, 111, 0.1);
  padding: 40px;
  border-radius: 16px;
  margin-top: 20px;
  margin-bottom: 60px;
  border: 1px solid rgba(157, 154, 111, 0.2);
}

.newsletter-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
  font-size: 0.95rem;
}

.newsletter-form {
  width: 100%;
}

.input-wrapper {
  display: flex;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px;
  border-radius: 50px;
  border: 1px solid rgba(157, 154, 111, 0.3);
}

.newsletter-input {
  flex: 1;
  padding: 12px 24px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-btn {
  padding: 12px 32px;
  background: #9d9a6f;
  color: #303032;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background: #b8b588;
  transform: translateX(3px);
  box-shadow: 0 6px 20px rgba(157, 154, 111, 0.4);
}

/* Footer Bottom */
.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  padding: 24px 0;
  border-top: 1px solid rgba(157, 154, 111, 0.2);
}

.copyright-text {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0;
  font-size: 0.9rem;
}

.footer-links-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.bottom-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.bottom-link:hover {
  color: #9d9a6f;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 991px) {
  .footer-main {
    padding-top: 60px;
  }

  .footer-content {
    padding-bottom: 40px;
  }

  .newsletter-section {
    padding: 30px 20px;
    margin-bottom: 40px;
  }
}

@media (max-width: 767px) {
  .footer-logo {
    max-width: 150px;
  }

  .footer-tagline {
    font-size: 1.2rem;
  }

  .newsletter-title {
    font-size: 1.3rem;
  }

  .input-wrapper {
    flex-direction: column;
    gap: 12px;
    border-radius: 16px;
    padding: 12px;
  }

  .newsletter-input {
    padding: 14px 20px;
  }

  .newsletter-btn {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    border-radius: 12px;
  }

  .footer-links-bottom {
    flex-direction: column;
    gap: 8px;
  }

  .separator {
    display: none;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 575px) {
  .footer-main {
    padding-top: 50px;
  }

  .newsletter-section {
    padding: 24px 16px;
  }

  .owner-info {
    padding: 16px;
  }
}
</style>