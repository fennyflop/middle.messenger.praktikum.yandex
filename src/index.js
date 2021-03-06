import SignInPage from "./pages/sign-in/sign-in.js";
import SignUpPage from "./pages/sign-up/sign-up.js";
import ServerErrorPage from "./pages/500/500.js";
import PageNotFound from "./pages/404/404.js";
import Chats from "./pages/chats/chats.js";
import Profile from "./pages/profile/profile.js";
import ChangePassword from "./pages/change-password/change-password.js";

import "./vendor/styles.scss";

const main = document.querySelector(".main");

const IS_PRODUCTION = false;

const routes = {
  "/sign-in": SignInPage,
  "/sign-up": SignUpPage,
  "/500": ServerErrorPage,
  "/chats": Chats,
  "/profile": Profile,
  "/change-password": ChangePassword,
  "/": `<a href="/sign-up">signup</a>---<a href="/sign-in">signin</a>---<a href="/chats">chats</a>---<a href="/profile">profile</a>---<a href="/change-password">change password</a>---<a href="/500">server error</a>`,
};

// netlify раздаёт статичные файлы на каждый route. Т.к. у нас роутинг динамичный, то так не работает на деплое
if (IS_PRODUCTION) {
  main.innerHTML = SignInPage;
} else {
  window.onload = function (evt) {
    const path = window.location.pathname;
    if (Object.keys(routes).find((el) => el === path)) {
      main.innerHTML = routes[path];
    } else {
      main.innerHTML = PageNotFound;
    }
  };
}
