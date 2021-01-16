import "./App.css";
import Input from "./components/Input/Input";
import Forecasts from "./components/Forecast/Forecast";
import { ForecastProvider } from "./components/ForecastContext/ForecastContext";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Input />
        <Forecasts />
      </ForecastProvider>
    </div>
  );
}

export default App;
