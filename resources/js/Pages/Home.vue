<template>
  <Layout :seo="seo">
    <Head>
      <title>{{ seo.title }}</title>
      <meta name="description" :content="seo.description" />
      <meta name="keywords" :content="seo.keywords" />
      <link rel="canonical" :href="seo.canonical_url" />
     
      <!-- Open Graph -->
      <meta property="og:title" :content="seo.og_title" />
      <meta property="og:description" :content="seo.og_description" />
      <meta property="og:image" :content="seo.og_image" />
      <meta property="og:url" :content="seo.og_url" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Neema Tradings" />
     
      <!-- Twitter Card -->
      <meta name="twitter:card" :content="seo.twitter_card" />
      <meta name="twitter:title" :content="seo.og_title" />
      <meta name="twitter:description" :content="seo.og_description" />
      <meta name="twitter:image" :content="seo.og_image" />
     
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#303032" />
    </Head>
   
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Neema Tradings
          </h1>
          <p class="hero-subtitle">Your Trusted Supply Solution</p>
          <p class="hero-description">
            At Neema Tradings, we provide comprehensive business solutions to help entrepreneurs and companies navigate compliance, secure funding opportunities, and build sustainable growth strategies.
          </p>
          <div class="hero-buttons">
            <button class="btn-primary" @click="openWhatsApp">
              <div class="d-flex justify-content-between align-items-center gap-2">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              <div>Get Started</div>
              </div>
            </button>
            <button class="btn-secondary" @click="scrollToServices">Our Services</button>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToAbout">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="image-wrapper">
              <img :src="ownerImage" alt="Nomthandazo Nkosi - Neema Tradings" class="owner-img">
              <div class="image-decoration"></div>
            </div>
          </div>
          <div class="about-content">
            <div class="section-label">About Us</div>
            <h2 class="section-title">Let Me Help You Help Your Business!</h2>
            <p class="about-text">
              Founded by <strong>Nomthandazo Nkosi</strong>, Neema Tradings is dedicated to simplifying the complex world of business compliance and development. With years of expertise in Central Supplier Database registration, company compliance, and tender processes, we've helped countless businesses unlock new opportunities and achieve sustainable growth.
            </p>
            <p class="about-text">
              Our mission is to be your trusted partner in navigating the administrative and regulatory landscape, allowing you to focus on what you do best—growing your business and serving your customers.
            </p>
            <div class="about-values">
              <div class="value-item">
                <div class="value-icon">✓</div>
                <div>
                  <h4>Expert Guidance</h4>
                  <p>Professional support at every step</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon">✓</div>
                <div>
                  <h4>Reliable Service</h4>
                  <p>Your business success is our priority</p>
                </div>
              </div>
              <div class="value-item">
                <div class="value-icon">✓</div>
                <div>
                  <h4>Proven Results</h4>
                  <p>Track record of successful outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-header">
          <div class="section-label">What We Offer</div>
          <h2 class="section-title">Our Services For Your Business</h2>
          <p class="section-description">Comprehensive solutions to help your business thrive</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-number">01</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'database']" />
            </div>
            <h3>Central Supplier Database</h3>
            <ul class="service-list">
              <li><strong>CSD Registration</strong><strong style="color: #9d9a6f;"> - R400 </strong></li>
              <li><strong>CSD Optimization & Audit</strong><strong style="color: #9d9a6f;"> - R350</strong></li>
            </ul>
            <p class="service-description">
              Get registered on the government's Central Supplier Database and ensure your profile is optimized for maximum visibility and compliance.
            </p>
          </div>

          <div class="service-card featured">
            <div class="featured-badge">Most Popular</div>
            <div class="service-number">02</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'building']" />
            </div>
            <h3>Company Registration</h3>
            <div class="service-price">R800</div>
            <p class="service-highlight">Including BBBEE and other certificates</p>
            <p class="service-description">
              Complete company registration package with all necessary documentation, BBBEE certification, and compliance certificates to get your business started right.
            </p>
          </div>

          <div class="service-card">
            <div class="service-number">03</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'file-contract']" />
            </div>
            <h3>Beneficial Ownership Declaration</h3>
            <div class="service-price">R650</div>
            <p class="service-description">
              Ensure full compliance with beneficial ownership requirements through proper documentation and declaration filing.
            </p>
          </div>

          <div class="service-card">
            <div class="service-number">04</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'calendar-check']" />
            </div>
            <h3>Company Annual Return Filing</h3>
            <div class="service-price">R400</div>
            <p class="service-description">
              Stay compliant with annual return requirements. We handle all the paperwork and ensure timely submission to avoid penalties.
            </p>
          </div>

          
          <div class="service-card">
            <div class="service-number">05</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'user-cog']" />
            </div>
            <h3>Office Tender Administrator Training</h3>
            <div class="service-price">R6,000</div>
            <p class="service-subtitle">For 2-6 employees</p>
            <p class="service-description">
              Professional training program for your team to master tender administration, document management, and compliance procedures.
            </p>
          </div>
          <div class="service-card">
            <div class="service-number">06</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'redo']" />
            </div>
            <h3>Company Reinstatement</h3>
            <div class="service-price">R1,200</div>
            <p class="service-description">
              Restore your deregistered company to good standing with CIPC, including all necessary documentation and filing.
            </p>
          </div>
          <div class="service-card">
            <div class="service-number">07</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'id-card']" />
            </div>
            <h3>Company Profile</h3>
            <div class="service-price">R900</div>
            <p class="service-description">
              Professional company profile document showcasing your business credentials, capabilities, and track record for tender submissions.
            </p>
          </div>
          <div class="service-card">
            <div class="service-number">08</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'key']" />
            </div>
            <h3>Tax PIN</h3>
            <div class="service-price">R350</div>
            <p class="service-description">
              Quick and hassle-free tax PIN registration for your business with SARS for compliance and tender requirements.
            </p>
          </div>

          <div class="service-card ">
            <div class="service-number">09</div>
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" />
            </div>
            <h3>Tender/RFQ Masterclass</h3>
            <div class="service-price">R400</div>
            <p class="service-subtitle">One-on-one Everything Tender/RFQ Class</p>
            <ul class="service-list">
              <li>Understanding compliance requirements</li>
              <li>Filling tender documents correctly</li>
              <li>Securing funding for tenders</li>
              <li>Competitive pricing strategies</li>
              <li>Identifying legitimate RFQs</li>
              <li>Avoiding scams and fraud</li>
            </ul>
            <p class="service-description">
              Comprehensive training to help you confidently navigate the tender process and win more contracts.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-section" id="why">
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <div class="section-label">Why Choose Us</div>
            <h2 class="section-title">Your Success Is Our Mission</h2>
            <p class="why-description">
              At Neema Tradings, we understand the challenges businesses face when navigating compliance and tender processes. Here's why entrepreneurs trust us:
            </p>
            <div class="why-features">
              <div class="feature-item">
                <div class="feature-icon">
                  <font-awesome-icon :icon="['fas', 'shield-halved']" />
                </div>
                <div>
                  <h4>Proven Expertise</h4>
                  <p>Years of experience helping businesses achieve compliance and win tenders</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <font-awesome-icon :icon="['fas', 'hand-holding-heart']" />
                </div>
                <div>
                  <h4>Personalized Attention</h4>
                  <p>One-on-one support tailored to your specific business needs</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <font-awesome-icon :icon="['fas', 'coins']" />
                </div>
                <div>
                  <h4>Affordable Pricing</h4>
                  <p>Transparent, competitive rates with no hidden fees</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                </div>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>Efficient processing to get your business moving quickly</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-visual">
            <div class="stats-card">
              <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Businesses Served</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">98%</div>
                <div class="stat-label">Success Rate</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Take Your Business to the Next Level?</h2>
          <p>Let Neema Tradings be your reliable partner in business growth and compliance. Get started today!</p>
          <button class="btn-cta" @click="openWhatsApp">
            <div class="d-flex justify-content-between align-items-center gap-2">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              <div>Contact Us Now</div>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Get In Touch</div>
          <h2 class="section-title">Let's Start Your Journey</h2>
          <p class="section-description">Reach out today and let us help you achieve your business goals</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'user']" />
              </div>
              <div>
                <h4>Nomthandazo Nkosi</h4>
                <p>Founder & Business Consultant</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:enquiries@neematradings.co.za">enquiries@neematradings.co.za</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+27 79 499 7916</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'clock']" />
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label>Your Name *</label>
                <input v-model="form.name" type="text" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label>Phone Number *</label>
                <input v-model="form.phone" type="tel" placeholder="Your contact number" required>
              </div>
              <div class="form-group">
                <label>Email Address </label>
                <input v-model="form.email" type="email" placeholder="your.email@example.com">
              </div>
              <div class="form-group">
                <label>Service Interested In *</label>
                <select v-model="form.service" required>
                  <option value="">Select a service</option>
                  <option value="csd-registration">CSD Registration</option>
                  <option value="csd-optimization">CSD Optimization & Audit</option>
                  <option value="company-registration">Company Registration</option>
                  <option value="beneficial-ownership">Beneficial Ownership Declaration</option>
                  <option value="annual-return">Company Annual Return Filing</option>
                  <option value="tender-class">Tender/RFQ Masterclass</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div class="form-group">
                <label>Your Message *</label>
                <textarea v-model="form.message" placeholder="Tell us about your business needs..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-submit">
                <span>Send Message</span>
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import Layout from "../Layouts/HomeLayout.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  seo: Object,
  structuredData: String,
  ownerImage: String,
});

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

