import { useTitle } from "../../hook";
import { useCart } from "../../context";

import { CartEmpty, CartList } from "./components"


export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  return (
    <main>
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
