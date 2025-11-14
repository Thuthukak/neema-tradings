import { L as Layout } from "./HomeLayout-CF1KbfSZ.js";
import { mergeProps, ref, useSSRContext } from "vue";
import axios from "axios";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Navbar-BABML2an.js";
import "./Footer-Dp8jMWVf.js";
const _sfc_main = {
  components: {
    Layout
  },
  props: {
    seo: Object
  },
  setup() {
    const isLogin = ref(true);
    const form = ref({
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      phone: ""
    });
    const toggleForm = () => {
      isLogin.value = !isLogin.value;
    };
    const handleSubmit = async () => {
      try {
        const endpoint = isLogin.value ? "/login" : "/register";
        const response = await axios.post(endpoint, form.value);
        console.log(response.data);
        if (isLogin.value) {
          window.location.href = "/admin/dashboard";
        } else {
          window.location.href = "/admin/dashboard";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    return {
      isLogin,
      form,
      toggleForm,
      handleSubmit
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid p-0" }, _attrs))} data-v-23a8ac93><div class="row min-vh-100 m-0" data-v-23a8ac93><div class="col-md-8 d-none d-md-block p-0" data-v-23a8ac93><img${ssrRenderAttr("src", $props.seo.hero_image)} alt="Hero Image" class="w-100 min-vh-100 object-fit-cover" data-v-23a8ac93></div><div class="col-md-4 d-flex bg-neema-primary align-items-center justify-content-center p-0" data-v-23a8ac93><div class="w-100 p-4" data-v-23a8ac93><h2 class="text-center text-white fw-bold mb-5" data-v-23a8ac93>${ssrInterpolate($setup.isLogin ? "Admin Login" : "Register as Admin")}</h2><form data-v-23a8ac93><div class="mb-3" data-v-23a8ac93><label class="form-label text-white" data-v-23a8ac93>Email</label><input${ssrRenderAttr("value", $setup.form.email)} type="email" class="form-control" data-v-23a8ac93></div><div class="mb-3" data-v-23a8ac93><label class="form-label text-white" data-v-23a8ac93>Password</label><input${ssrRenderAttr("value", $setup.form.password)} type="password" class="form-control" data-v-23a8ac93></div>`);
  if (!$setup.isLogin) {
    _push(`<div class="mb-3" data-v-23a8ac93><label class="form-label text-white" data-v-23a8ac93>Confirm Password</label><input${ssrRenderAttr("value", $setup.form.password_confirmation)} type="password" class="form-control" data-v-23a8ac93></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$setup.isLogin) {
    _push(`<div class="mb-3" data-v-23a8ac93><label class="form-label" data-v-23a8ac93>Full Name</label><input${ssrRenderAttr("value", $setup.form.name)} type="text" class="form-control" data-v-23a8ac93></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$setup.isLogin) {
    _push(`<div class="mb-3" data-v-23a8ac93><label class="form-label" data-v-23a8ac93>Phone Number</label><input${ssrRenderAttr("value", $setup.form.phone)} type="text" class="form-control" data-v-23a8ac93></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button type="submit" class="neema-btn neema-btn-secondary border w-100" data-v-23a8ac93>${ssrInterpolate($setup.isLogin ? "Login" : "Register")}</button></form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-23a8ac93"]]);
export {
  Admin as default
};
