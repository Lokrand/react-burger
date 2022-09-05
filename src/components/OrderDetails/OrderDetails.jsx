import { Modal } from "../Modal/Modal";

export const OrderDetails = ({ actives, setActives }) => {
  return (
    <Modal active={actives} setActive={setActives}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor pariatur
        sunt tempore, nulla, obcaecati eum quas hic eligendi sequi
        necessitatibus cumque id doloribus molestiae iure ratione non,
        asperiores sint quasi.
      </p>
    </Modal>
  );
};
