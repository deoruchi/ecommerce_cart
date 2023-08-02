export default function Cart({ cartData }) {
  if (cartData.cart.length === 0) console.log("no data yet");
  else console.log(cartData);
}
