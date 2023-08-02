import { useState } from "react";

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
    <section>
      <small></small>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>some radom texts</p>
      <div>
        <p>$125.00</p>
        <p>50%</p>
      </div>
      <p>$250.00</p>
      {/* count function */}
      <div>
        <div>
          <button onClick={decreament}>-</button>
          {count}
          <button onClick={increament}>+</button>
        </div>
        <button
          onClick={() =>
            addCart({
              cardId: "uui23",
              count: `${count}`,
              price: "125",
              images: {},
              heading: "Fall Limited Edition Sneakers",
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
