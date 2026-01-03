const safeParse = (value, fallback) => {
  try {
    return JSON.parse(value) ?? fallback;
  } catch {
    return fallback;
  }
};

export const storage = {
  get(key, fallback) {
    if (typeof window === 'undefined') return fallback;
    const value = window.localStorage.getItem(key);
    if (value === null) return fallback;
    return safeParse(value, fallback);
  },
  set(key, value) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  }
};
