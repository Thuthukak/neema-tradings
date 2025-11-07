import { ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./Navbar-Cbm9A3FB.js";
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
      _push(`<!--[--><footer class="bg-shape-primary text-white py-5" data-v-71f51f87><div class="container px-4" data-v-71f51f87><div class="row" data-v-71f51f87><div class="col-md-4 mb-4 mb-md-0" data-v-71f51f87><img src="/assets/images/logo/phs_logo_white_hor@2x.png" alt="Logo" class="w-60 mb-3" data-v-71f51f87><p class="text-white" data-v-71f51f87>Billing made simple for every specialty</p></div><div class="col-md-4 mb-4 mb-md-0" data-v-71f51f87><h5 class="mb-3" data-v-71f51f87>Contact Us</h5><ul class="list-unstyled" data-v-71f51f87><li class="d-flex align-items-center mb-2" data-v-71f51f87><div class="text-white p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87><i class="fas fa-map-marker-alt" data-v-71f51f87></i></div><span data-v-71f51f87>Johannesburg</span></li><li class="d-flex align-items-center mb-2" data-v-71f51f87><div class="text-white p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87><i class="fas fa-phone" data-v-71f51f87></i></div><span data-v-71f51f87><a class="text-white" href="tel:+27738114652" data-v-71f51f87>(555) 123-4567</a></span></li><li class="d-flex align-items-center" data-v-71f51f87><div class="text-white p-2 d-flex align-items-center justify-content-center me-2" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87><i class="fas fa-envelope" data-v-71f51f87></i></div><span data-v-71f51f87><a class="text-white" href="mailto:info@pendagraphics.co.za" data-v-71f51f87>info@probillsolutions.com</a></span></li></ul></div><div class="col-md-4" data-v-71f51f87><h5 class="mb-3" data-v-71f51f87>Find us on social media</h5><div class="d-flex gap-2" data-v-71f51f87><a href="https://web.facebook.com" class="text-white p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "facebook"] }, null, _parent));
      _push(`</a><a href="https://www.instagram.com" class="text-white p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "instagram"] }, null, _parent));
      _push(`</a><a href="https://www.youtube.com" class="text-white p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "youtube"] }, null, _parent));
      _push(`</a><a href="https://www.tiktok.com" class="text-white p-2 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" data-v-71f51f87>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fab", "tiktok"] }, null, _parent));
      _push(`</a></div><div class="mt-3" data-v-71f51f87> Subscribe to our newsletter</div><form data-v-71f51f87><div class="input-group mb-3 mt-2" data-v-71f51f87><input type="email"${ssrRenderAttr("value", form.value.email)} class="form-control" placeholder="Enter your email" data-v-71f51f87><button class="btn btn-primary" type="submit" data-v-71f51f87>Subscribe</button></div></form></div></div></div></footer><div class="bg-white text-black text-center py-3" data-v-71f51f87><p class="mb-0" data-v-71f51f87>Pro Health Solutions © ${ssrInterpolate(currentYear.value)}. All rights reserved.</p></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Home/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71f51f87"]]);
export {
  Footer as F
};
