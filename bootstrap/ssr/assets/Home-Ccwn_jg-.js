import { ref, onMounted, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { h as head_default } from "../ssr.js";
import { L as Layout } from "./HomeLayout-CF1KbfSZ.js";
import axios from "axios";
import "@vue/server-renderer";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
import "qs-esm";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Navbar-BABML2an.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Footer-Dp8jMWVf.js";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    seo: Object,
    structuredData: String,
    ownerImage: String
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    onMounted(() => {
      if (props.structuredData) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = props.structuredData;
        document.head.appendChild(script);
      }
    });
    const openWhatsApp = () => {
      const phoneNumber = "27794997916";
      const message = encodeURIComponent("Hello, I am interested in your services.");
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    };
    const scrollToServices = () => {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAbout = () => {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    };
    const submitForm = async () => {
      try {
        const response = await axios.post("/api/contacts", form.value);
        form.value = {
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        };
        alert("Thank you for your message! We will contact you soon.");
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error sending your message. Please try again.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(Layout, mergeProps({ seo: __props.seo }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(head_default), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<title${_scopeId2}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId2}><meta name="keywords"${ssrRenderAttr("content", __props.seo.keywords)}${_scopeId2}><link rel="canonical"${ssrRenderAttr("href", __props.seo.canonical_url)}${_scopeId2}><meta property="og:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId2}><meta property="og:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId2}><meta property="og:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId2}><meta property="og:url"${ssrRenderAttr("content", __props.seo.og_url)}${_scopeId2}><meta property="og:type" content="website"${_scopeId2}><meta property="og:site_name" content="Neema Tradings"${_scopeId2}><meta name="twitter:card"${ssrRenderAttr("content", __props.seo.twitter_card)}${_scopeId2}><meta name="twitter:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId2}><meta name="twitter:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId2}><meta name="twitter:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId2}><meta name="robots" content="index, follow"${_scopeId2}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId2}><meta name="theme-color" content="#303032"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("title", null, toDisplayString(__props.seo.title), 1),
                    createVNode("meta", {
                      name: "description",
                      content: __props.seo.description
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      name: "keywords",
                      content: __props.seo.keywords
                    }, null, 8, ["content"]),
                    createVNode("link", {
                      rel: "canonical",
                      href: __props.seo.canonical_url
                    }, null, 8, ["href"]),
                    createVNode("meta", {
                      property: "og:title",
                      content: __props.seo.og_title
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      property: "og:description",
                      content: __props.seo.og_description
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      property: "og:image",
                      content: __props.seo.og_image
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      property: "og:url",
                      content: __props.seo.og_url
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      property: "og:type",
                      content: "website"
                    }),
                    createVNode("meta", {
                      property: "og:site_name",
                      content: "Neema Tradings"
                    }),
                    createVNode("meta", {
                      name: "twitter:card",
                      content: __props.seo.twitter_card
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      name: "twitter:title",
                      content: __props.seo.og_title
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      name: "twitter:description",
                      content: __props.seo.og_description
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      name: "twitter:image",
                      content: __props.seo.og_image
                    }, null, 8, ["content"]),
                    createVNode("meta", {
                      name: "robots",
                      content: "index, follow"
                    }),
                    createVNode("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0"
                    }),
                    createVNode("meta", {
                      name: "theme-color",
                      content: "#303032"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section id="home" class="hero-section"${_scopeId}><div class="hero-overlay"${_scopeId}></div><div class="hero-container"${_scopeId}><div class="hero-content"${_scopeId}><h1 class="hero-title"${_scopeId}> Neema Tradings </h1><p class="hero-subtitle"${_scopeId}>Your Trusted Supply Solution</p><p class="hero-description"${_scopeId}> At Neema Tradings, we provide comprehensive business solutions to help entrepreneurs and companies navigate compliance, secure funding opportunities, and build sustainable growth strategies. </p><div class="hero-buttons"${_scopeId}><button class="btn-primary"${_scopeId}><div class="d-flex justify-content-center align-items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>Get Started</div></div></button><button class="btn-secondary"${_scopeId}>Our Services</button></div></div></div><div class="scroll-indicator"${_scopeId}><div class="scroll-arrow"${_scopeId}></div></div></section><section class="about-section" id="about"${_scopeId}><div class="container"${_scopeId}><div class="about-grid"${_scopeId}><div class="about-image"${_scopeId}><div class="image-wrapper"${_scopeId}><img${ssrRenderAttr("src", __props.ownerImage)} alt="Nomthandazo Nkosi - Neema Tradings" class="owner-img"${_scopeId}><div class="image-decoration"${_scopeId}></div></div></div><div class="about-content"${_scopeId}><div class="section-label"${_scopeId}>About Us</div><h2 class="section-title"${_scopeId}>Let Me Help You Help Your Business!</h2><p class="about-text"${_scopeId}> Founded by <strong${_scopeId}>Nomthandazo Nkosi</strong>, Neema Tradings is dedicated to simplifying the complex world of business compliance and development. With years of expertise in Central Supplier Database registration, company compliance, and tender processes, we&#39;ve helped countless businesses unlock new opportunities and achieve sustainable growth. </p><p class="about-text"${_scopeId}> Our mission is to be your trusted partner in navigating the administrative and regulatory landscape, allowing you to focus on what you do best—growing your business and serving your customers. </p><div class="about-values"${_scopeId}><div class="value-item"${_scopeId}><div class="value-icon"${_scopeId}>✓</div><div${_scopeId}><h4${_scopeId}>Expert Guidance</h4><p${_scopeId}>Professional support at every step</p></div></div><div class="value-item"${_scopeId}><div class="value-icon"${_scopeId}>✓</div><div${_scopeId}><h4${_scopeId}>Reliable Service</h4><p${_scopeId}>Your business success is our priority</p></div></div><div class="value-item"${_scopeId}><div class="value-icon"${_scopeId}>✓</div><div${_scopeId}><h4${_scopeId}>Proven Results</h4><p${_scopeId}>Track record of successful outcomes</p></div></div></div></div></div></div></section><section class="services-section" id="services"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><div class="section-label"${_scopeId}>What We Offer</div><h2 class="section-title"${_scopeId}>Our Services For Your Business</h2><p class="section-description"${_scopeId}>Comprehensive solutions to help your business thrive</p></div><div class="services-grid"${_scopeId}><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>01</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "database"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Central Supplier Database</h3><ul class="service-list"${_scopeId}><li${_scopeId}><strong${_scopeId}>CSD Registration</strong><strong style="${ssrRenderStyle({ "color": "#9d9a6f" })}"${_scopeId}> - R400 </strong></li><li${_scopeId}><strong${_scopeId}>CSD Optimization &amp; Audit</strong><strong style="${ssrRenderStyle({ "color": "#9d9a6f" })}"${_scopeId}> - R350</strong></li></ul><p class="service-description"${_scopeId}> Get registered on the government&#39;s Central Supplier Database and ensure your profile is optimized for maximum visibility and compliance. </p></div><div class="service-card featured"${_scopeId}><div class="featured-badge"${_scopeId}>Most Popular</div><div class="service-number"${_scopeId}>02</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "building"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Company Registration</h3><div class="service-price"${_scopeId}>R800</div><p class="service-highlight"${_scopeId}>Including BBBEE and other certificates</p><p class="service-description"${_scopeId}> Complete company registration package with all necessary documentation, BBBEE certification, and compliance certificates to get your business started right. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>03</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "file-contract"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Beneficial Ownership Declaration</h3><div class="service-price"${_scopeId}>R650</div><p class="service-description"${_scopeId}> Ensure full compliance with beneficial ownership requirements through proper documentation and declaration filing. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>04</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "calendar-check"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Company Annual Return Filing</h3><div class="service-price"${_scopeId}>R400</div><p class="service-description"${_scopeId}> Stay compliant with annual return requirements. We handle all the paperwork and ensure timely submission to avoid penalties. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>05</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user-cog"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Office Tender Administrator Training</h3><div class="service-price"${_scopeId}>R6,000</div><p class="service-subtitle"${_scopeId}>For 2-6 employees</p><p class="service-description"${_scopeId}> Professional training program for your team to master tender administration, document management, and compliance procedures. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>06</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "redo"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Company Reinstatement</h3><div class="service-price"${_scopeId}>R1,200</div><p class="service-description"${_scopeId}> Restore your deregistered company to good standing with CIPC, including all necessary documentation and filing. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>07</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "id-card"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Company Profile</h3><div class="service-price"${_scopeId}>R900</div><p class="service-description"${_scopeId}> Professional company profile document showcasing your business credentials, capabilities, and track record for tender submissions. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>08</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "key"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Tax PIN</h3><div class="service-price"${_scopeId}>R350</div><p class="service-description"${_scopeId}> Quick and hassle-free tax PIN registration for your business with SARS for compliance and tender requirements. </p></div><div class="service-card"${_scopeId}><div class="service-number"${_scopeId}>09</div><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "graduation-cap"] }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Tender/RFQ Masterclass</h3><div class="service-price"${_scopeId}>R400</div><p class="service-subtitle"${_scopeId}>One-on-one Everything Tender/RFQ Class</p><ul class="service-list"${_scopeId}><li${_scopeId}>Understanding compliance requirements</li><li${_scopeId}>Filling tender documents correctly</li><li${_scopeId}>Securing funding for tenders</li><li${_scopeId}>Competitive pricing strategies</li><li${_scopeId}>Identifying legitimate RFQs</li><li${_scopeId}>Avoiding scams and fraud</li></ul><p class="service-description"${_scopeId}> Comprehensive training to help you confidently navigate the tender process and win more contracts. </p></div></div></div></section><section class="why-section" id="why"${_scopeId}><div class="container"${_scopeId}><div class="why-grid"${_scopeId}><div class="why-content"${_scopeId}><div class="section-label"${_scopeId}>Why Choose Us</div><h2 class="section-title"${_scopeId}>Your Success Is Our Mission</h2><p class="why-description"${_scopeId}> At Neema Tradings, we understand the challenges businesses face when navigating compliance and tender processes. Here&#39;s why entrepreneurs trust us: </p><div class="why-features"${_scopeId}><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "shield-halved"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Proven Expertise</h4><p${_scopeId}>Years of experience helping businesses achieve compliance and win tenders</p></div></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "hand-holding-heart"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Personalized Attention</h4><p${_scopeId}>One-on-one support tailored to your specific business needs</p></div></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "coins"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Affordable Pricing</h4><p${_scopeId}>Transparent, competitive rates with no hidden fees</p></div></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "clock"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Fast Turnaround</h4><p${_scopeId}>Efficient processing to get your business moving quickly</p></div></div></div></div><div class="why-visual"${_scopeId}><div class="stats-card"${_scopeId}><div class="stat-item"${_scopeId}><div class="stat-number"${_scopeId}>500+</div><div class="stat-label"${_scopeId}>Businesses Served</div></div><div class="stat-item"${_scopeId}><div class="stat-number"${_scopeId}>98%</div><div class="stat-label"${_scopeId}>Success Rate</div></div><div class="stat-item"${_scopeId}><div class="stat-number"${_scopeId}>5+</div><div class="stat-label"${_scopeId}>Years Experience</div></div></div></div></div></div></section><section class="cta-section"${_scopeId}><div class="container"${_scopeId}><div class="cta-content"${_scopeId}><h2${_scopeId}>Ready to Take Your Business to the Next Level?</h2><p${_scopeId}>Let Neema Tradings be your reliable partner in business growth and compliance. Get started today!</p><button class="btn-cta"${_scopeId}><div class="d-flex justify-content-between align-items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>Contact Us Now</div></div></button></div></div></section><section class="contact-section" id="contact"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><div class="section-label"${_scopeId}>Get In Touch</div><h2 class="section-title"${_scopeId}>Let&#39;s Start Your Journey</h2><p class="section-description"${_scopeId}>Reach out today and let us help you achieve your business goals</p></div><div class="contact-grid"${_scopeId}><div class="contact-info"${_scopeId}><h3${_scopeId}>Contact Information</h3><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "user"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Nomthandazo Nkosi</h4><p${_scopeId}>Founder &amp; Business Consultant</p></div></div><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "envelope"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Email</h4><a href="mailto:enquiries@neematradings.co.za"${_scopeId}>enquiries@neematradings.co.za</a></div></div><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "phone"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Phone</h4><p${_scopeId}>+27 79 499 7916</p></div></div><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "clock"] }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Business Hours</h4><p${_scopeId}>Monday - Friday: 8:00 AM - 5:00 PM</p><p${_scopeId}>Saturday: 9:00 AM - 1:00 PM</p></div></div></div><div class="contact-form-wrapper"${_scopeId}><form class="contact-form"${_scopeId}><div class="form-group"${_scopeId}><label${_scopeId}>Your Name *</label><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Enter your full name" required${_scopeId}></div><div class="form-group"${_scopeId}><label${_scopeId}>Phone Number *</label><input${ssrRenderAttr("value", form.value.phone)} type="tel" placeholder="Your contact number" required${_scopeId}></div><div class="form-group"${_scopeId}><label${_scopeId}>Email Address </label><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="your.email@example.com"${_scopeId}></div><div class="form-group"${_scopeId}><label${_scopeId}>Service Interested In *</label><select required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "") : ssrLooseEqual(form.value.service, "")) ? " selected" : ""}${_scopeId}>Select a service</option><option value="csd-registration"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "csd-registration") : ssrLooseEqual(form.value.service, "csd-registration")) ? " selected" : ""}${_scopeId}>CSD Registration</option><option value="csd-optimization"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "csd-optimization") : ssrLooseEqual(form.value.service, "csd-optimization")) ? " selected" : ""}${_scopeId}>CSD Optimization &amp; Audit</option><option value="company-registration"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "company-registration") : ssrLooseEqual(form.value.service, "company-registration")) ? " selected" : ""}${_scopeId}>Company Registration</option><option value="beneficial-ownership"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "beneficial-ownership") : ssrLooseEqual(form.value.service, "beneficial-ownership")) ? " selected" : ""}${_scopeId}>Beneficial Ownership Declaration</option><option value="annual-return"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "annual-return") : ssrLooseEqual(form.value.service, "annual-return")) ? " selected" : ""}${_scopeId}>Company Annual Return Filing</option><option value="tender-class"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "tender-class") : ssrLooseEqual(form.value.service, "tender-class")) ? " selected" : ""}${_scopeId}>Tender/RFQ Masterclass</option><option value="consultation"${ssrIncludeBooleanAttr(Array.isArray(form.value.service) ? ssrLooseContain(form.value.service, "consultation") : ssrLooseEqual(form.value.service, "consultation")) ? " selected" : ""}${_scopeId}>General Consultation</option></select></div><div class="form-group"${_scopeId}><label${_scopeId}>Your Message *</label><textarea placeholder="Tell us about your business needs..." rows="5" required${_scopeId}>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn-submit"${_scopeId}><span${_scopeId}>Send Message</span>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "paper-plane"] }, null, _parent2, _scopeId));
            _push2(`</button></form></div></div></div></section>`);
          } else {
            return [
              createVNode(unref(head_default), null, {
                default: withCtx(() => [
                  createVNode("title", null, toDisplayString(__props.seo.title), 1),
                  createVNode("meta", {
                    name: "description",
                    content: __props.seo.description
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    name: "keywords",
                    content: __props.seo.keywords
                  }, null, 8, ["content"]),
                  createVNode("link", {
                    rel: "canonical",
                    href: __props.seo.canonical_url
                  }, null, 8, ["href"]),
                  createVNode("meta", {
                    property: "og:title",
                    content: __props.seo.og_title
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    property: "og:description",
                    content: __props.seo.og_description
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    property: "og:image",
                    content: __props.seo.og_image
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    property: "og:url",
                    content: __props.seo.og_url
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    property: "og:type",
                    content: "website"
                  }),
                  createVNode("meta", {
                    property: "og:site_name",
                    content: "Neema Tradings"
                  }),
                  createVNode("meta", {
                    name: "twitter:card",
                    content: __props.seo.twitter_card
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    name: "twitter:title",
                    content: __props.seo.og_title
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    name: "twitter:description",
                    content: __props.seo.og_description
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    name: "twitter:image",
                    content: __props.seo.og_image
                  }, null, 8, ["content"]),
                  createVNode("meta", {
                    name: "robots",
                    content: "index, follow"
                  }),
                  createVNode("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                  }),
                  createVNode("meta", {
                    name: "theme-color",
                    content: "#303032"
                  })
                ]),
                _: 1
              }),
              createVNode("section", {
                id: "home",
                class: "hero-section"
              }, [
                createVNode("div", { class: "hero-overlay" }),
                createVNode("div", { class: "hero-container" }, [
                  createVNode("div", { class: "hero-content" }, [
                    createVNode("h1", { class: "hero-title" }, " Neema Tradings "),
                    createVNode("p", { class: "hero-subtitle" }, "Your Trusted Supply Solution"),
                    createVNode("p", { class: "hero-description" }, " At Neema Tradings, we provide comprehensive business solutions to help entrepreneurs and companies navigate compliance, secure funding opportunities, and build sustainable growth strategies. "),
                    createVNode("div", { class: "hero-buttons" }, [
                      createVNode("button", {
                        class: "btn-primary",
                        onClick: openWhatsApp
                      }, [
                        createVNode("div", { class: "d-flex justify-content-center align-items-center gap-2" }, [
                          createVNode(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }),
                          createVNode("div", { class: "text-center" }, "Get Started")
                        ])
                      ]),
                      createVNode("button", {
                        class: "btn-secondary",
                        onClick: scrollToServices
                      }, "Our Services")
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "scroll-indicator",
                  onClick: scrollToAbout
                }, [
                  createVNode("div", { class: "scroll-arrow" })
                ])
              ]),
              createVNode("section", {
                class: "about-section",
                id: "about"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "about-grid" }, [
                    createVNode("div", { class: "about-image" }, [
                      createVNode("div", { class: "image-wrapper" }, [
                        createVNode("img", {
                          src: __props.ownerImage,
                          alt: "Nomthandazo Nkosi - Neema Tradings",
                          class: "owner-img"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "image-decoration" })
                      ])
                    ]),
                    createVNode("div", { class: "about-content" }, [
                      createVNode("div", { class: "section-label" }, "About Us"),
                      createVNode("h2", { class: "section-title" }, "Let Me Help You Help Your Business!"),
                      createVNode("p", { class: "about-text" }, [
                        createTextVNode(" Founded by "),
                        createVNode("strong", null, "Nomthandazo Nkosi"),
                        createTextVNode(", Neema Tradings is dedicated to simplifying the complex world of business compliance and development. With years of expertise in Central Supplier Database registration, company compliance, and tender processes, we've helped countless businesses unlock new opportunities and achieve sustainable growth. ")
                      ]),
                      createVNode("p", { class: "about-text" }, " Our mission is to be your trusted partner in navigating the administrative and regulatory landscape, allowing you to focus on what you do best—growing your business and serving your customers. "),
                      createVNode("div", { class: "about-values" }, [
                        createVNode("div", { class: "value-item" }, [
                          createVNode("div", { class: "value-icon" }, "✓"),
                          createVNode("div", null, [
                            createVNode("h4", null, "Expert Guidance"),
                            createVNode("p", null, "Professional support at every step")
                          ])
                        ]),
                        createVNode("div", { class: "value-item" }, [
                          createVNode("div", { class: "value-icon" }, "✓"),
                          createVNode("div", null, [
                            createVNode("h4", null, "Reliable Service"),
                            createVNode("p", null, "Your business success is our priority")
                          ])
                        ]),
                        createVNode("div", { class: "value-item" }, [
                          createVNode("div", { class: "value-icon" }, "✓"),
                          createVNode("div", null, [
                            createVNode("h4", null, "Proven Results"),
                            createVNode("p", null, "Track record of successful outcomes")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "services-section",
                id: "services"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "section-header" }, [
                    createVNode("div", { class: "section-label" }, "What We Offer"),
                    createVNode("h2", { class: "section-title" }, "Our Services For Your Business"),
                    createVNode("p", { class: "section-description" }, "Comprehensive solutions to help your business thrive")
                  ]),
                  createVNode("div", { class: "services-grid" }, [
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "01"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "database"] })
                      ]),
                      createVNode("h3", null, "Central Supplier Database"),
                      createVNode("ul", { class: "service-list" }, [
                        createVNode("li", null, [
                          createVNode("strong", null, "CSD Registration"),
                          createVNode("strong", { style: { "color": "#9d9a6f" } }, " - R400 ")
                        ]),
                        createVNode("li", null, [
                          createVNode("strong", null, "CSD Optimization & Audit"),
                          createVNode("strong", { style: { "color": "#9d9a6f" } }, " - R350")
                        ])
                      ]),
                      createVNode("p", { class: "service-description" }, " Get registered on the government's Central Supplier Database and ensure your profile is optimized for maximum visibility and compliance. ")
                    ]),
                    createVNode("div", { class: "service-card featured" }, [
                      createVNode("div", { class: "featured-badge" }, "Most Popular"),
                      createVNode("div", { class: "service-number" }, "02"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "building"] })
                      ]),
                      createVNode("h3", null, "Company Registration"),
                      createVNode("div", { class: "service-price" }, "R800"),
                      createVNode("p", { class: "service-highlight" }, "Including BBBEE and other certificates"),
                      createVNode("p", { class: "service-description" }, " Complete company registration package with all necessary documentation, BBBEE certification, and compliance certificates to get your business started right. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "03"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "file-contract"] })
                      ]),
                      createVNode("h3", null, "Beneficial Ownership Declaration"),
                      createVNode("div", { class: "service-price" }, "R650"),
                      createVNode("p", { class: "service-description" }, " Ensure full compliance with beneficial ownership requirements through proper documentation and declaration filing. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "04"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "calendar-check"] })
                      ]),
                      createVNode("h3", null, "Company Annual Return Filing"),
                      createVNode("div", { class: "service-price" }, "R400"),
                      createVNode("p", { class: "service-description" }, " Stay compliant with annual return requirements. We handle all the paperwork and ensure timely submission to avoid penalties. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "05"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "user-cog"] })
                      ]),
                      createVNode("h3", null, "Office Tender Administrator Training"),
                      createVNode("div", { class: "service-price" }, "R6,000"),
                      createVNode("p", { class: "service-subtitle" }, "For 2-6 employees"),
                      createVNode("p", { class: "service-description" }, " Professional training program for your team to master tender administration, document management, and compliance procedures. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "06"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "redo"] })
                      ]),
                      createVNode("h3", null, "Company Reinstatement"),
                      createVNode("div", { class: "service-price" }, "R1,200"),
                      createVNode("p", { class: "service-description" }, " Restore your deregistered company to good standing with CIPC, including all necessary documentation and filing. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "07"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "id-card"] })
                      ]),
                      createVNode("h3", null, "Company Profile"),
                      createVNode("div", { class: "service-price" }, "R900"),
                      createVNode("p", { class: "service-description" }, " Professional company profile document showcasing your business credentials, capabilities, and track record for tender submissions. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "08"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "key"] })
                      ]),
                      createVNode("h3", null, "Tax PIN"),
                      createVNode("div", { class: "service-price" }, "R350"),
                      createVNode("p", { class: "service-description" }, " Quick and hassle-free tax PIN registration for your business with SARS for compliance and tender requirements. ")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-number" }, "09"),
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fas", "graduation-cap"] })
                      ]),
                      createVNode("h3", null, "Tender/RFQ Masterclass"),
                      createVNode("div", { class: "service-price" }, "R400"),
                      createVNode("p", { class: "service-subtitle" }, "One-on-one Everything Tender/RFQ Class"),
                      createVNode("ul", { class: "service-list" }, [
                        createVNode("li", null, "Understanding compliance requirements"),
                        createVNode("li", null, "Filling tender documents correctly"),
                        createVNode("li", null, "Securing funding for tenders"),
                        createVNode("li", null, "Competitive pricing strategies"),
                        createVNode("li", null, "Identifying legitimate RFQs"),
                        createVNode("li", null, "Avoiding scams and fraud")
                      ]),
                      createVNode("p", { class: "service-description" }, " Comprehensive training to help you confidently navigate the tender process and win more contracts. ")
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "why-section",
                id: "why"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "why-grid" }, [
                    createVNode("div", { class: "why-content" }, [
                      createVNode("div", { class: "section-label" }, "Why Choose Us"),
                      createVNode("h2", { class: "section-title" }, "Your Success Is Our Mission"),
                      createVNode("p", { class: "why-description" }, " At Neema Tradings, we understand the challenges businesses face when navigating compliance and tender processes. Here's why entrepreneurs trust us: "),
                      createVNode("div", { class: "why-features" }, [
                        createVNode("div", { class: "feature-item" }, [
                          createVNode("div", { class: "feature-icon" }, [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "shield-halved"] })
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", null, "Proven Expertise"),
                            createVNode("p", null, "Years of experience helping businesses achieve compliance and win tenders")
                          ])
                        ]),
                        createVNode("div", { class: "feature-item" }, [
                          createVNode("div", { class: "feature-icon" }, [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "hand-holding-heart"] })
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", null, "Personalized Attention"),
                            createVNode("p", null, "One-on-one support tailored to your specific business needs")
                          ])
                        ]),
                        createVNode("div", { class: "feature-item" }, [
                          createVNode("div", { class: "feature-icon" }, [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "coins"] })
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", null, "Affordable Pricing"),
                            createVNode("p", null, "Transparent, competitive rates with no hidden fees")
                          ])
                        ]),
                        createVNode("div", { class: "feature-item" }, [
                          createVNode("div", { class: "feature-icon" }, [
                            createVNode(_component_font_awesome_icon, { icon: ["fas", "clock"] })
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", null, "Fast Turnaround"),
                            createVNode("p", null, "Efficient processing to get your business moving quickly")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "why-visual" }, [
                      createVNode("div", { class: "stats-card" }, [
                        createVNode("div", { class: "stat-item" }, [
                          createVNode("div", { class: "stat-number" }, "500+"),
                          createVNode("div", { class: "stat-label" }, "Businesses Served")
                        ]),
                        createVNode("div", { class: "stat-item" }, [
                          createVNode("div", { class: "stat-number" }, "98%"),
                          createVNode("div", { class: "stat-label" }, "Success Rate")
                        ]),
                        createVNode("div", { class: "stat-item" }, [
                          createVNode("div", { class: "stat-number" }, "5+"),
                          createVNode("div", { class: "stat-label" }, "Years Experience")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "cta-section" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "cta-content" }, [
                    createVNode("h2", null, "Ready to Take Your Business to the Next Level?"),
                    createVNode("p", null, "Let Neema Tradings be your reliable partner in business growth and compliance. Get started today!"),
                    createVNode("button", {
                      class: "btn-cta",
                      onClick: openWhatsApp
                    }, [
                      createVNode("div", { class: "d-flex justify-content-between align-items-center gap-2" }, [
                        createVNode(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }),
                        createVNode("div", null, "Contact Us Now")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "contact-section",
                id: "contact"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "section-header" }, [
                    createVNode("div", { class: "section-label" }, "Get In Touch"),
                    createVNode("h2", { class: "section-title" }, "Let's Start Your Journey"),
                    createVNode("p", { class: "section-description" }, "Reach out today and let us help you achieve your business goals")
                  ]),
                  createVNode("div", { class: "contact-grid" }, [
                    createVNode("div", { class: "contact-info" }, [
                      createVNode("h3", null, "Contact Information"),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "user"] })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Nomthandazo Nkosi"),
                          createVNode("p", null, "Founder & Business Consultant")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "envelope"] })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Email"),
                          createVNode("a", { href: "mailto:enquiries@neematradings.co.za" }, "enquiries@neematradings.co.za")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "phone"] })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Phone"),
                          createVNode("p", null, "+27 79 499 7916")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "clock"] })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Business Hours"),
                          createVNode("p", null, "Monday - Friday: 8:00 AM - 5:00 PM"),
                          createVNode("p", null, "Saturday: 9:00 AM - 1:00 PM")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "contact-form-wrapper" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submitForm, ["prevent"]),
                        class: "contact-form"
                      }, [
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Your Name *"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.name = $event,
                            type: "text",
                            placeholder: "Enter your full name",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.name]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Phone Number *"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.phone = $event,
                            type: "tel",
                            placeholder: "Your contact number",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.phone]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Email Address "),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                            type: "email",
                            placeholder: "your.email@example.com"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.email]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Service Interested In *"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => form.value.service = $event,
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select a service"),
                            createVNode("option", { value: "csd-registration" }, "CSD Registration"),
                            createVNode("option", { value: "csd-optimization" }, "CSD Optimization & Audit"),
                            createVNode("option", { value: "company-registration" }, "Company Registration"),
                            createVNode("option", { value: "beneficial-ownership" }, "Beneficial Ownership Declaration"),
                            createVNode("option", { value: "annual-return" }, "Company Annual Return Filing"),
                            createVNode("option", { value: "tender-class" }, "Tender/RFQ Masterclass"),
                            createVNode("option", { value: "consultation" }, "General Consultation")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, form.value.service]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          createVNode("label", null, "Your Message *"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => form.value.message = $event,
                            placeholder: "Tell us about your business needs...",
                            rows: "5",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.message]
                          ])
                        ]),
                        createVNode("button", {
                          type: "submit",
                          class: "btn-submit"
                        }, [
                          createVNode("span", null, "Send Message"),
                          createVNode(_component_font_awesome_icon, { icon: ["fas", "paper-plane"] })
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
