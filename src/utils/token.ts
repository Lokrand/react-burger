export const isTokenExpired = (token:string):boolean|undefined => {
  if (token) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
