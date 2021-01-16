import { cities } from "../../context/cities";
import { useContext } from "react";
import { ForecastContext } from "../ForecastContext/ForecastContext";
import styles from './Input.module.css'

const Input = () => {
  const { setSearchKey } = useContext(ForecastContext);

  const changeHandler = (e) => {
    setSearchKey(e.target.value);
  };

  return (

    <form className={styles.input} onChange={changeHandler}>
      {cities}
    </form>
 
 
  );
};

export default Input;