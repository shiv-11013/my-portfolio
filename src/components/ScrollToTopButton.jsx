

function ScrollToButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="button-to-top"
      onClick={scrollToTop}
      aria-label="scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToButton;