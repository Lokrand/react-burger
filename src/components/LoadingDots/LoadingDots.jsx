import React from "react";
import styles from "./LoadingDots.module.css";

export const LoadingDots = () => {
  return (
    <div className={styles.spinner_box}>
      <div className={styles.pulse_container}>
        <div className={`${styles.pulse_bubble} ${styles.pulse_bubble_1}`}></div>
        <div className={`${styles.pulse_bubble} ${styles.pulse_bubble_2}`}></div>
        <div className={`${styles.pulse_bubble} ${styles.pulse_bubble_3}`}></div>
      </div>
    </div>
  );
};
