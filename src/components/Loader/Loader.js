import React, { useEffect, useState } from "react";
import "./Loader.css"; // Import the CSS file for the loader styles

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <div  className={loaded ? "loaded" : ""} id="loader-wrapper">
      <div id="loader" className={loaded ? "loaded" : ""}></div>
      <div className={`${loaded ? "loaded" : ""} loader-section section-left`}></div>
      <div className={`${loaded ? "loaded" : ""} loader-section section-right`}></div>
    </div>
  );
};

export default Loader;