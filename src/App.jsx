import "./App.css";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </>
  );
}

export default App;
