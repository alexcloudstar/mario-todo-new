export const generateRandomId = (): string =>
  (Math.random() * 999).toFixed().toString();

export const setUser = (username: string): void =>
  localStorage.setItem('authorUsername', username);

export const getUser = (): string | null =>
  localStorage.getItem('authorUsername');
