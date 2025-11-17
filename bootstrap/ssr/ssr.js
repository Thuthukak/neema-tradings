import { ref, shallowRef, defineComponent, markRaw, h, computed, onMounted, onBeforeUnmount, onUnmounted, watch, Fragment, reactive, createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createHeadManager, router, isUrlMethodPair, formDataToObject, getScrollableParent, useInfiniteScroll, config as config$1, mergeDataIntoQueryString, resetFormFields, shouldIntercept, shouldNavigate, setupProgress } from "@inertiajs/core";
import { escape, cloneDeep, has, set, get, isEqual } from "lodash-es";
import createServer from "@inertiajs/core/server";
import { stringify, parse } from "qs-esm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faMoon, faFileInvoiceDollar, faSun, faGlobe, faUser, faBell, faCog, faTrash, faEye, faFilePdf, faHome, faSignOutAlt, faClipboardList, faCalendarAlt, faSpinner, faEnvelope, faMailForward, faPaperPlane, faPaintBrush, faCheck, faLightbulb, faPalette, faDesktop, faSignature, faIdBadge, faPencilRuler, faLaptopCode, faCode, faShoppingCart, faBullhorn, faBoxOpen, faReceipt, faInbox, faCreditCard, faArrowsRotate, faUsers, faChartColumn, faHospital, faCircleCheck, faHandshake, faCloud, faChartLine, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
var remember = {
  created() {
    if (!this.$options.remember) {
      return;
    }
    if (Array.isArray(this.$options.remember)) {
      this.$options.remember = { data: this.$options.remember };
    }
    if (typeof this.$options.remember === "string") {
      this.$options.remember = { data: [this.$options.remember] };
    }
    if (typeof this.$options.remember.data === "string") {
      this.$options.remember = { data: [this.$options.remember.data] };
    }
    const rememberKey = this.$options.remember.key instanceof Function ? this.$options.remember.key.call(this) : this.$options.remember.key;
    const restored = router.restore(rememberKey);
    const rememberable = this.$options.remember.data.filter((key2) => {
      return !(this[key2] !== null && typeof this[key2] === "object" && this[key2].__rememberable === false);
    });
    const hasCallbacks = (key2) => {
      return this[key2] !== null && typeof this[key2] === "object" && typeof this[key2].__remember === "function" && typeof this[key2].__restore === "function";
    };
    rememberable.forEach((key2) => {
      if (this[key2] !== void 0 && restored !== void 0 && restored[key2] !== void 0) {
        hasCallbacks(key2) ? this[key2].__restore(restored[key2]) : this[key2] = restored[key2];
      }
      this.$watch(
        key2,
        () => {
          router.remember(
            rememberable.reduce(
              (data, key3) => ({
                ...data,
                [key3]: cloneDeep(hasCallbacks(key3) ? this[key3].__remember() : this[key3])
              }),
              {}
            ),
            rememberKey
          );
        },
        { immediate: true, deep: true }
      );
    });
  }
};
var remember_default = remember;
function useForm(rememberKeyOrData, maybeData) {
  const rememberKey = typeof rememberKeyOrData === "string" ? rememberKeyOrData : null;
  const data = (typeof rememberKeyOrData === "string" ? maybeData : rememberKeyOrData) ?? {};
  const restored = rememberKey ? router.restore(rememberKey) : null;
  let defaults = typeof data === "function" ? cloneDeep(data()) : cloneDeep(data);
  let cancelToken = null;
  let recentlySuccessfulTimeoutId;
  let transform = (data2) => data2;
  let defaultsCalledInOnSuccess = false;
  const form = reactive({
    ...restored ? restored.data : cloneDeep(defaults),
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    processing: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    data() {
      return Object.keys(defaults).reduce((carry, key2) => {
        return set(carry, key2, get(this, key2));
      }, {});
    },
    transform(callback) {
      transform = callback;
      return this;
    },
    defaults(fieldOrFields, maybeValue) {
      if (typeof data === "function") {
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      }
      defaultsCalledInOnSuccess = true;
      if (typeof fieldOrFields === "undefined") {
        defaults = cloneDeep(this.data());
        this.isDirty = false;
      } else {
        defaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults), fieldOrFields, maybeValue) : Object.assign({}, cloneDeep(defaults), fieldOrFields);
      }
      return this;
    },
    reset(...fields) {
      const resolvedData = typeof data === "function" ? cloneDeep(data()) : cloneDeep(defaults);
      const clonedData = cloneDeep(resolvedData);
      if (fields.length === 0) {
        defaults = clonedData;
        Object.assign(this, resolvedData);
      } else {
        fields.filter((key2) => has(clonedData, key2)).forEach((key2) => {
          set(defaults, key2, get(clonedData, key2));
          set(this, key2, get(resolvedData, key2));
        });
      }
      return this;
    },
    setError(fieldOrFields, maybeValue) {
      Object.assign(this.errors, typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields);
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    clearErrors(...fields) {
      this.errors = Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
        }),
        {}
      );
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    resetAndClearErrors(...fields) {
      this.reset(...fields);
      this.clearErrors(...fields);
      return this;
    },
    submit(...args) {
      const objectPassed = args[0] !== null && typeof args[0] === "object";
      const method = objectPassed ? args[0].method : args[0];
      const url = objectPassed ? args[0].url : args[1];
      const options = (objectPassed ? args[1] : args[2]) ?? {};
      defaultsCalledInOnSuccess = false;
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          this.wasSuccessful = false;
          this.recentlySuccessful = false;
          clearTimeout(recentlySuccessfulTimeoutId);
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          this.processing = true;
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          this.progress = event;
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page2) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors();
          this.wasSuccessful = true;
          this.recentlySuccessful = true;
          recentlySuccessfulTimeoutId = setTimeout(
            () => this.recentlySuccessful = false,
            config.get("form.recentlySuccessfulDuration")
          );
          const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
          if (!defaultsCalledInOnSuccess) {
            defaults = cloneDeep(this.data());
            this.isDirty = false;
          }
          return onSuccess;
        },
        onError: (errors) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors().setError(errors);
          if (options.onError) {
            return options.onError(errors);
          }
        },
        onCancel: () => {
          this.processing = false;
          this.progress = null;
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          this.processing = false;
          this.progress = null;
          cancelToken = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      const transformedData = transform(this.data());
      if (method === "delete") {
        router.delete(url, { ..._options, data: transformedData });
      } else {
        router[method](url, transformedData, _options);
      }
    },
    get(url, options) {
      this.submit("get", url, options);
    },
    post(url, options) {
      this.submit("post", url, options);
    },
    put(url, options) {
      this.submit("put", url, options);
    },
    patch(url, options) {
      this.submit("patch", url, options);
    },
    delete(url, options) {
      this.submit("delete", url, options);
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel();
      }
    },
    __rememberable: rememberKey === null,
    __remember() {
      return { data: this.data(), errors: this.errors };
    },
    __restore(restored2) {
      Object.assign(this, restored2.data);
      this.setError(restored2.errors);
    }
  });
  watch(
    form,
    (newValue) => {
      form.isDirty = !isEqual(form.data(), defaults);
      if (rememberKey) {
        router.remember(cloneDeep(newValue.__remember()), rememberKey);
      }
    },
    { immediate: true, deep: true }
  );
  return form;
}
var component = ref(void 0);
var page = ref();
var layout = shallowRef(null);
var key = ref(void 0);
var headManager;
var App = defineComponent({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: true
    },
    initialComponent: {
      type: Object,
      required: false
    },
    resolveComponent: {
      type: Function,
      required: false
    },
    titleCallback: {
      type: Function,
      required: false,
      default: (title) => title
    },
    onHeadUpdate: {
      type: Function,
      required: false,
      default: () => () => {
      }
    }
  },
  setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate }) {
    component.value = initialComponent ? markRaw(initialComponent) : void 0;
    page.value = initialPage;
    key.value = void 0;
    const isServer = typeof window === "undefined";
    headManager = createHeadManager(isServer, titleCallback || ((title) => title), onHeadUpdate || (() => {
    }));
    if (!isServer) {
      router.init({
        initialPage,
        resolveComponent,
        swapComponent: async (options) => {
          component.value = markRaw(options.component);
          page.value = options.page;
          key.value = options.preserveState ? key.value : Date.now();
        }
      });
      router.on("navigate", () => headManager.forceUpdate());
    }
    return () => {
      if (component.value) {
        component.value.inheritAttrs = !!component.value.inheritAttrs;
        const child = h(component.value, {
          ...page.value.props,
          key: key.value
        });
        if (layout.value) {
          component.value.layout = layout.value;
          layout.value = null;
        }
        if (component.value.layout) {
          if (typeof component.value.layout === "function") {
            return component.value.layout(h, child);
          }
          return (Array.isArray(component.value.layout) ? component.value.layout : [component.value.layout]).concat(child).reverse().reduce((child2, layout2) => {
            layout2.inheritAttrs = !!layout2.inheritAttrs;
            return h(layout2, { ...page.value.props }, () => child2);
          });
        }
        return child;
      }
    };
  }
});
var app_default = App;
var plugin = {
  install(app) {
    router.form = useForm;
    Object.defineProperty(app.config.globalProperties, "$inertia", { get: () => router });
    Object.defineProperty(app.config.globalProperties, "$page", { get: () => page.value });
    Object.defineProperty(app.config.globalProperties, "$headManager", { get: () => headManager });
    app.mixin(remember_default);
  }
};
async function createInertiaApp({
  id = "app",
  resolve,
  setup,
  title,
  progress: progress2 = {},
  page: page2,
  render,
  defaults = {}
}) {
  config.replace(defaults);
  const isServer = typeof window === "undefined";
  const el = isServer ? null : document.getElementById(id);
  const initialPage = page2 || JSON.parse((el == null ? void 0 : el.dataset.page) || "{}");
  const resolveComponent = (name) => Promise.resolve(resolve(name)).then((module) => module.default || module);
  let head = [];
  const vueApp = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    const props = {
      initialPage,
      initialComponent,
      resolveComponent,
      titleCallback: title
    };
    if (isServer) {
      const ssrSetup = setup;
      return ssrSetup({
        el: null,
        App: app_default,
        props: { ...props, onHeadUpdate: (elements) => head = elements },
        plugin
      });
    }
    const csrSetup = setup;
    return csrSetup({
      el,
      App: app_default,
      props,
      plugin
    });
  });
  if (!isServer && progress2) {
    setupProgress(progress2);
  }
  if (isServer && render) {
    const body = await render(
      createSSRApp({
        render: () => h("div", {
          id,
          "data-page": JSON.stringify(initialPage),
          innerHTML: vueApp ? render(vueApp) : ""
        })
      })
    );
    return { head, body };
  }
}
defineComponent({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: true
    }
  },
  render() {
    var _a, _b;
    const keys = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
    if (!this.$slots.fallback) {
      throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
    }
    return keys.every((key2) => this.$page.props[key2] !== void 0) ? (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a) : this.$slots.fallback();
  }
});
var noop = () => void 0;
defineComponent({
  name: "Form",
  slots: Object,
  props: {
    action: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    errorBag: {
      type: [String, null],
      default: null
    },
    showProgress: {
      type: Boolean,
      default: true
    },
    transform: {
      type: Function,
      default: (data) => data
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetOnError: {
      type: [Boolean, Array],
      default: false
    },
    resetOnSuccess: {
      type: [Boolean, Array],
      default: false
    },
    setDefaultsOnSuccess: {
      type: Boolean,
      default: false
    },
    onCancelToken: {
      type: Function,
      default: noop
    },
    onBefore: {
      type: Function,
      default: noop
    },
    onStart: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onFinish: {
      type: Function,
      default: noop
    },
    onCancel: {
      type: Function,
      default: noop
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    onSubmitComplete: {
      type: Function,
      default: noop
    },
    disableWhileProcessing: {
      type: Boolean,
      default: false
    },
    invalidateCacheTags: {
      type: [String, Array],
      default: () => []
    }
  },
  setup(props, { slots, attrs, expose }) {
    const form = useForm({});
    const formElement = ref();
    const method = computed(
      () => isUrlMethodPair(props.action) ? props.action.method : props.method.toLowerCase()
    );
    const isDirty = ref(false);
    const defaultData = ref(new FormData());
    const onFormUpdate = (event) => {
      isDirty.value = event.type === "reset" ? false : !isEqual(getData(), formDataToObject(defaultData.value));
    };
    const formEvents = ["input", "change", "reset"];
    onMounted(() => {
      defaultData.value = getFormData();
      formEvents.forEach((e) => formElement.value.addEventListener(e, onFormUpdate));
    });
    onBeforeUnmount(() => formEvents.forEach((e) => {
      var _a;
      return (_a = formElement.value) == null ? void 0 : _a.removeEventListener(e, onFormUpdate);
    }));
    const getFormData = () => new FormData(formElement.value);
    const getData = () => formDataToObject(getFormData());
    const submit = () => {
      const [action, data] = mergeDataIntoQueryString(
        method.value,
        isUrlMethodPair(props.action) ? props.action.url : props.action,
        getData(),
        props.queryStringArrayFormat
      );
      const maybeReset = (resetOption) => {
        if (!resetOption) {
          return;
        }
        if (resetOption === true) {
          reset();
        } else if (resetOption.length > 0) {
          reset(...resetOption);
        }
      };
      const submitOptions = {
        headers: props.headers,
        errorBag: props.errorBag,
        showProgress: props.showProgress,
        invalidateCacheTags: props.invalidateCacheTags,
        onCancelToken: props.onCancelToken,
        onBefore: props.onBefore,
        onStart: props.onStart,
        onProgress: props.onProgress,
        onFinish: props.onFinish,
        onCancel: props.onCancel,
        onSuccess: (...args) => {
          var _a, _b;
          (_a = props.onSuccess) == null ? void 0 : _a.call(props, ...args);
          (_b = props.onSubmitComplete) == null ? void 0 : _b.call(props, exposed);
          maybeReset(props.resetOnSuccess);
          if (props.setDefaultsOnSuccess === true) {
            defaults();
          }
        },
        onError: (...args) => {
          var _a;
          (_a = props.onError) == null ? void 0 : _a.call(props, ...args);
          maybeReset(props.resetOnError);
        },
        ...props.options
      };
      form.transform(() => props.transform(data)).submit(method.value, action, submitOptions);
    };
    const reset = (...fields) => {
      resetFormFields(formElement.value, defaultData.value, fields);
    };
    const resetAndClearErrors = (...fields) => {
      form.clearErrors(...fields);
      reset(...fields);
    };
    const defaults = () => {
      defaultData.value = getFormData();
      isDirty.value = false;
    };
    const exposed = {
      get errors() {
        return form.errors;
      },
      get hasErrors() {
        return form.hasErrors;
      },
      get processing() {
        return form.processing;
      },
      get progress() {
        return form.progress;
      },
      get wasSuccessful() {
        return form.wasSuccessful;
      },
      get recentlySuccessful() {
        return form.recentlySuccessful;
      },
      clearErrors: (...fields) => form.clearErrors(...fields),
      resetAndClearErrors,
      setError: (fieldOrFields, maybeValue) => form.setError(typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields),
      get isDirty() {
        return isDirty.value;
      },
      reset,
      submit,
      defaults,
      getData,
      getFormData
    };
    expose(exposed);
    return () => {
      return h(
        "form",
        {
          ...attrs,
          ref: formElement,
          action: isUrlMethodPair(props.action) ? props.action.url : props.action,
          method: method.value,
          onSubmit: (event) => {
            event.preventDefault();
            submit();
          },
          inert: props.disableWhileProcessing && form.processing
        },
        slots.default ? slots.default(exposed) : []
      );
    };
  }
});
var Head = defineComponent({
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(node) {
      return typeof node.type === "string" && [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(node.type) > -1;
    },
    renderTagStart(node) {
      node.props = node.props || {};
      node.props[this.provider.preferredAttribute()] = node.props["head-key"] !== void 0 ? node.props["head-key"] : "";
      const attrs = Object.keys(node.props).reduce((carry, name) => {
        const value = String(node.props[name]);
        if (["key", "head-key"].includes(name)) {
          return carry;
        } else if (value === "") {
          return carry + ` ${name}`;
        } else {
          return carry + ` ${name}="${escape(value)}"`;
        }
      }, "");
      return `<${String(node.type)}${attrs}>`;
    },
    renderTagChildren(node) {
      const { children } = node;
      if (typeof children === "string") {
        return children;
      }
      if (Array.isArray(children)) {
        return children.reduce((html, child) => {
          return html + this.renderTag(child);
        }, "");
      }
      return "";
    },
    isFunctionNode(node) {
      return typeof node.type === "function";
    },
    isComponentNode(node) {
      return typeof node.type === "object";
    },
    isCommentNode(node) {
      return /(comment|cmt)/i.test(node.type.toString());
    },
    isFragmentNode(node) {
      return /(fragment|fgt|symbol\(\))/i.test(node.type.toString());
    },
    isTextNode(node) {
      return /(text|txt)/i.test(node.type.toString());
    },
    renderTag(node) {
      if (this.isTextNode(node)) {
        return String(node.children);
      } else if (this.isFragmentNode(node)) {
        return "";
      } else if (this.isCommentNode(node)) {
        return "";
      }
      let html = this.renderTagStart(node);
      if (node.children) {
        html += this.renderTagChildren(node);
      }
      if (!this.isUnaryTag(node)) {
        html += `</${String(node.type)}>`;
      }
      return html;
    },
    addTitleElement(elements) {
      if (this.title && !elements.find((tag) => tag.startsWith("<title"))) {
        elements.push(`<title ${this.provider.preferredAttribute()}>${this.title}</title>`);
      }
      return elements;
    },
    renderNodes(nodes) {
      const elements = nodes.flatMap((node) => this.resolveNode(node)).map((node) => this.renderTag(node)).filter((node) => node);
      return this.addTitleElement(elements);
    },
    resolveNode(node) {
      if (this.isFunctionNode(node)) {
        return this.resolveNode(node.type());
      } else if (this.isComponentNode(node)) {
        console.warn(`Using components in the <Head> component is not supported.`);
        return [];
      } else if (this.isTextNode(node) && node.children) {
        return node;
      } else if (this.isFragmentNode(node) && node.children) {
        return node.children.flatMap((child) => this.resolveNode(child));
      } else if (this.isCommentNode(node)) {
        return [];
      } else {
        return node;
      }
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var head_default = Head;
var resolveHTMLElement = (value, fallback) => {
  if (!value) {
    return fallback;
  }
  if (typeof value === "string") {
    return document.querySelector(value);
  }
  if (typeof value === "function") {
    return value() || null;
  }
  return fallback;
};
defineComponent({
  name: "InfiniteScroll",
  slots: Object,
  props: {
    data: {
      type: String,
      required: true
    },
    buffer: {
      type: Number,
      default: 0
    },
    onlyNext: {
      type: Boolean,
      default: false
    },
    onlyPrevious: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: "div"
    },
    manual: {
      type: Boolean,
      default: false
    },
    manualAfter: {
      type: Number,
      default: 0
    },
    preserveUrl: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: void 0
    },
    itemsElement: {
      type: [String, Function, Object],
      default: null
    },
    startElement: {
      type: [String, Function, Object],
      default: null
    },
    endElement: {
      type: [String, Function, Object],
      default: null
    }
  },
  inheritAttrs: false,
  setup(props, { slots, attrs, expose }) {
    const itemsElementRef = ref(null);
    const startElementRef = ref(null);
    const endElementRef = ref(null);
    const itemsElement = computed(
      () => resolveHTMLElement(props.itemsElement, itemsElementRef.value)
    );
    const scrollableParent = computed(() => getScrollableParent(itemsElement.value));
    const startElement = computed(
      () => resolveHTMLElement(props.startElement, startElementRef.value)
    );
    const endElement = computed(() => resolveHTMLElement(props.endElement, endElementRef.value));
    const loadingPrevious = ref(false);
    const loadingNext = ref(false);
    const requestCount = ref(0);
    const {
      dataManager,
      elementManager,
      flush: flushInfiniteScroll
    } = useInfiniteScroll({
      // Data
      getPropName: () => props.data,
      inReverseMode: () => props.reverse,
      shouldFetchNext: () => !props.onlyPrevious,
      shouldFetchPrevious: () => !props.onlyNext,
      shouldPreserveUrl: () => props.preserveUrl,
      // Elements
      getTriggerMargin: () => props.buffer,
      getStartElement: () => startElement.value,
      getEndElement: () => endElement.value,
      getItemsElement: () => itemsElement.value,
      getScrollableParent: () => scrollableParent.value,
      // Request callbacks
      onBeforePreviousRequest: () => loadingPrevious.value = true,
      onBeforeNextRequest: () => loadingNext.value = true,
      onCompletePreviousRequest: () => {
        requestCount.value = dataManager.getRequestCount();
        loadingPrevious.value = false;
      },
      onCompleteNextRequest: () => {
        requestCount.value = dataManager.getRequestCount();
        loadingNext.value = false;
      }
    });
    requestCount.value = dataManager.getRequestCount();
    const autoLoad = computed(() => !manualMode.value);
    const manualMode = computed(
      () => props.manual || props.manualAfter > 0 && requestCount.value >= props.manualAfter
    );
    const scrollToBottom = () => {
      if (scrollableParent.value) {
        scrollableParent.value.scrollTo({
          top: scrollableParent.value.scrollHeight,
          behavior: "instant"
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "instant"
        });
      }
    };
    onMounted(() => {
      elementManager.setupObservers();
      elementManager.processServerLoadedElements(dataManager.getLastLoadedPage());
      const shouldAutoScroll = props.autoScroll !== void 0 ? props.autoScroll : props.reverse;
      if (shouldAutoScroll) {
        scrollToBottom();
      }
      if (autoLoad.value) {
        elementManager.enableTriggers();
      }
    });
    onUnmounted(flushInfiniteScroll);
    watch(
      () => [autoLoad.value, props.onlyNext, props.onlyPrevious],
      ([enabled]) => {
        enabled ? elementManager.enableTriggers() : elementManager.disableTriggers();
      }
    );
    expose({
      fetchNext: dataManager.fetchNext,
      fetchPrevious: dataManager.fetchPrevious,
      hasPrevious: dataManager.hasPrevious,
      hasNext: dataManager.hasNext
    });
    return () => {
      var _a, _b, _c;
      const renderElements = [];
      const sharedExposed = {
        loadingPrevious: loadingPrevious.value,
        loadingNext: loadingNext.value,
        hasPrevious: dataManager.hasPrevious(),
        hasNext: dataManager.hasNext()
      };
      if (!props.startElement) {
        const headerAutoMode = autoLoad.value && !props.onlyNext;
        const exposedPrevious = {
          loading: loadingPrevious.value,
          fetch: dataManager.fetchPrevious,
          autoMode: headerAutoMode,
          manualMode: !headerAutoMode,
          hasMore: dataManager.hasPrevious(),
          ...sharedExposed
        };
        renderElements.push(
          h(
            "div",
            { ref: startElementRef },
            slots.previous ? slots.previous(exposedPrevious) : loadingPrevious.value ? (_a = slots.loading) == null ? void 0 : _a.call(slots, exposedPrevious) : void 0
          )
        );
      }
      renderElements.push(
        h(
          props.as,
          { ...attrs, ref: itemsElementRef },
          (_b = slots.default) == null ? void 0 : _b.call(slots, {
            loading: loadingPrevious.value || loadingNext.value,
            loadingPrevious: loadingPrevious.value,
            loadingNext: loadingNext.value
          })
        )
      );
      if (!props.endElement) {
        const footerAutoMode = autoLoad.value && !props.onlyPrevious;
        const exposedNext = {
          loading: loadingNext.value,
          fetch: dataManager.fetchNext,
          autoMode: footerAutoMode,
          manualMode: !footerAutoMode,
          hasMore: dataManager.hasNext(),
          ...sharedExposed
        };
        renderElements.push(
          h(
            "div",
            { ref: endElementRef },
            slots.next ? slots.next(exposedNext) : loadingNext.value ? (_c = slots.loading) == null ? void 0 : _c.call(slots, exposedNext) : void 0
          )
        );
      }
      return h(Fragment, {}, props.reverse ? [...renderElements].reverse() : renderElements);
    };
  }
});
var noop2 = () => {
};
defineComponent({
  name: "Link",
  props: {
    as: {
      type: [String, Object],
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: false
    },
    preserveScroll: {
      type: [Boolean, String, Function],
      default: false
    },
    preserveState: {
      type: [Boolean, String, Function],
      default: null
    },
    preserveUrl: {
      type: Boolean,
      default: false
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: false
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: false
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: noop2
    },
    onProgress: {
      type: Function,
      default: noop2
    },
    onFinish: {
      type: Function,
      default: noop2
    },
    onBefore: {
      type: Function,
      default: noop2
    },
    onCancel: {
      type: Function,
      default: noop2
    },
    onSuccess: {
      type: Function,
      default: noop2
    },
    onError: {
      type: Function,
      default: noop2
    },
    onCancelToken: {
      type: Function,
      default: noop2
    },
    onPrefetching: {
      type: Function,
      default: noop2
    },
    onPrefetched: {
      type: Function,
      default: noop2
    },
    cacheTags: {
      type: [String, Array],
      default: () => []
    },
    viewTransition: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const inFlightCount = ref(0);
    const hoverTimeout = ref();
    const prefetchModes = computed(() => {
      if (props.prefetch === true) {
        return ["hover"];
      }
      if (props.prefetch === false) {
        return [];
      }
      if (Array.isArray(props.prefetch)) {
        return props.prefetch;
      }
      return [props.prefetch];
    });
    const cacheForValue = computed(() => {
      if (props.cacheFor !== 0) {
        return props.cacheFor;
      }
      if (prefetchModes.value.length === 1 && prefetchModes.value[0] === "click") {
        return 0;
      }
      return config.get("prefetch.cacheFor");
    });
    onMounted(() => {
      if (prefetchModes.value.includes("mount")) {
        prefetch();
      }
    });
    onUnmounted(() => {
      clearTimeout(hoverTimeout.value);
    });
    const method = computed(
      () => isUrlMethodPair(props.href) ? props.href.method : (props.method ?? "get").toLowerCase()
    );
    const as = computed(() => {
      if (typeof props.as !== "string" || props.as.toLowerCase() !== "a") {
        return props.as;
      }
      return method.value !== "get" ? "button" : props.as.toLowerCase();
    });
    const mergeDataArray = computed(
      () => mergeDataIntoQueryString(
        method.value,
        isUrlMethodPair(props.href) ? props.href.url : props.href,
        props.data || {},
        props.queryStringArrayFormat
      )
    );
    const href = computed(() => mergeDataArray.value[0]);
    const data = computed(() => mergeDataArray.value[1]);
    const elProps = computed(() => {
      if (as.value === "button") {
        return { type: "button" };
      }
      if (as.value === "a" || typeof as.value !== "string") {
        return { href: href.value };
      }
      return {};
    });
    const baseParams = computed(() => ({
      data: data.value,
      method: method.value,
      replace: props.replace,
      preserveScroll: props.preserveScroll,
      preserveState: props.preserveState ?? method.value !== "get",
      preserveUrl: props.preserveUrl,
      only: props.only,
      except: props.except,
      headers: props.headers,
      async: props.async
    }));
    const visitParams = computed(() => ({
      ...baseParams.value,
      viewTransition: props.viewTransition,
      onCancelToken: props.onCancelToken,
      onBefore: props.onBefore,
      onStart: (visit) => {
        var _a;
        inFlightCount.value++;
        (_a = props.onStart) == null ? void 0 : _a.call(props, visit);
      },
      onProgress: props.onProgress,
      onFinish: (visit) => {
        var _a;
        inFlightCount.value--;
        (_a = props.onFinish) == null ? void 0 : _a.call(props, visit);
      },
      onCancel: props.onCancel,
      onSuccess: props.onSuccess,
      onError: props.onError
    }));
    const prefetch = () => {
      router.prefetch(
        href.value,
        {
          ...baseParams.value,
          onPrefetching: props.onPrefetching,
          onPrefetched: props.onPrefetched
        },
        {
          cacheFor: cacheForValue.value,
          cacheTags: props.cacheTags
        }
      );
    };
    const regularEvents = {
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      }
    };
    const prefetchHoverEvents = {
      onMouseenter: () => {
        hoverTimeout.value = setTimeout(() => {
          prefetch();
        }, config.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(hoverTimeout.value);
      },
      onClick: regularEvents.onClick
    };
    const prefetchClickEvents = {
      onMousedown: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onKeydown: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onMouseup: (event) => {
        event.preventDefault();
        router.visit(href.value, visitParams.value);
      },
      onKeyup: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      },
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
        }
      }
    };
    return () => {
      return h(
        as.value,
        {
          ...attrs,
          ...elProps.value,
          "data-loading": inFlightCount.value > 0 ? "" : void 0,
          ...(() => {
            if (prefetchModes.value.includes("hover")) {
              return prefetchHoverEvents;
            }
            if (prefetchModes.value.includes("click")) {
              return prefetchClickEvents;
            }
            return regularEvents;
          })()
        },
        slots
      );
    };
  }
});
defineComponent({
  name: "WhenVisible",
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loaded: false,
      fetching: false,
      observer: null
    };
  },
  unmounted() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        var _a;
        if (!entries[0].isIntersecting) {
          return;
        }
        if (!this.$props.always) {
          (_a = this.observer) == null ? void 0 : _a.disconnect();
        }
        if (this.fetching) {
          return;
        }
        this.fetching = true;
        const reloadParams = this.getReloadParams();
        router.reload({
          ...reloadParams,
          onStart: (e) => {
            var _a2;
            this.fetching = true;
            (_a2 = reloadParams.onStart) == null ? void 0 : _a2.call(reloadParams, e);
          },
          onFinish: (e) => {
            var _a2;
            this.loaded = true;
            this.fetching = false;
            (_a2 = reloadParams.onFinish) == null ? void 0 : _a2.call(reloadParams, e);
          }
        });
      },
      {
        rootMargin: `${this.$props.buffer}px`
      }
    );
    this.observer.observe(this.$el.nextSibling);
  },
  methods: {
    getReloadParams() {
      if (this.$props.data) {
        return {
          only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data]
        };
      }
      if (!this.$props.params) {
        throw new Error("You must provide either a `data` or `params` prop.");
      }
      return this.$props.params;
    }
  },
  render() {
    const els = [];
    if (this.$props.always || !this.loaded) {
      els.push(h(this.$props.as));
    }
    if (!this.loaded) {
      els.push(this.$slots.fallback ? this.$slots.fallback() : null);
    } else if (this.$slots.default) {
      els.push(this.$slots.default());
    }
    return els;
  }
});
var config = config$1.extend({});
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page2 = pages[p];
    if (typeof page2 === "undefined") {
      continue;
    }
    return typeof page2 === "function" ? page2() : page2;
  }
  throw new Error(`Page not found: ${path}`);
}
function r() {
  return r = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r2 = arguments[e];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t[n2] = r2[n2]);
    }
    return t;
  }, r.apply(null, arguments);
}
class n {
  constructor(t, e, r2) {
    var n2, i2;
    this.name = t, this.definition = e, this.bindings = null != (n2 = e.bindings) ? n2 : {}, this.wheres = null != (i2 = e.wheres) ? i2 : {}, this.config = r2;
  }
  get template() {
    const t = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t ? "/" : t;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t, e;
    return null != (t = null == (e = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e.map((t2) => ({ name: t2.replace(/{|\??}/g, ""), required: !/\?}$/.test(t2) }))) ? t : [];
  }
  matchesUrl(e) {
    var r2;
    if (!this.definition.methods.includes("GET")) return false;
    const n2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t, e2, r3, n3) => {
      var i3;
      const s3 = `(?<${r3}>${(null == (i3 = this.wheres[r3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e2}${s3})?` : `${e2}${s3}`;
    }).replace(/^\w+:\/\//, ""), [i2, s2] = e.replace(/^\w+:\/\//, "").split("?"), o2 = null != (r2 = new RegExp(`^${n2}/?$`).exec(i2)) ? r2 : new RegExp(`^${n2}/?$`).exec(decodeURI(i2));
    if (o2) {
      for (const t in o2.groups) o2.groups[t] = "string" == typeof o2.groups[t] ? decodeURIComponent(o2.groups[t]) : o2.groups[t];
      return { params: o2.groups, query: parse(s2) };
    }
    return false;
  }
  compile(t) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e, r2, n2) => {
      var i2, s2;
      if (!n2 && [null, void 0].includes(t[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (s2 = t[r2]) ? s2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (i2 = t[r2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class i extends String {
  constructor(t, e, i2 = true, s2) {
    if (super(), this.t = null != s2 ? s2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !this.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), this.t = globalThis.Ziggy), this.t = r({}, this.t, { absolute: i2 }), t) {
      if (!this.t.routes[t]) throw new Error(`Ziggy error: route '${t}' is not in the route list.`);
      this.i = new n(t, this.t.routes[t], this.t), this.o = this.u(e);
    }
  }
  toString() {
    const t = Object.keys(this.o).filter((t2) => !this.i.parameterSegments.some(({ name: e }) => e === t2)).filter((t2) => "_query" !== t2).reduce((t2, e) => r({}, t2, { [e]: this.o[e] }), {});
    return this.i.compile(this.o) + stringify(r({}, t, this.o._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t2, e) => "boolean" == typeof t2 ? Number(t2) : e(t2) });
  }
  h(t) {
    t ? this.t.absolute && t.startsWith("/") && (t = this.l().host + t) : t = this.m();
    let e = {};
    const [i2, s2] = Object.entries(this.t.routes).find(([r2, i3]) => e = new n(r2, i3, this.t).matchesUrl(t)) || [void 0, void 0];
    return r({ name: i2 }, e, { route: s2 });
  }
  m() {
    const { host: t, pathname: e, search: r2 } = this.l();
    return (this.t.absolute ? t + e : e.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(t, e) {
    const { name: i2, params: s2, query: o2, route: u } = this.h();
    if (!t) return i2;
    const h2 = new RegExp(`^${t.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(i2);
    if ([null, void 0].includes(e) || !h2) return h2;
    const a = new n(i2, u, this.t);
    e = this.u(e, a);
    const l = r({}, s2, o2);
    if (Object.values(e).every((t2) => !t2) && !Object.values(l).some((t2) => void 0 !== t2)) return true;
    const c = (t2, e2) => Object.entries(t2).every(([t3, r2]) => Array.isArray(r2) && Array.isArray(e2[t3]) ? r2.every((r3) => e2[t3].includes(r3) || e2[t3].includes(decodeURIComponent(r3))) : "object" == typeof r2 && "object" == typeof e2[t3] && null !== r2 && null !== e2[t3] ? c(r2, e2[t3]) : e2[t3] == r2 || e2[t3] == decodeURIComponent(r2));
    return c(e, l);
  }
  l() {
    var t, e, r2, n2, i2, s2;
    const { host: o2 = "", pathname: u = "", search: h2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t = null == (e = this.t.location) ? void 0 : e.host) ? t : o2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : u, search: null != (i2 = null == (s2 = this.t.location) ? void 0 : s2.search) ? i2 : h2 };
  }
  get params() {
    const { params: t, query: e } = this.h();
    return r({}, t, e);
  }
  get routeParams() {
    return this.h().params;
  }
  get queryParams() {
    return this.h().query;
  }
  has(t) {
    return this.t.routes.hasOwnProperty(t);
  }
  u(t = {}, e = this.i) {
    null != t || (t = {}), t = ["string", "number"].includes(typeof t) ? [t] : t;
    const n2 = e.parameterSegments.filter(({ name: t2 }) => !this.t.defaults[t2]);
    return Array.isArray(t) ? t = t.reduce((t2, e2, i2) => r({}, t2, n2[i2] ? { [n2[i2].name]: e2 } : "object" == typeof e2 ? e2 : { [e2]: "" }), {}) : 1 !== n2.length || t[n2[0].name] || !t.hasOwnProperty(Object.values(e.bindings)[0]) && !t.hasOwnProperty("id") || (t = { [n2[0].name]: t }), r({}, this.p(e), this.$(t, e));
  }
  p(t) {
    return t.parameterSegments.filter(({ name: t2 }) => this.t.defaults[t2]).reduce((t2, { name: e }, n2) => r({}, t2, { [e]: this.t.defaults[e] }), {});
  }
  $(t, { bindings: e, parameterSegments: n2 }) {
    return Object.entries(t).reduce((t2, [i2, s2]) => {
      if (!s2 || "object" != typeof s2 || Array.isArray(s2) || !n2.some(({ name: t3 }) => t3 === i2)) return r({}, t2, { [i2]: s2 });
      if (!s2.hasOwnProperty(e[i2])) {
        if (!s2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${i2}' parameter is missing route model binding key '${e[i2]}'.`);
        e[i2] = "id";
      }
      return r({}, t2, { [i2]: s2[e[i2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function s(t, e, r2, n2) {
  const s2 = new i(t, e, r2, n2);
  return t ? s2.toString() : s2;
}
const o = { install(t, e) {
  const r2 = (t2, r3, n2, i2 = e) => s(t2, r3, n2, i2);
  parseInt(t.version) > 2 ? (t.config.globalProperties.route = r2, t.provide("route", r2)) : t.mixin({ methods: { route: r2 } });
} };
library.add(
  faBars,
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faMoon,
  faFileInvoiceDollar,
  faSun,
  faGlobe,
  faUser,
  faBell,
  faCog,
  faTrash,
  faEye,
  faFilePdf,
  faHome,
  faSignOutAlt,
  faClipboardList,
  faCalendarAlt,
  faSpinner,
  faEnvelope,
  faMailForward,
  faPaperPlane,
  faPaintBrush,
  faCheck,
  faLightbulb,
  faPalette,
  faDesktop,
  faSignature,
  faIdBadge,
  faPencilRuler,
  faLaptopCode,
  faCode,
  faShoppingCart,
  faBullhorn,
  faBoxOpen,
  faReceipt,
  faInbox,
  faCreditCard,
  faArrowsRotate,
  faUsers,
  faChartColumn,
  faHospital,
  faCircleCheck,
  faHandshake,
  faCloud,
  faChartLine,
  faPhone,
  faClock
);
const appName = "Neema Tradings";
createServer(
  (page2) => createInertiaApp({
    page: page2,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/AboutUS.vue": () => import("./assets/AboutUS-CVJAOp1S.js"), "./Pages/AcceptInvitation.vue": () => import("./assets/AcceptInvitation-6Gbxk1wK.js"), "./Pages/Admin.vue": () => import("./assets/Admin-DTD06SuQ.js"), "./Pages/ContactUs.vue": () => import("./assets/ContactUs-CQoBLGgd.js"), "./Pages/Faq.vue": () => import("./assets/Faq-DzjxQ1oO.js"), "./Pages/Home.vue": () => import("./assets/Home-DTkNY_Yv.js"), "./Pages/InvitationExpired.vue": () => import("./assets/InvitationExpired-CtJSmKxo.js"), "./Pages/Services/DigitalMarketing.vue": () => import("./assets/DigitalMarketing-FkVdRxc8.js"), "./Pages/Services/ECommerce.vue": () => import("./assets/ECommerce-Byhb7B8D.js"), "./Pages/Services/GraphicDesign.vue": () => import("./assets/GraphicDesign-dd8A7OEG.js"), "./Pages/Services/IdentityDesign.vue": () => import("./assets/IdentityDesign-DIgAk1TV.js"), "./Pages/Services/ProductDesign.vue": () => import("./assets/ProductDesign-CgxSauop.js"), "./Pages/Services/WebDesign.vue": () => import("./assets/WebDesign-CyMyfypd.js") })),
    setup({ App: App2, props, plugin: plugin2 }) {
      return createSSRApp({ render: () => h(App2, props) }).use(plugin2).use(o, {
        ...page2.props.ziggy,
        location: new URL(page2.props.ziggy.location)
      }).component("Head", head_default).component("font-awesome-icon", FontAwesomeIcon);
    }
  })
);
export {
  head_default as h
};
