import { storage } from './storage';

const SESSION_KEY = 'bk_session';

export const getSession = () => storage.get(SESSION_KEY, null);

export const setSession = (session) => storage.set(SESSION_KEY, session);

export const clearSession = () => storage.remove(SESSION_KEY);

export const isAuthenticated = () => Boolean(getSession()?.token);

export const getRole = () => getSession()?.role ?? null;
