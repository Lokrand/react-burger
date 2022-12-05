export const generateKeys = ():string => {
  return `${Math.floor(Math.random() * 1000) + Date.now()}`;
};
