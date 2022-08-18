import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleisCartOpen = () => setIsCartOpen((prevState) => !prevState);

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
