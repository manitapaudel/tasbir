import { Image } from "../types";

export const getLocalStorage = (key: string, initialValue: []) => {
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return initialValue;
  } else return JSON.parse(storedValue);
};

export const setLocalStorage = (key: string, value: Image[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};
