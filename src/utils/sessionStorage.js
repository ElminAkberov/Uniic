export const setSessionStorageItem = (item, value) => {
  sessionStorage.setItem(item, value);
};
export const getSessionStorageItem = (item) => {
  return sessionStorage.getItem(item);
};
