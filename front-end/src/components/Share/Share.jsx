import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Share.module.css";
import { ShareContext } from "../../contexts/ShareContext";
import { useContext } from "react";

export function Share() {
  const [isShareShown, setIsShareShown] = useContext(ShareContext);

  const handleCopy = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };

  const handleShare = (socialMedia) => {
    let url = "";
    let currentUrl = window.location.href;
    switch (socialMedia) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=#${currentUrl}`;
        break;
      case "X":
        url = `https://twitter.com/intent/tweet?text=${currentUrl}`;
        break;
    }
    window.open(url, "_blank");
  };

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
          <FullWidthButton onClick={() => handleShare("facebook")}>
            Facebook
          </FullWidthButton>
          <FullWidthButton onClick={() => handleShare("X")}>X</FullWidthButton>
          <FullWidthButton onClick={() => handleCopy("copy")}>
            Copy Link
          </FullWidthButton>
        </div>
      </div>
    </div>
  );
}
