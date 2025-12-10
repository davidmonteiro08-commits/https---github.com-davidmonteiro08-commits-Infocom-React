import { createContext, useReducer, useEffect } from "react";
import { cartReducer, initialState } from "./cartReducer";

const CartContext = createContext();


const CART_STORAGE_KEY = "infocom_cart"; // chave para o localStorage

// Função para inicializar o estado do carrinho a partir do localStorage
function initCartState() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    // se não há nada armazenado, retorna o estado inicial vazio
    if (!storedCart) {
      return initialState;
    }

    // tenta converter o JSON de volta para o estado
    return JSON.parse(storedCart);
  } catch (error) {
    console.error("Erro ao carregar o carrinho do localStorage:", error);
    // em caso de erro, retorna o estado inicial vazio
    return initialState;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, initCartState);

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  function addItem(product, quantity = 1) {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function updateQuantity(id, quantity) {
    dispatch({ type: "UPDATE_QTY", payload: { id, quantity } });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };