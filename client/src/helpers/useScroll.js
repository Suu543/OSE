import { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    axisx: 0,
    axisy: 0,
  });

  const onScroll = () => {
    setState({ axisy: window.scrollY, axisx: window.scrollX });
    console.log("state", window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

export default useScroll;
