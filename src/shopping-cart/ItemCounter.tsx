import { useState } from "react";
// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
  productName: string;
  quantity: number | undefined;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  // const handleClick = () => {
  //   console.log(`click ${productName}`);
  // };

  return (
    <section className={styles["item-row"]}>
      <span
        className={styles["item-text"]}
        style={{ color: count === 1 ? "red" : "black" }}
      >
        {productName}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
