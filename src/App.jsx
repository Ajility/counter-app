import "./App.css";
import Counter from "./components/Counter";
import { Helmet } from "react-helmet-async";
import AppRouter from "./routes";
const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
