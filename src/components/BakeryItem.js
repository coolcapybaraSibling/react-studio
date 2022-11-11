// TODO: create a component that displays a single bakery item
import App from "../App";
import changeList from "../App";
import changePrice from "../App";

export default function BakeryItem(props) {
    return (
        <div class="BakeryItem">
            <img src={props.image}></img>
            <h2>
            {props.name}
            </h2> <br></br>
            <p>{props.description}</p>
            <button onClick={() => {changeList(props.name); changePrice(props.price);}}>
                Add to Cart
            </button>
        </div>
    );
}