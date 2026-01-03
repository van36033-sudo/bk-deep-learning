import { storage } from './storage';

const CHAT_KEY = 'bk_chat_messages';

export const getChatMessages = () => storage.get(CHAT_KEY, []);

export const addChatMessage = (message) => {
  const messages = getChatMessages();
  const next = [...messages, message];
  storage.set(CHAT_KEY, next);
  return next;
};
