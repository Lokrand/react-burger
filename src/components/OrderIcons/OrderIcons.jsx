import React from "react";
import { Text } from "../Text/Text";
import styles from "./OrderIcons.module.css";


export const OrderIcons = ({ icons, className = "" }) => {
  let zIndex = 999;
  let left = 15;
  return (
    <div className={`${styles.icons} ${className}`}>
      {icons.map((el) => {
        zIndex--;
        left -= 15;
        return (
          <div key={el.id}>
            {el.count > 1 ? (
              <div
                className={styles.item}
                style={{ zIndex: zIndex, left: `${left}px` }}
              >
                <div className={styles.counter}>
                  <Text type="digits" size="small">
                    +{el.count}
                  </Text>
                </div>
                <img src={el.img} className={styles.icon} />
              </div>
            ) : (
              <img
                src={el.img}
                className={styles.icon}
                style={{ zIndex: zIndex, left: `${left}px` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
