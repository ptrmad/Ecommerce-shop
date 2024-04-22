import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Share.module.css";

export function Share() {
  return (
    <div className={styles.sharePage}>
      <div>
        <FullWidthButton>X</FullWidthButton>
        <FullWidthButton>Facebook</FullWidthButton>
        <FullWidthButton>Copy Link</FullWidthButton>
      </div>
    </div>
  );
}
