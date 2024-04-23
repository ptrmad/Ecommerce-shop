import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Share.module.css";
import { ShareContext } from "../../contexts/ShareContext";
import { useContext } from "react";

export function Share() {
  const [isShareShown, setIsShareShown] = useContext(ShareContext);

  return (
    <div className={styles.sharePage}>
      <div className={styles.shareTransparentBackground}></div>
      <div className={styles.shareField}>
        <button
          className={styles.closeWindow}
          onClick={() => setIsShareShown(!isShareShown)}
        >
          X
        </button>
        <div className={styles.buttonSection}>
          <FullWidthButton>X</FullWidthButton>
          <FullWidthButton>Facebook</FullWidthButton>
          <FullWidthButton>Instagram</FullWidthButton>
          <FullWidthButton>Tiktok</FullWidthButton>
          <FullWidthButton>Copy Link</FullWidthButton>
        </div>
      </div>
    </div>
  );
}
