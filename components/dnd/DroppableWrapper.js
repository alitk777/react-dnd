"use client";

import { useDrop } from "react-dnd";
import { useState } from "react";
import styles from "./DroppableWrapper.module.scss";

const DroppableWrapper = ({ children }) => {
  const [items, setItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["text", "checkbox"],
    drop: (item) => addItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <div
        ref={drop}
        className={`${styles.wrapper} ${isOver ? styles.wrapperOver : ""}`}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.inputItem}>
            {item.type === "text" ? (
              <input type="text" placeholder="Text Input" />
            ) : (
              <input type="checkbox" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DroppableWrapper;
