import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numOfIcecream = useSelector((state) => state.icecream.numberOfIcecream);
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  return (
    <div>
      <h2>Number of ice-creams -{numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice-cream</button>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      <button onClick={() => dispatch(restocked(value))}>
        Restock ice-cream
      </button>
    </div>
  );
}

export default IcecreamView;
