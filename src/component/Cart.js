import {Link} from "react-router-dom"

function Cart() {
  return (
  <div className="mt-4 container" style={{ fontFamily:"URW Chancery L, cursive" }}>
<h2>Your Cart </h2> <Link to="/checkout" >Checkout</Link>

</div>
  );
}

export default Cart;
