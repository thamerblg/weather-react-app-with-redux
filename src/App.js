import { useSelector } from "react-redux";
import "./App.css";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent ";

function App() {
  const city = useSelector((state) => state.city.city);
  //const weather = useSelector((state) => state.weather.data);

  return (
    <div className="container">
      <span className="AppLabel">React Weather App</span>
      {city ? <WeatherComponent /> : <CityComponent />}
    </div>
  );
}

export default App;
