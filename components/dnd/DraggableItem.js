"use client";

import { useDrag } from "react-dnd";
import styles from "./DraggableItem.module.scss";

const DraggableItem = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "ITEM",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={styles.item}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
    </div>
  );
};

export default DraggableItem;
