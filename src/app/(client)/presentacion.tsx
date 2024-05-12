import React from "react";
import styles from "./presentacion.module.css";
import { cn } from "@/lib/utils";

export default function Presentacion() {
  return (
    <div
      className={cn(
        styles.presentation,
        "fixed inset-0 z-50 bg-black flex justify-center items-center"
      )}
    >
      <div className={styles.box}>
        Bravazo
        <div className={styles.co}>
          <div className={styles.grow}></div>
          <div className={styles.ab}></div>
        </div>
      </div>
    </div>
  );
}
