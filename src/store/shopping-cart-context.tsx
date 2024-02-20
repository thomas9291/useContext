import React, { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "@/dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: (id: any) => {},
  updatedItem: (productId: string, amount: number) => {},
});
interface Props {
  children: JSX.Element[] | JSX.Element;
}
export default function CartContextProvider(props: Props) {
  const [shoppingCardItems, setShoppingCartItems] = useState<any>({
    items: [],
  });
  function addItemToCart(id: any) {
    setShoppingCartItems((prev: any) => {
      const updatedItems = [...prev.items];
      const existingCarItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCarItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCarItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product!.title,
          price: product!.price,
          quantity: 1,
        });
      }
      return {
        items: updatedItems,
      };
    });
  }
  function updatedItem(productId: string, amount: number) {
    setShoppingCartItems((prev: any) => {
      const updatedItems = [...prev.items];
      const existingItemCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === productId
      );
      const updatedItem = { ...updatedItems[existingItemCartItemIndex] };
      updatedItem.quantity += amount;
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(existingItemCartItemIndex, 1);
      } else {
        updatedItems[existingItemCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
      };
    });
  }
  const ctxValue = {
    items: shoppingCardItems.items,
    addItemToCart: addItemToCart,
    updatedItem: updatedItem,
  };
  return (
    <CartContext.Provider value={ctxValue}>
      {props.children}
    </CartContext.Provider>
  );
}