onMounted(() => {
  if (props.structuredData) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = props.structuredData;
    document.head.appendChild(script);
  }
});

const openWhatsApp = () => {
  const phoneNumber = '27794997916'; // Neema Tradings WhatsApp number
  const message = encodeURIComponent('Hello, I am interested in your services.');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
};

const scrollToServices = () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
};

const scrollToContact = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

const scrollToAbout = () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
};

const submitForm = async () => {
  try {
    const response = await axios.post('/api/contacts', form.value);
    form.value = {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    };
    alert('Thank you for your message! We will contact you soon.');
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error sending your message. Please try again.');
  }
};
</script>

<style>
:root {
  --brand-primary: #303032;
  --brand-secondary: #9d9a6f;
  --white: #ffffff;
  --light-bg: #f8f9fa;
  --text-dark: #2c3e50;
  --text-light: #6c757d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--brand-primary) 0%, #1a1a1c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(157, 154, 111, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(157, 154, 111, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
}

.hero-content {
  margin-top: -200px;
  text-align: center;
  color: var(--white);
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--white);
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: var(--brand-secondary);
  margin-bottom: 24px;
  font-weight: 500;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 40px;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.btn-primary, .btn-secondary {
  padding: 16px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background: var(--brand-secondary);
  color: var(--brand-primary);
}

