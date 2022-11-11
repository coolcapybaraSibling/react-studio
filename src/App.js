import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartList, setCartList] = useState([])
  function changePrice(price) {
    
  }
  function changeList(name) {

  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => {BakeryItem(item), <button onClick= {() => setTotalPrice(totalPrice + item.price)}>Click me</button>}
      // ( 
      //   // TODO: map bakeryData to BakeryItem components
      //   <p>item.name</p> // replace with BakeryItem component
      // )
      )
      }

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
