import { ref, onMounted, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, withModifiers, withDirectives, vModelText, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { g as ge } from "../ssr.js";
import { L as Layout } from "./HomeLayout-zK1-0j7c.js";
import axios from "axios";
import "@vue/server-renderer";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "qs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Navbar-Cbm9A3FB.js";
import "./Footer-DX5y-tbw.js";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    seo: Object,
    structuredData: String
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      name: "",
      email: "",
      practice: "",
      specialty: "",
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
    const scrollToServices = () => {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };
    const submitForm = async () => {
      try {
        const response = await axios.post("/contact-form", form.value);
        console.log("Form submitted:", form.value);
        form.value = {
          name: "",
          email: "",
          practice: "",
          specialty: "",
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
            _push2(ssrRenderComponent(unref(ge), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<title${_scopeId2}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId2}><meta name="keywords"${ssrRenderAttr("content", __props.seo.keywords)}${_scopeId2}><link rel="canonical"${ssrRenderAttr("href", __props.seo.canonical_url)}${_scopeId2}><meta property="og:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId2}><meta property="og:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId2}><meta property="og:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId2}><meta property="og:url"${ssrRenderAttr("content", __props.seo.og_url)}${_scopeId2}><meta property="og:type" content="website"${_scopeId2}><meta property="og:site_name" content="Pro Bill Solutions"${_scopeId2}><meta name="twitter:card"${ssrRenderAttr("content", __props.seo.twitter_card)}${_scopeId2}><meta name="twitter:title"${ssrRenderAttr("content", __props.seo.og_title)}${_scopeId2}><meta name="twitter:description"${ssrRenderAttr("content", __props.seo.og_description)}${_scopeId2}><meta name="twitter:image"${ssrRenderAttr("content", __props.seo.og_image)}${_scopeId2}><meta name="robots" content="index, follow"${_scopeId2}><meta name="viewport" content="width=device-width, initial-scale=1.0"${_scopeId2}><meta name="theme-color" content="#1b3169"${_scopeId2}>`);
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
                      content: "Pro Bill Solutions"
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
                      content: "#1b3169"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<section class="hero-section banner-image"${_scopeId}><div class="hero-container"${_scopeId}><div class="hero-content"${_scopeId}><h1 class="hero-title"${_scopeId}> Streamline Your <span class="highlight"${_scopeId}>Medical Billing</span><br${_scopeId}>Focus on Your Patients </h1><p class="hero-description"${_scopeId}> At Pro Bill Solutions, we deliver efficient, accurate, and fully compliant medical billing services tailored to healthcare providers of all specialties. Let us handle your revenue cycle so you can focus on what matters most. </p><div class="hero-buttons"${_scopeId}><button class="btn-primary"${_scopeId}>Get Started Today</button><button class="btn-secondary"${_scopeId}>Our Services</button></div></div><div class="hero-visual"${_scopeId}><img src="/assets/images/logo/calculator-stethoscope-medicine-bottles-white-background.jpg" alt="Hero Image" class="rounded"${_scopeId}></div></div></section><section class="about-section" id="about"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>About Pro Bill Solutions</h2><p${_scopeId}>Your trusted partner in medical billing excellence</p></div><div class="about-content"${_scopeId}><div class="about-text"${_scopeId}><h3 class="fw-bold"${_scopeId}>Our Mission</h3><p${_scopeId}> Our mission is to deliver dependable, compliant, and tailored medical billing services to doctors of every specialty. We are committed to maximizing your revenue through precise and timely billing, reducing your administrative burden, supporting your growth with personalized solutions, and staying ahead of healthcare regulations and industry changes. </p><h3 class="fw-bold"${_scopeId}>Our Vision</h3><p${_scopeId}> We aim to be the most trusted and innovative medical billing partner for healthcare providers across all specialties. We empower practices with seamless, transparent, and accurate revenue cycle solutions—so you can focus on delivering exceptional patient care while we handle the business side with excellence. </p></div><div class="about-stats"${_scopeId}><div class="stat-card"${_scopeId}><div class="stat-number"${_scopeId}>100%</div><div class="stat-label"${_scopeId}>Compliance Rate</div></div><div class="stat-card"${_scopeId}><div class="stat-number"${_scopeId}>24/7</div><div class="stat-label"${_scopeId}>Support Available</div></div><div class="stat-card"${_scopeId}><div class="stat-number"${_scopeId}>All</div><div class="stat-label"${_scopeId}>Specialties Welcome</div></div></div></div></div></section><section class="services-section" id="services"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>Our Comprehensive Services</h2><p${_scopeId}>End-to-end medical billing and revenue cycle management solutions</p></div><div class="services-grid"${_scopeId}><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "receipt"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Medical Billing &amp; Coding</h3><p${_scopeId}>Accurate CPT, ICD-10, and HCPCS coding to ensure maximum reimbursement and compliance with payer requirements.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "inbox"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Claims Submission &amp; Follow-Up</h3><p${_scopeId}>We handle all aspects of claims processing, including electronic submission, tracking, and follow-up to minimize rejections and delays.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "credit-card"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Payment Posting &amp; Reconciliation</h3><p${_scopeId}>Our team ensures all payments are posted accurately and reconciled against claims to keep your accounts balanced and transparent.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "arrows-rotate"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Rejection Management &amp; Appeals</h3><p${_scopeId}>We identify the root cause of rejections and aggressively pursue appeals to recover lost revenue.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "users"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Patient Billing &amp; Support</h3><p${_scopeId}>We offer clear, compassionate patient statements and support for any billing questions—reducing confusion and improving satisfaction.</p></div><div class="service-card"${_scopeId}><div class="service-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "chart-column"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Customized Reporting &amp; Analytics</h3><p${_scopeId}>Gain insights into your financial performance with real-time, customized reports tailored to your practice&#39;s goals.</p></div></div></div></section><section class="why-choose-section" id="why"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>Why Choose Pro Bill Solutions?</h2><p${_scopeId}>We deliver results that matter to your practice</p></div><div class="features-grid"${_scopeId}><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "hospital"],
              style: { "color": "#ffffff" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>All Specialties Welcome</h3><p${_scopeId}>From cardiology to chiropractic, family medicine to dermatology—we understand the unique billing nuances of every specialty.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "circle-check"],
              style: { "color": "#ffffff" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Compliance You Can Trust</h3><p${_scopeId}>We stay up-to-date with HIPAA, CMS, and payer regulations so you don&#39;t have to.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "handshake"],
              style: { "color": "#ffffff" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Personalized Support</h3><p${_scopeId}>You&#39;ll never be just another account. Our dedicated team knows your practice and is always just a call or message away.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "cloud"],
              style: { "color": "#ffffff" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Advanced Technology</h3><p${_scopeId}>We use secure, cloud-based platforms that integrate smoothly with your existing systems for fast, accurate billing.</p></div><div class="feature-item"${_scopeId}><div class="feature-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "chart-line"],
              style: { "color": "#ffffff" }
            }, null, _parent2, _scopeId));
            _push2(`</div><h3${_scopeId}>Proven Results</h3><p${_scopeId}>We help providers increase collections, shorten payment cycles, and reduce claim rejections—consistently.</p></div></div></div></section><section class="cta-section"${_scopeId}><div class="container"${_scopeId}><div class="cta-content"${_scopeId}><h2${_scopeId}>Ready to Streamline Your Revenue Cycle?</h2><p${_scopeId}>Join countless healthcare providers who trust Pro Bill Solutions with their medical billing needs. Let us help you focus on what you do best—caring for your patients.</p><button class="btn-cta"${_scopeId}>Start Your Partnership Today</button></div></div></section><section class="contact-section" id="contact"${_scopeId}><div class="container"${_scopeId}><div class="section-header"${_scopeId}><h2${_scopeId}>Get in Touch</h2><p${_scopeId}>Ready to transform your medical billing? Contact us today for a free consultation.</p></div><div class="contact-grid"${_scopeId}><div class="contact-info"${_scopeId}><h3${_scopeId}>Contact Information</h3><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "envelope"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Email</h4><p${_scopeId}>info@probillsolutions.com</p></div></div><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "phone"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Phone</h4><p${_scopeId}>(555) 123-4567</p></div></div><div class="contact-item"${_scopeId}><div class="contact-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "clock"],
              style: { "color": "#1b3169" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h4${_scopeId}>Business Hours</h4><p${_scopeId}>Monday - Friday: 8:00 AM - 6:00 PM</p></div></div></div><div class="contact-form"${_scopeId}><form${_scopeId}><div class="form-group"${_scopeId}><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Your Name" required${_scopeId}></div><div class="form-group"${_scopeId}><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Your Email" required${_scopeId}></div><div class="form-group"${_scopeId}><input${ssrRenderAttr("value", form.value.practice)} type="text" placeholder="Practice Name"${_scopeId}></div><div class="form-group"${_scopeId}><select required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "") : ssrLooseEqual(form.value.specialty, "")) ? " selected" : ""}${_scopeId}>Select Your Specialty</option><option value="cardiology"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "cardiology") : ssrLooseEqual(form.value.specialty, "cardiology")) ? " selected" : ""}${_scopeId}>Cardiology</option><option value="dermatology"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "dermatology") : ssrLooseEqual(form.value.specialty, "dermatology")) ? " selected" : ""}${_scopeId}>Dermatology</option><option value="family-medicine"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "family-medicine") : ssrLooseEqual(form.value.specialty, "family-medicine")) ? " selected" : ""}${_scopeId}>Family Medicine</option><option value="chiropractic"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "chiropractic") : ssrLooseEqual(form.value.specialty, "chiropractic")) ? " selected" : ""}${_scopeId}>Chiropractic</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.specialty) ? ssrLooseContain(form.value.specialty, "other") : ssrLooseEqual(form.value.specialty, "other")) ? " selected" : ""}${_scopeId}>Other</option></select></div><div class="form-group"${_scopeId}><textarea placeholder="Tell us about your billing needs" rows="4"${_scopeId}>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn-submit"${_scopeId}>Send Message</button></form></div></div></div></section>`);
          } else {
            return [
              createVNode(unref(ge), null, {
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
                    content: "Pro Bill Solutions"
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
                    content: "#1b3169"
                  })
                ]),
                _: 1
              }),
              createVNode("section", { class: "hero-section banner-image" }, [
                createVNode("div", { class: "hero-container" }, [
                  createVNode("div", { class: "hero-content" }, [
                    createVNode("h1", { class: "hero-title" }, [
                      createTextVNode(" Streamline Your "),
                      createVNode("span", { class: "highlight" }, "Medical Billing"),
                      createVNode("br"),
                      createTextVNode("Focus on Your Patients ")
                    ]),
                    createVNode("p", { class: "hero-description" }, " At Pro Bill Solutions, we deliver efficient, accurate, and fully compliant medical billing services tailored to healthcare providers of all specialties. Let us handle your revenue cycle so you can focus on what matters most. "),
                    createVNode("div", { class: "hero-buttons" }, [
                      createVNode("button", {
                        class: "btn-primary",
                        onClick: scrollToContact
                      }, "Get Started Today"),
                      createVNode("button", {
                        class: "btn-secondary",
                        onClick: scrollToServices
                      }, "Our Services")
                    ])
                  ]),
                  createVNode("div", { class: "hero-visual" }, [
                    createVNode("img", {
                      src: "/assets/images/logo/calculator-stethoscope-medicine-bottles-white-background.jpg",
                      alt: "Hero Image",
                      class: "rounded"
                    })
                  ])
                ])
              ]),
              createVNode("section", {
                class: "about-section",
                id: "about"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "section-header" }, [
                    createVNode("h2", null, "About Pro Bill Solutions"),
                    createVNode("p", null, "Your trusted partner in medical billing excellence")
                  ]),
                  createVNode("div", { class: "about-content" }, [
                    createVNode("div", { class: "about-text" }, [
                      createVNode("h3", { class: "fw-bold" }, "Our Mission"),
                      createVNode("p", null, " Our mission is to deliver dependable, compliant, and tailored medical billing services to doctors of every specialty. We are committed to maximizing your revenue through precise and timely billing, reducing your administrative burden, supporting your growth with personalized solutions, and staying ahead of healthcare regulations and industry changes. "),
                      createVNode("h3", { class: "fw-bold" }, "Our Vision"),
                      createVNode("p", null, " We aim to be the most trusted and innovative medical billing partner for healthcare providers across all specialties. We empower practices with seamless, transparent, and accurate revenue cycle solutions—so you can focus on delivering exceptional patient care while we handle the business side with excellence. ")
                    ]),
                    createVNode("div", { class: "about-stats" }, [
                      createVNode("div", { class: "stat-card" }, [
                        createVNode("div", { class: "stat-number" }, "100%"),
                        createVNode("div", { class: "stat-label" }, "Compliance Rate")
                      ]),
                      createVNode("div", { class: "stat-card" }, [
                        createVNode("div", { class: "stat-number" }, "24/7"),
                        createVNode("div", { class: "stat-label" }, "Support Available")
                      ]),
                      createVNode("div", { class: "stat-card" }, [
                        createVNode("div", { class: "stat-number" }, "All"),
                        createVNode("div", { class: "stat-label" }, "Specialties Welcome")
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
                    createVNode("h2", null, "Our Comprehensive Services"),
                    createVNode("p", null, "End-to-end medical billing and revenue cycle management solutions")
                  ]),
                  createVNode("div", { class: "services-grid" }, [
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "receipt"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Medical Billing & Coding"),
                      createVNode("p", null, "Accurate CPT, ICD-10, and HCPCS coding to ensure maximum reimbursement and compliance with payer requirements.")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "inbox"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Claims Submission & Follow-Up"),
                      createVNode("p", null, "We handle all aspects of claims processing, including electronic submission, tracking, and follow-up to minimize rejections and delays.")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "credit-card"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Payment Posting & Reconciliation"),
                      createVNode("p", null, "Our team ensures all payments are posted accurately and reconciled against claims to keep your accounts balanced and transparent.")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "arrows-rotate"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Rejection Management & Appeals"),
                      createVNode("p", null, "We identify the root cause of rejections and aggressively pursue appeals to recover lost revenue.")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "users"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Patient Billing & Support"),
                      createVNode("p", null, "We offer clear, compassionate patient statements and support for any billing questions—reducing confusion and improving satisfaction.")
                    ]),
                    createVNode("div", { class: "service-card" }, [
                      createVNode("div", { class: "service-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "chart-column"],
                          style: { "color": "#1b3169" }
                        })
                      ]),
                      createVNode("h3", null, "Customized Reporting & Analytics"),
                      createVNode("p", null, "Gain insights into your financial performance with real-time, customized reports tailored to your practice's goals.")
                    ])
                  ])
                ])
              ]),
              createVNode("section", {
                class: "why-choose-section",
                id: "why"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "section-header" }, [
                    createVNode("h2", null, "Why Choose Pro Bill Solutions?"),
                    createVNode("p", null, "We deliver results that matter to your practice")
                  ]),
                  createVNode("div", { class: "features-grid" }, [
                    createVNode("div", { class: "feature-item" }, [
                      createVNode("div", { class: "feature-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "hospital"],
                          style: { "color": "#ffffff" }
                        })
                      ]),
                      createVNode("h3", null, "All Specialties Welcome"),
                      createVNode("p", null, "From cardiology to chiropractic, family medicine to dermatology—we understand the unique billing nuances of every specialty.")
                    ]),
                    createVNode("div", { class: "feature-item" }, [
                      createVNode("div", { class: "feature-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "circle-check"],
                          style: { "color": "#ffffff" }
                        })
                      ]),
                      createVNode("h3", null, "Compliance You Can Trust"),
                      createVNode("p", null, "We stay up-to-date with HIPAA, CMS, and payer regulations so you don't have to.")
                    ]),
                    createVNode("div", { class: "feature-item" }, [
                      createVNode("div", { class: "feature-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "handshake"],
                          style: { "color": "#ffffff" }
                        })
                      ]),
                      createVNode("h3", null, "Personalized Support"),
                      createVNode("p", null, "You'll never be just another account. Our dedicated team knows your practice and is always just a call or message away.")
                    ]),
                    createVNode("div", { class: "feature-item" }, [
                      createVNode("div", { class: "feature-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "cloud"],
                          style: { "color": "#ffffff" }
                        })
                      ]),
                      createVNode("h3", null, "Advanced Technology"),
                      createVNode("p", null, "We use secure, cloud-based platforms that integrate smoothly with your existing systems for fast, accurate billing.")
                    ]),
                    createVNode("div", { class: "feature-item" }, [
                      createVNode("div", { class: "feature-icon" }, [
                        createVNode(_component_font_awesome_icon, {
                          icon: ["fas", "chart-line"],
                          style: { "color": "#ffffff" }
                        })
                      ]),
                      createVNode("h3", null, "Proven Results"),
                      createVNode("p", null, "We help providers increase collections, shorten payment cycles, and reduce claim rejections—consistently.")
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "cta-section" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "cta-content" }, [
                    createVNode("h2", null, "Ready to Streamline Your Revenue Cycle?"),
                    createVNode("p", null, "Join countless healthcare providers who trust Pro Bill Solutions with their medical billing needs. Let us help you focus on what you do best—caring for your patients."),
                    createVNode("button", {
                      class: "btn-cta",
                      onClick: scrollToContact
                    }, "Start Your Partnership Today")
                  ])
                ])
              ]),
              createVNode("section", {
                class: "contact-section",
                id: "contact"
              }, [
                createVNode("div", { class: "container" }, [
                  createVNode("div", { class: "section-header" }, [
                    createVNode("h2", null, "Get in Touch"),
                    createVNode("p", null, "Ready to transform your medical billing? Contact us today for a free consultation.")
                  ]),
                  createVNode("div", { class: "contact-grid" }, [
                    createVNode("div", { class: "contact-info" }, [
                      createVNode("h3", null, "Contact Information"),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", "envelope"],
                            style: { "color": "#1b3169" }
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Email"),
                          createVNode("p", null, "info@probillsolutions.com")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", "phone"],
                            style: { "color": "#1b3169" }
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Phone"),
                          createVNode("p", null, "(555) 123-4567")
                        ])
                      ]),
                      createVNode("div", { class: "contact-item" }, [
                        createVNode("div", { class: "contact-icon" }, [
                          createVNode(_component_font_awesome_icon, {
                            icon: ["fas", "clock"],
                            style: { "color": "#1b3169" }
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", null, "Business Hours"),
                          createVNode("p", null, "Monday - Friday: 8:00 AM - 6:00 PM")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "contact-form" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submitForm, ["prevent"])
                      }, [
                        createVNode("div", { class: "form-group" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.name = $event,
                            type: "text",
                            placeholder: "Your Name",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.name]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                            type: "email",
                            placeholder: "Your Email",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.email]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.practice = $event,
                            type: "text",
                            placeholder: "Practice Name"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.practice]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => form.value.specialty = $event,
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select Your Specialty"),
                            createVNode("option", { value: "cardiology" }, "Cardiology"),
                            createVNode("option", { value: "dermatology" }, "Dermatology"),
                            createVNode("option", { value: "family-medicine" }, "Family Medicine"),
                            createVNode("option", { value: "chiropractic" }, "Chiropractic"),
                            createVNode("option", { value: "other" }, "Other")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, form.value.specialty]
                          ])
                        ]),
                        createVNode("div", { class: "form-group" }, [
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => form.value.message = $event,
                            placeholder: "Tell us about your billing needs",
                            rows: "4"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.message]
                          ])
                        ]),
                        createVNode("button", {
                          type: "submit",
                          class: "btn-submit"
                        }, "Send Message")
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
