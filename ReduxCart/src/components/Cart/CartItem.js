import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, id } = props.item;

  const addOneItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCartHandler({
        id,
        title,
        price,
      })
    );
  };

  const removeOneItemToCartHandler = () => {
    dispatch(cartActions.removeItemFromCartHandler(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeOneItemToCartHandler}>-</button>
          <button onClick={addOneItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
