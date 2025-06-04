export const setLocalStorageItem = (item, value) => {
  localStorage.setItem(item, value);
};
export const getLocalStorageItem = (item) => {
  return localStorage.getItem(item);
};
export const removeLocalStorageItem = (item) => {
  return localStorage.removeItem(item);
};
