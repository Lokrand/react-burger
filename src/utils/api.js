import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "./cookie";

export const refreshTokenRequest = () => {
  (async () => {
    try {
      const res = await axios.post(`https://norma.nomoreparties.space/api/auth/token`, {
        token: getCookie("refreshToken"),
      });
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      setCookie("accessToken", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);
    } catch (err) {
      console.error(err.response);
    }
  })();
};