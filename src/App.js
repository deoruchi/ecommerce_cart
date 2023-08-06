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
    const index = data.cart.findIndex((items) => {
      return items.cardId == cardifo.cardId;
    });

    if (index !== -1) {
      console.log("dataexists");
      // taking the cart object of the specified index and change its contents
      //update the object present at the index i
      setData((prevData) => {
        const dataUpdata = [...prevData.cart];
        dataUpdata[index].count = cardifo.count;

        return {
          ...prevData,
          cart: dataUpdata,
        };
      });
    } else {
      setData((datas) => {
        return {
          ...datas,
          cart: [...datas.cart, cardifo],
        };
      });
    }
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

  console.log(data);
  return (
    <div className="App">
      <NavBar cartData={data} remove={removeFromCart} />
      <article className="flex flex-col px-3  md:px-0 md:flex-row md:justify-evenly  lg:mx-36 md:mx-20 md:py-9 md:gap-5 lg:gap-1">
        <ProductImage />
        <DetailSection addCart={addintoCart} />
      </article>
    </div>
  );
}

export default App;
