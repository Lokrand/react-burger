import React from 'react'
import styles from './IngredientsModal.module.css'
import { Text } from "../Text/Text";

export const IngredientsModal = ({data}) => {
  return (
    <div>
      <div className={styles.title}>
        <Text size="large" className="mt-4">
          Детали ингредиента
        </Text>
      </div>
      <img src={data.image} alt={data.name} className={styles.image} />
      <Text size="medium" className="mt-4">
        {data.name}
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <Text className="mb-2" inactive>
            Калории,ккал
          </Text>
          <Text inactive type="digits">
            {data.calories}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Белки, г
          </Text>
          <Text inactive type="digits">
            {data.proteins}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Жиры, г
          </Text>
          <Text inactive type="digits">
            {data.fat}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Углеводы, г
          </Text>
          <Text inactive type="digits">
            {data.carbohydrates}
          </Text>
        </div>
      </div>
    </div>
  )
}
