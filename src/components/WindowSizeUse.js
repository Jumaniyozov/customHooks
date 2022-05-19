import { useWindowSize } from "../hooks/useWindowSize";
import { styles } from "./styles";

const PREVIEW_WIDTH = 200;

function WindowSizeUse() {
  const [screenWidth, screenHeight] = useWindowSize();
  const previewHeight = (PREVIEW_WIDTH * screenHeight) / screenWidth;

  return (
    <>
      <h2>WindowSizeUse</h2>
      <div style={styles.preview(PREVIEW_WIDTH, previewHeight)}>
        <div style={styles.widthText(PREVIEW_WIDTH)}>{screenWidth}px</div>
        <div style={styles.heightText(previewHeight)}>{screenHeight}px</div>
      </div>
    </>
  );
}

export default WindowSizeUse;