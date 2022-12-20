export const getCookie = (name: string): string | undefined => {
  if (!name) return;
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([$?*|{}\\^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: any, props?: any) => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export function deleteCookie(name: string): void {
  setCookie(name, null, { expires: -1 });
}
