import { useState } from "react";
import DetailSection from "./ProductDetailPage/DetailSection";
import Cart from "./ProductDetailPage/Cart";
import ProductImage from "./ProductDetailPage/ProductImage";
import NavBar from "./ProductDetailPage/NavBar";
function App() {
  const [data, setData] = useState({
    cart: [],
  });
  /**cart{
   * cardId:"",
   * count:"",
   * price:"",
   * images:"",
   * heading:""
   * } */

  function addintoCart(cardifo) {
    setData((datas) => {
      return {
        ...datas,
        cart: [...datas.cart, cardifo],
      };
    });
  }

  function removeFromCart(cardID) {
    setData((datas) => {
      return {
        ...datas,
        cart: datas.cart.filter((items) => {
          return items.cardId !== cardID;
        }),
      };
    });
  }
  return (
    <div className="App">
      <NavBar />
      <ProductImage />
      <DetailSection addCart={addintoCart} />
      {/* <Cart cartData={data} /> */}
    </div>
  );
}

export default App;