.btn-primary:hover {
  background: #b8b588;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(157, 154, 111, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border: 2px solid var(--brand-secondary);
}

.btn-secondary:hover {
  background: var(--brand-secondary);
  color: var(--brand-primary);
  transform: translateY(-3px);
}

.scroll-indicator {
  position: absolute;
  bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-left: 3px solid var(--brand-secondary);
  border-bottom: 3px solid var(--brand-secondary);
  transform: rotate(-45deg);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Common Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--brand-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--brand-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-description {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about-section {
  padding: 100px 0;
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  z-index: 1;
}

.owner-img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: var(--brand-secondary);
  border-radius: 20px;
  z-index: -1;
  opacity: 0.3;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 20px;
}

.about-values {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.value-icon {
  width: 40px;
  height: 40px;
  background: var(--brand-secondary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.value-item h4 {
  font-size: 1.2rem;
  color: var(--brand-primary);
  margin-bottom: 8px;
}

.value-item p {
  color: var(--text-light);
}

/* Services Section */
.services-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.service-card {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--brand-secondary);
}

.service-card.featured {
  border: 2px solid var(--brand-secondary);
  background: linear-gradient(135deg, #ffffff 0%, #f8f7f3 100%);
}

.service-card.highlighted {
  grid-column: span 2;
}

.featured-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--brand-secondary);
  color: var(--white);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
}

.service-number {
  font-size: 3rem;
  font-weight: 800;
  color: var(--brand-secondary);
  margin-bottom: -10px;
}

.service-icon {
  font-size: 2rem;
  color: var(--brand-secondary);
  opacity: 0.8;
  margin-bottom: 24px;
}

.service-card h3 {
  font-size: 1.6rem;
  color: var(--brand-primary);
  margin-bottom: 16px;
  font-weight: 700;
}

.service-price {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--brand-secondary);
  margin: 16px 0;
}

.service-subtitle {
  font-size: 1.1rem;
  color: var(--brand-primary);
  font-weight: 600;
  margin-bottom: 16px;
}

.service-highlight {
  background: var(--brand-secondary);
  color: var(--white);
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 16px;
  font-weight: 600;
}

.service-list {
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

.service-list li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  color: var(--text-dark);
}

.service-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--brand-secondary);
  font-weight: bold;
  font-size: 1.2rem;
}

