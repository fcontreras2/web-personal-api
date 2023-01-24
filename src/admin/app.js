import AuthLog from "./extensions/logo.svg";
import MenuLogo from "./extensions/logo_menu.png";
import favicon from "./extensions/favicon.ico";

const config = {
  auth: {
    logo: AuthLog,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: MenuLogo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
