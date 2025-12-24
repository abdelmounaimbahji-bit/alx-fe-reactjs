// Save an item in localStorage
export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get an item from localStorage
export function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
