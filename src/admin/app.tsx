import AuthLogo from "./extensions/auth-logo.png";
import MenuLogo from "./extensions/menu-logo.png";

export default {
  config: {

    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },

    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to SeekaHost',
        'Auth.form.welcome.subtitle': 'Please log in to continue',
        'HomePage.header.subtitle' : 'Welcome to SeekaHost administration panel',
        'Auth.form.email.placeholder' : 'e.g. kai@seekahost.co.uk',
        'HomePage.head.title' : 'Admin',
      },
    },
  },
  bootstrap() {},
};
