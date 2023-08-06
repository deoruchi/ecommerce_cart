import Bin from "../images/icon-delete.svg";
export default function Cart({ cartData, remove, toggle }) {
  return (
    <section
      className={`bg-slate-100 absolute left-10 p-3 rounded-md md:left-1/2 ${
        toggle ? "hidden " : ""
      }"`}
    >
      <p className="font-medium text-xl border-b-2">Cart</p>
      {cartData.length !== 0 ? (
        cartData.cart.map((items) => {
          return (
            <>
              <div className="flex flex-row justify-between items-center gap-2 my-3">
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
              <button className="w-full  bg-orange-500 rounded-md text-white font-medium">
                Checkout
              </button>
            </>
          );
        })
      ) : (
        <div>ssdasfasd</div>
      )}
    </section>
  );
}
