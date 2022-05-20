import React from "react";
import styles from "./Loading.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col align-self-center">
          <AiOutlineLoading3Quarters
            className={styles.rotating}
            fontSize="1.5em"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
