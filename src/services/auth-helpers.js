import cookie from 'react-cookies';
import env from '@/env';

const COOKIE_DOMAIN = env.cookie.domain;
const COOKIE_ACCESS_TOKEN = `atk`;
const COOKIE_REFRESH_TOKEN = `rtk`;
// const MAXIMUM_EXPIRES_TIME = 2147483647;

const cookieSetting = {
  path: '/',
  domain: COOKIE_DOMAIN,
  // secure: true,
  // httpOnly: true,
  // expires: MAXIMUM_EXPIRES_TIME,
};

export const setCookie = (name, value) => cookie.save(name, value, cookieSetting);

export const getCookie = (name) => cookie.load(name);

const removeCookie = (name) => cookie.remove(name, cookieSetting);

class AuthHelpers {
  getRefreshToken() {
    return getCookie(COOKIE_REFRESH_TOKEN);
  }

  storeRefreshToken(refreshToken) {
    setCookie(COOKIE_REFRESH_TOKEN, refreshToken);
  }

  getAccessToken() {
    return getCookie(COOKIE_ACCESS_TOKEN);
  }

  storeAccessToken(accessToken) {
    setCookie(COOKIE_ACCESS_TOKEN, accessToken);
  }

  clearTokens() {
    removeCookie(COOKIE_ACCESS_TOKEN);
    removeCookie(COOKIE_REFRESH_TOKEN);
  }
}

const Instance = new AuthHelpers();
export default Instance;
