'use client';

import { useState } from "react";
import { ButtonType } from "@/Types";

import Button from "./Button";
import styles from '../Styles.module.scss';

export default function InsertBox() {
  const [text, setText] = useState<string>('');

  return (
    <div className={styles.insertBox}>
      <textarea
        value={text}
        rows={4}
        cols={50}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your task here..."
      />
      <Button text={text} type={ButtonType.Insert} />
    </div>
  );
}
