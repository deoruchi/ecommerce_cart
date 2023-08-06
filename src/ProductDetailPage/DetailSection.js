import { useState } from "react";
import Add from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";
import Cart from "../images/icon-cart.svg";
import Img1 from "../images/image-product-1-thumbnail.jpg";
export default function DetailSection({ addCart }) {
  const [count, setCount] = useState(0);
  //increamnet the values of the count
  function increament() {
    setCount(count + 1);
  }
  //decreament the values of the count
  function decreament() {
    if (count <= 0) setCount(0);
    else setCount(count - 1);
  }

  return (
    <section className="my-2 md:w-96 flex flex-col justify-center">
      <small className=" uppercase text-orange-600 font-medium tracking-wide">
        sneaker company
      </small>

      <p className="font-bold text-2xl md:text-4xl">
        Fall Limited Edition Sneakers
      </p>

      <p className=" text-gray-700 my-4 ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex  items-center ">
        <p className="text-xl font-bold">$125.00</p>
        <small className=" bg-orange-100  text-orange-600 px-2 text-center rounded-md mx-2">
          50%
        </small>
      </div>

      <p className=" line-through text-gray-400 text-xs">$250.00</p>

      {/* count function */}
      <div className=" flex justify-start items-center h-10 my-4">
        <div className=" bg-gray-100 rounded-md flex justify-between items-center w-36  p-2">
          <button onClick={decreament} className=" mx-2 w-3">
            <img src={Minus} alt="minus"></img>
          </button>
          <p className="w-3">{count}</p>

          <button onClick={increament} className="mx-2 w-3 ">
            <img src={Add} alt="add"></img>
          </button>
        </div>
        {/* submit button */}
        <button
          className="w-36 bg-orange-500  w-40 mx-3 p-2 rounded-md text-white flex justify-around items-center"
          onClick={() => {
            addCart({
              cardId: "uui23",
              count: `${count}`,
              price: "125",
              images: `${Img1}`,
              heading: "Fall Limited Edition Sneakers",
            });
            setCount(0);
          }}
        >
          <img src={Cart} alt="cart" className="w-5"></img>
          Add to Cart
        </button>
      </div>
    </section>
  );
}
