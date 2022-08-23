import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";
import { selectCartItems } from "../../store/cart/cartSelector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
