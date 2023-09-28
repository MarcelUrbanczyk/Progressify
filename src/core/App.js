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
  return viewportWidth > 1000 ? <></> : <MobileApp />;
};

export default App;
