import DragDropContextProvider from "../components/dnd/DragDropContextProvider";
import Sidebar from "../components/dnd/Sidebar";
import MainWrapper from "../components/dnd/MainWrapper";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <DragDropContextProvider>
      <div className={styles.container}>
        <Sidebar />
        <MainWrapper />
      </div>
    </DragDropContextProvider>
  );
}
