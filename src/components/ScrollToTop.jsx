import { useState } from "react";
import { useEffect } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-4 fixed bottom-6 right-6 rounded-full bg-white cursor-pointer btn-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            strokeWidth="3"
            fill="#000000"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
