import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [sub_count, set_subCount] = useState(0);
  const [alh_count, set_alhCount] = useState(0);
  const [allahuAkbar, setAllahuAkbar] = useState(0);
  let sum = sub_count + alh_count + allahuAkbar;
  if (sum === 100) {
    console.log("Mashallah");
  }
  const handleIncrementSub = () => {
    sub_count < 33 && set_subCount((preValue) => preValue + 1);
  };

  const handleIncrementAlh = () => {
    alh_count < 33 && set_alhCount((preValue) => preValue + 1);
  };

  const handleIncrementAllahu = () => {
    allahuAkbar < 34 && setAllahuAkbar((preValue) => preValue + 1);
  };

  let allCountNumber = sub_count + alh_count + allahuAkbar;

  const handleResetSub = () => {
    set_subCount(0);
  };

  const handleResetAlh = () => {
    set_alhCount(0);
  };

  const handleResetAllahu = () => {
    setAllahuAkbar(0);
  };
  return (
    <section className="counter">
      <h1 className="counter__title">Tashbih Application</h1>
      <h1 className="counter__title--arabic">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
      </h1>
      <h1 className="counter__total--count">{allCountNumber}</h1>
      {/* <h1 className="counter__title">Tasbih Counter</h1> */}
      <div className="counter__container">
        <div className="counter__content card ">
          <h1 className="counter__output">{sub_count}</h1>
          <h1 className="counter__tasbih">سبحان الله</h1>
          <div className="counter__button">
            <button className="btn__button" onClick={handleIncrementSub}>
              Count
            </button>
            <button className="btn__button" onClick={handleResetSub}>
              Reset
            </button>
          </div>
        </div>
        <div className="counter__content card ">
          <h1 className="counter__output">{alh_count}</h1>
          <h1 className="counter__tasbih">ٱلْحَمْدُ لِلَّٰه</h1>
          <div className="counter__button">
            <button className="btn__button" onClick={handleIncrementAlh}>
              Count
            </button>
            <button className="btn__button" onClick={handleResetAlh}>
              Reset
            </button>
          </div>
        </div>
        <div className="counter__content card card-third">
          <h1 className="counter__output">{allahuAkbar}</h1>
          <h1 className="counter__tasbih">الله أكبر</h1>
          <div className="counter__button">
            <button className="btn__button" onClick={handleIncrementAllahu}>
              Count
            </button>
            <button className="btn__button" onClick={handleResetAllahu}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
