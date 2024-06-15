import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import './style.css'

function App() {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
