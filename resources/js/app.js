import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import '../css/styles.css';
import '../css/custom.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';

// FontAwesome setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 

import { 
    faBars, 
    faMoon, 
    faSun, 
    faGlobe, 
    faUser, 
    faBell, 
    faCog, 
    faHome,
    faTrash,
    faFilePdf, 
    faSignOutAlt,
    faCalendarAlt,
    faClipboardList,
    faEye,
    faSpinner,
    faPaperPlane,
    faMailForward,
    faEnvelope,
    faPaintBrush,
    faFileInvoiceDollar,
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
    faClock,
    faShieldHalved,
    faHandHoldingHeart,
    faCoins,
    faDatabase,
    faBuilding,
    faFileContract,
    faCalendarCheck,
    faGraduationCap,
    faMapMarkerAlt,
    faTimes,
    faUserTie,
    faBriefcase,
    faStar,

} from "@fortawesome/free-solid-svg-icons";

import { 
    faTiktok,
    faYoutube,
    faInstagram,
    faFacebook,
    faWhatsapp,
    faFacebookF,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt';
import { faInbox } from '@fortawesome/free-solid-svg-icons/faInbox';

// Add icons to library
library.add(
    faBars,
    faFacebook,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faYoutube,
    faTiktok, 
    faMoon,
    faFileInvoiceDollar, 
    faSun, 
    faGlobe, 
    faMapMarkerAlt,
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
    faClock,
    faShieldHalved,
    faHandHoldingHeart,
    faCoins,
    faDatabase,
    faBuilding,
    faFileContract,
    faCalendarCheck,
    faGraduationCap,
    faWhatsapp,
    faTimes,
    faUserTie,
    faBriefcase,
    faStar

);

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Head', Head)
            .component("font-awesome-icon", FontAwesomeIcon)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});