import "./App.css";
import FetchAPI from "./Concepts/FetchAPI";
import {
  TextComponentOneWithHover,
  TextComponentTwoWithHover,
} from "./Concepts/Higher-Order-Component";

function App() {
  return (
    <div className="App">
      <TextComponentOneWithHover text="Hello"></TextComponentOneWithHover>
      <TextComponentTwoWithHover text="World"></TextComponentTwoWithHover>
      <FetchAPI></FetchAPI>
    </div>
  );
}

export default App;
