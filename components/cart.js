/* The bag: lives in localStorage so it survives page changes, and tells the page when it changes. */
const KEY = "fh-bag";
const MAX = 9;

function read() {
  try {
    const items = JSON.parse(window.localStorage.getItem(KEY) || "[]");
    return Array.isArray(items) ? items : [];
  } catch (e) {
    return [];
  }
}

function write(items) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch (e) {
    /* private mode: the bag still works for this page view */
    memory = items;
  }
  window.dispatchEvent(new Event("fh-cart"));
}

let memory = null;
export const getCart = () => (memory && !read().length ? memory : read());
export const cartCount = (items = getCart()) => items.reduce((n, i) => n + i.qty, 0);
export const cartTotal = (items = getCart()) => items.reduce((n, i) => n + i.qty * i.price, 0);

export function addItem(item) {
  const items = getCart();
  const found = items.find((i) => i.id === item.id);
  if (found) found.qty = Math.min(MAX, found.qty + 1);
  else items.push({ ...item, qty: 1 });
  write(items);
}

export function setQty(id, qty) {
  const items = getCart()
    .map((i) => (i.id === id ? { ...i, qty: Math.min(MAX, qty) } : i))
    .filter((i) => i.qty > 0);
  write(items);
}
