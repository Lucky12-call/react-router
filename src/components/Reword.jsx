import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/CustomReducer";

const Reword = () => {
  const reword = useSelector((state) => state.reword.rewords);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid white", padding: "20px" }}>
      <h2>Rewords Component</h2>
      <h2>Rewords: {reword} </h2>

      <button onClick={() => dispatch(increment())}>incrementReword+</button>
      <button onClick={() => dispatch(decrement())}>decrementReword-</button>
    </div>
  );
};

export default Reword;
