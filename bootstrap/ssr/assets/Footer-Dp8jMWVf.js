import { ref, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    seo: Object
  },
  setup(__props) {
    const form = ref({
      email: ""
    });
    const currentYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-main" }, _attrs))}><div class="container px-4"><div class="row footer-content"><div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><div class="footer-brand"><img src="/assets/images/logo/neema-logo.png" alt="Neema Tradings Logo" class="footer-logo mb-3"><h5 class="footer-tagline">Your Trusted Supply Solution</h5><p class="footer-description"> Empowering businesses through comprehensive compliance solutions, tender training, and professional business support services. </p></div><div class="owner-info"><h6 class="owner-name">Nomthandazo Nkosi</h6><p class="owner-title">Founder &amp; Business Consultant</p></div></div><div class="col-lg-2 col-md-6 mb-4 mb-lg-0"><h5 class="footer-heading">Quick Links</h5><ul class="footer-links"><li><a href="#about">About Us</a></li><li><a href="#services">Services</a></li><li><a href="#why">Why Choose Us</a></li><li><a href="#contact">Contact</a></li></ul></div><div class="col-lg-3 col-md-6 mb-4 mb-lg-0"><h5 class="footer-heading">Our Services</h5><ul class="footer-links"><li><a href="#services">CSD Registration</a></li><li><a href="#services">Company Registration</a></li><li><a href="#services">Beneficial Ownership</a></li><li><a href="#services">Annual Returns</a></li><li><a href="#services">Tender Training</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-heading">Get In Touch</h5><ul class="contact-list"><li class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "map-marker-alt"] }, null, _parent));
      _push(`</div><span>Johannesburg, South Africa</span></li><li class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "phone"] }, null, _parent));
      _push(`</div><span><a href="tel:+277794997916">+27 79 499 7916</a></span></li><li class="contact-item"><div class="contact-icon">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "envelope"] }, null, _parent));
      _push(`</div><span><a href="mailto:enquiries@neematradings.co.za">enquiries@neematradings.co.za</a></span></li></ul><div class="social-section"><h6 class="social-heading">Follow Us</h6><div class="social-links"><a href="https://web.facebook.com" class="social-link" aria-label="Facebook">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook-f"] }, null, _parent));
      _push(`</a><a href="https://www.instagram.com" class="social-link" aria-label="Instagram">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com" class="social-link" aria-label="LinkedIn">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "linkedin-in"] }, null, _parent));
      _push(`</a><a href="https://wa.me/27794997916" class="social-link" aria-label="WhatsApp">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }, null, _parent));
      _push(`</a></div></div></div></div><div class="newsletter-section"><div class="row align-items-center"><div class="col-lg-6 mb-3 mb-lg-0"><h5 class="newsletter-title">Stay Updated</h5><p class="newsletter-description">Subscribe to our newsletter for business tips, compliance updates, and special offers.</p></div><div class="col-lg-6"><form class="newsletter-form"><div class="input-wrapper"><input type="email"${ssrRenderAttr("value", form.value.email)} class="newsletter-input" placeholder="Enter your email address" required><button class="newsletter-btn" type="submit"><span>Subscribe</span>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "paper-plane"] }, null, _parent));
      _push(`</button></div></form></div></div></div></div><div class="footer-bottom"><div class="container px-4"><div class="row align-items-center"><div class="col-md-6 text-center text-md-start mb-2 mb-md-0"><p class="copyright-text"> © ${ssrInterpolate(currentYear.value)} Neema Tradings. All rights reserved. </p></div><div class="col-md-6 text-center text-md-end"><div class="footer-links-bottom"><a href="#" class="bottom-link">Privacy Policy</a><span class="separator">|</span><a href="#" class="bottom-link">Terms of Service</a></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
