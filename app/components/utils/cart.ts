
interface Flower {
  nameEN: string;
  nameKA: string;
  price: string;
  img: string;
  quantity?: number;
}


export const getCart = (): Flower[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart: Flower[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (item: { nameEN: string; nameKA: string; price: number; img: string }) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingItem = cart.find((f: any) => f.nameEN === item.nameEN);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};



export const removeFromCart = (nameEN: string) => {
  let cart = getCart();
  cart = cart.filter((item) => item.nameEN !== nameEN);
  saveCart(cart);
};

export const clearCart = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("cart");
};
