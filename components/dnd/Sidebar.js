"use client";

import { useDrag } from "react-dnd";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const inputItems = [
    { id: 1, type: "text", label: "Text Input" },
    { id: 2, type: "checkbox", label: "Checkbox" },
  ];

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.title}>Elements</div>

        {inputItems.map((item) => {
          const [{ isDragging }, dragRef] = useDrag(() => ({
            type: "ITEM",
            item,
            collect: (monitor) => ({
              isDragging: monitor.isDragging(),
            }),
          }));

          return (
            <div
              ref={dragRef}
              key={item.id}
              className={styles.draggableItem}
              style={{ opacity: isDragging ? 0.5 : 1 }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
