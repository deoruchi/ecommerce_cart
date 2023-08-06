export const [data, setData] = useState({
  cart: [],
});

/**cart{
 * cardId:"",
 * count:"",
 * price:"",
 * images:"",
 * heading:""
 * } */

const updateFunction = (state, action) => {
  if (action.type === "ADD") {
  }
};

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
