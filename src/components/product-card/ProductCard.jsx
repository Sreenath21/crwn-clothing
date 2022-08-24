import { useSelector, useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
