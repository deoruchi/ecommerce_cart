import Bin from "../images/icon-delete.svg";
import "./Style/style1.css";
export default function Cart({ cartData, remove, toggle }) {
  console.log(cartData);
  console.log(cartData.cart);

  return (
    <section
      className={`cartPosition  bg-white w-1/4 absolute shadow-lg p-3 rounded-md md:left-1/2 ${
        toggle ? "hidden " : ""
      } ${cartData.cart.length ? "h-auto" : "h-1/3"}`}
    >
      <p className="font-medium text-xl border-b-2">Cart</p>
      {cartData.cart.length !== 0 ? (
        cartData.cart.map((items) => {
          return (
            <>
              <div className="relative flex flex-row justify-between items-center gap-2 my-3">
                <img src={items.images} width="50px"></img>
                <div>
                  <p>{items.heading}</p>
                  <p>
                    ${items.price} X {items.count}{" "}
                    <strong>${items.price * items.count}</strong>
                  </p>
                </div>
                <button onClick={() => remove(items.cardId)}>
                  <img src={Bin} alt="delete"></img>
                </button>
              </div>
            </>
          );
        })
      ) : (
        <div className=" text-slate-400 font-medium  absolute top-1/2 md:left-10 left-32">
          Your cart is empty
        </div>
      )}

      {cartData.cart.length !== 0 ? (
        <button className=" bg-orange-500 text-white font-medium w-full rounded-md ">
          Checkout
        </button>
      ) : (
        ""
      )}
    </section>
  );
}
