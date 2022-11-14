import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartMap, setCartMap] = useState({});
  function setCart(index) {
    let newCart = cartMap;
    if (index in cartMap) {
      newCart[index] += 1;
    } else {
      newCart[index] = 1;
    }
    setCartMap(newCart);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => {
        return (<BakeryItem setCart={setCart} setTotalPrice={setTotalPrice} item={item} index={index} currPrice={totalPrice}/>)})
        }

      <div>
        <h2>Cart</h2>
        {Object.keys(cartMap).map((key) =>{
        return(
          <div>
            {cartMap[key] + "x " + bakeryData[key].name}
          </div>
        )})}
        {/* TODO: render a list of items in the cart */}
        <p>{"Total Cost: " + totalPrice}</p>
      </div>
    </div>
  );
}

function BakeryItem(props) {
  return (
      <div class="BakeryItem">
          <img src={props.item.image}></img>
          <h2>
          {props.item.name}
          </h2> <br></br>
          <p>{props.item.description}</p>
          <p>{props.item.price}</p>
          <button onClick={() => {props.setTotalPrice(props.currPrice + props.item.price); props.setCart(props.index);}}>Add to Cart</button>
      </div>
  );
}

export default App;
