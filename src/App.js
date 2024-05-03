import { useDispatch, useSelector } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  getLatestNews,
} from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  const handleGetNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleGetNews}>Get News</button>
      <div>{count}</div>
    </div>
  );
};
export default App;
