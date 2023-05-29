import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart";

export const Product = (props) => {
  const { id, image, name, desc, price } = props;

  const dispatch = useDispatch();

  return (
    <div key={id}>
      <div className="card box" key={id}>
        <div className="card-image">
          <img className="image is-128x128" src={image} />
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-6">{name}</p>
            <p className="subtitle is-6 mt-2">{desc}</p>
            <p className="subtitle is-6 mt-2">Price : ₹ {price}</p>
          </div>
          <button
            className="button is-info mt-4"
            id={id}
            onClick={() => dispatch(addToCart(props))}
          >
            Add toCart
          </button>
        </div>
      </div>
    </div>
  );
};
