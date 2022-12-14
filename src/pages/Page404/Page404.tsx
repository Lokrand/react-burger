import React, { FC } from "react";
import { Text } from "../../components/Text/Text";
import styles from "./Page404.module.css";

export const Page404: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <Text size="large" className="mb-5">
          Ошибочка...
        </Text>
        <Text>Страница не найдена</Text>
      </div>
    </div>
  );
};
