import { useState, useEffect } from "react";
import { getWidth } from "../common/getWidth";

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
  return <></>;
};

export default App;
