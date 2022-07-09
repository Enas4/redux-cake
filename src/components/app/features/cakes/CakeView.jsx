import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numOfCake = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cake - {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
    </div>
  );
}

export default CakeView;