.service-description {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
}

/* Why Section */
.why-section {
  padding: 100px 0;
  background: var(--white);
}

.why-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 80px;
  align-items: center;
}

.why-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 40px;
}

.why-features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--brand-secondary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-item h4 {
  font-size: 1.3rem;
  color: var(--brand-primary);
  margin-bottom: 8px;
}

.feature-item p {
  color: var(--text-light);
  line-height: 1.6;
}

.stats-card {
  background: linear-gradient(135deg, var(--brand-primary) 0%, #1a1a1c 100%);
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.stat-item {
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--brand-secondary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--white);
  opacity: 0.8;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--brand-secondary);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.8rem;
  color: var(--brand-primary);
  margin-bottom: 20px;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.3rem;
  color: var(--brand-primary);
  opacity: 0.8;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.btn-cta {
  background: var(--brand-primary);
  color: var(--white);
  padding: 20px 50px;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-cta:hover {
  background: #1a1a1c;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Contact Section */
.contact-section {
  padding: 100px 0;
  background: var(--light-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  margin-top: 60px;
}

.contact-info h3 {
  font-size: 2rem;
  color: var(--brand-primary);
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--brand-secondary);
  color: var(--white);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.contact-item h4 {
  font-size: 1.2rem;
  color: var(--brand-primary);
  margin-bottom: 8px;
  font-weight: 600;
}

.contact-item p,
.contact-item a {
  color: var(--text-light);
  text-decoration: none;
  line-height: 1.6;
}

.contact-item a:hover {
  color: var(--brand-secondary);
}

.contact-form-wrapper {
  background: var(--white);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.contact-form .form-group {
  margin-bottom: 24px;
}

.contact-form label {
  display: block;
  font-weight: 600;
  color: var(--brand-primary);
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--white);
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--brand-secondary);
  box-shadow: 0 0 0 4px rgba(157, 154, 111, 0.1);
}

.contact-form textarea {
  resize: vertical;
  min-height: 150px;
}

.btn-submit {
  width: 100%;
  background: var(--brand-primary);
  color: var(--white);
  padding: 18px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-submit:hover {
  background: #1a1a1c;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .about-grid,
  .why-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .image-decoration {
    width: 150px;
    height: 150px;
  }
  
  .service-card.highlighted {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form-wrapper {
    padding: 30px;
  }
  
  .stats-card {
    padding: 40px 30px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
  
  .logo-img {
    max-width: 140px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .service-card {
    padding: 30px 20px;
  }
}
</style>