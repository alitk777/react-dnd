"use client";

import { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./MainWrapper.module.scss";

const MainWrapper = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => {
      setDroppedItems((prev) => [
        ...prev,
        {
          id: item.id,
          type: item.type,
          label: item.label || `Label ${prev.length + 1}`,
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <>
      <div
        ref={dropRef}
        className={styles.wrapper}
        style={{ backgroundColor: isOver ? "#f0f0f0" : "white" }}
      >
        {droppedItems.map((item, index) => (
          <div key={index} className={styles.inputContainer}>
            <label htmlFor={`input-${index}`} className={styles.label}>
              {item.label}
            </label>
            {item.type === "text" && (
              <input
                id={`input-${index}`}
                type="text"
                className={styles.input}
              />
            )}
            {item.type === "checkbox" && (
              <input
                id={`input-${index}`}
                type="checkbox"
                className={styles.checkbox}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MainWrapper;
