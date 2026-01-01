import React from "react";

const ScrollToButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="button-to-top" onClick={scrollToTop}>
      {" "}
      ↑ Top
    </button>
  );
};

export default ScrollToButton;
