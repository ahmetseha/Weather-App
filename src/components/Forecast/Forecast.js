import { useContext, useEffect } from "react";
import { ForecastContext } from "../ForecastContext/ForecastContext";
import { search } from "../../context/search";
import styles from './Forecast.module.css'

function Forecast() {
  const { searchKey, results, setResults } = useContext(ForecastContext);

  useEffect(() => {
    search(searchKey).then((response) => {
      setResults(response);
    });
  }, [searchKey, setResults]);

  return (
    <div className={styles.forecast}>
      {results.map((result, index) => {
        return (
          <div
            className={index === 0 ? "forecastContainer-currentDay" : "forecastContainer"}
            key={index}
          >
          <div className={styles.days}>
           <div className={styles.content}>
            <p className={styles.date}>{result.dateTime}</p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${result.iconCode}.png`}
              alt="" />
            <div className={styles.highest}>
           
              <p className={styles.max}>
                {result.maxTemp}
                <span>&#176;</span>
              </p>
              <p className={styles.min}>
                {result.minTemp}
                <span>&#176;</span>
              </p>
            </div>
         
            </div>
          </div>
         
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;