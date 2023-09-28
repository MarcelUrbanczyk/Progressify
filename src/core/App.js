import { useState, useEffect } from "react";
import { getWidth } from "../common/getWidth";
import MobileApp from "./MobileApp";

const App = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(getWidth);
    };

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, [viewportWidth]);
  console.log(viewportWidth);
  if (viewportWidth > 1000) {
    return <></>;
  }
  return <MobileApp />;
};

export default App;
