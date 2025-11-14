import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "Navbar",
  props: {
    seo: Object
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "";
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
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = "";
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: ["navbar", { "navbar-scrolled": $data.isScrolled }]
  }, _attrs))} data-v-d01299a7><div class="container mx-auto px-4" data-v-d01299a7><div class="hidden lg:flex justify-content-between align-items-center gap-10" data-v-d01299a7><a href="/" class="navbar-brand" data-v-d01299a7><img src="/assets/images/logo/neema-logo.png" alt="Neema Tradings Logo" class="navbar-logo" data-v-d01299a7></a><div class="nav-links" data-v-d01299a7><a href="#home" class="nav-item" data-v-d01299a7><span data-v-d01299a7>Home</span></a><a href="#about" class="nav-item" data-v-d01299a7><span data-v-d01299a7>About</span></a><a href="#services" class="nav-item" data-v-d01299a7><span data-v-d01299a7>Services</span></a><a href="#why" class="nav-item" data-v-d01299a7><span data-v-d01299a7>Why Choose Us</span></a><a href="#contact" class="nav-item nav-item-cta" data-v-d01299a7>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "envelope"] }, null, _parent));
  _push(`<span data-v-d01299a7>Contact Us</span></a></div></div><div class="lg:hidden flex justify-between items-center py-3" data-v-d01299a7><a href="/" class="navbar-brand-mobile" data-v-d01299a7><img src="/assets/images/logo/neema-logo.png" alt="Neema Tradings Logo" class="navbar-logo-mobile" data-v-d01299a7></a><button class="mobile-menu-button" aria-label="Toggle menu" data-v-d01299a7><span class="${ssrRenderClass([{ "active": $data.isMobileMenuOpen }, "hamburger-line"])}" data-v-d01299a7></span><span class="${ssrRenderClass([{ "active": $data.isMobileMenuOpen }, "hamburger-line"])}" data-v-d01299a7></span><span class="${ssrRenderClass([{ "active": $data.isMobileMenuOpen }, "hamburger-line"])}" data-v-d01299a7></span></button></div>`);
  if ($data.isMobileMenuOpen) {
    _push(`<div class="mobile-menu-overlay" data-v-d01299a7><div class="mobile-menu" data-v-d01299a7><div class="mobile-menu-header" data-v-d01299a7><div class="mobile-brand" data-v-d01299a7><img src="/assets/images/logo/neema-logo.png" alt="Neema Tradings Logo" class="mobile-menu-logo" data-v-d01299a7></div><button class="mobile-close-button" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "times"] }, null, _parent));
    _push(`</button></div><div class="mobile-menu-content" data-v-d01299a7><a href="#home" class="mobile-nav-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: ["fas", "home"],
      class: "mobile-nav-icon"
    }, null, _parent));
    _push(`<span data-v-d01299a7>Home</span></a><a href="#about" class="mobile-nav-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: ["fas", "user-tie"],
      class: "mobile-nav-icon"
    }, null, _parent));
    _push(`<span data-v-d01299a7>About Us</span></a><a href="#services" class="mobile-nav-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: ["fas", "briefcase"],
      class: "mobile-nav-icon"
    }, null, _parent));
    _push(`<span data-v-d01299a7>Our Services</span></a><a href="#why" class="mobile-nav-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: ["fas", "star"],
      class: "mobile-nav-icon"
    }, null, _parent));
    _push(`<span data-v-d01299a7>Why Choose Us</span></a><a href="#contact" class="mobile-nav-item mobile-nav-item-highlight" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: ["fas", "envelope"],
      class: "mobile-nav-icon"
    }, null, _parent));
    _push(`<span data-v-d01299a7>Contact Us</span></a></div><div class="mobile-menu-footer" data-v-d01299a7><div class="mobile-contact-info" data-v-d01299a7><div class="mobile-contact-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "envelope"] }, null, _parent));
    _push(`<a href="mailto:enquiries@neematradings.co.za" data-v-d01299a7>enquiries@neematradings.co.za</a></div><div class="mobile-contact-item" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "phone"] }, null, _parent));
    _push(`<a href="tel:+27738114652" data-v-d01299a7>+27 73 811 4652</a></div></div><div class="mobile-social" data-v-d01299a7><a href="https://web.facebook.com" class="mobile-social-link" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook-f"] }, null, _parent));
    _push(`</a><a href="https://www.instagram.com" class="mobile-social-link" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
    _push(`</a><a href="https://www.linkedin.com" class="mobile-social-link" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "linkedin-in"] }, null, _parent));
    _push(`</a><a href="https://wa.me/27738114652" class="mobile-social-link" data-v-d01299a7>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "whatsapp"] }, null, _parent));
    _push(`</a></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d01299a7"]]);
export {
  Navbar as N
};
