import React from "react";
import styles from "./presentacion.module.css";
import { cn } from "@/lib/utils";

import { pollerOne } from "@/fonts";

export default function Presentacion() {
  return (
    <div
      className={cn(
        pollerOne.className,
        styles.presentation,
        "fixed inset-0 z-50  bg-white dark:bg-black flex justify-center items-center"
      )}
    >
      <div className={`${styles.box}`}>
        Bravazo
        <div className={`${styles.co} bg-transparent`}>
          <div className={`${styles.grow} bg-green-500`}></div>
          <div className={`${styles.ab} bg-white dark:bg-black`}></div>
        </div>
      </div>
    </div>
  );
}
