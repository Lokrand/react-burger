import React, { FC } from 'react';
import { TText } from '../../services/types/data';
import styles from "./Text.module.css";

export const Text:FC<TText> = ({
  size = "default",
  type = "main",
  inactive = false,
  children,
  className,
  id,
}) => {
  const classes = [
    "text",
    `text_type_${type}-${size}`,
    inactive ? "text_color_inactive" : undefined,
    className,
  ]
    .filter((el) => el)
    .join(" ");
  if (type === "digits" && size === "large") {
    return (
      <p className={`${classes} ${styles.text}`} id={id}>
        {children}
      </p>
    );
  } else {
    return (
      <p className={classes} id={id}>
        {children}
      </p>
    );
  }
};
