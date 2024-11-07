import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    name: "ABOUT",
    link: "#about-me",
  },
  {
    name: "MY WORK",
    link: "#my-work",
  },
  {
    name: "SKILLS",
    link: "#skills",
  },
  {
    name: "RESUME",
    link: "#resume",
  },
  {
    name: "GET IN TOUCH",
    link: "#get-in-touch",
  },
];

export function NavLink({ data }) {
  return (
    <li className="p-4 lg:p-6">
      <a href={data.link} className="hover:opacity-60">
        {data.name}
      </a>
    </li>
  );
}

NavLink.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      id="home"
      className="bg-cover bg-fixed flex flex-col"
      style={{ backgroundImage: "url(/pic1.jpg)", backgroundPosition: "50%" }}
    >
      <div className="relative mx-auto w-full min-h-screen flex flex-col max-w-screen-xl px-4 xm:px-8 text-white">
        <nav className="border-b-2 flex items-center justify-between">
          <a href="/">
            <img className="w-16 h-16" src="logo.png" alt="logo" />
          </a>
          <ul className="hidden md:flex flex-row items-center justify-center font-bold">
            {navLinks.map((item, ind) => (
              <NavLink key={ind} data={item} />
            ))}
          </ul>
          <button
            onClick={toggleDropdown}
            className="md:hidden cursor-pointer p-4 lg:p-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </nav>
        <div
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="w-full h-full flex-grow flex flex-col items-center text-center justify-center"
        >
          <h1 className="text-6xl xm:text-7xl font-bold mb-4">
            Pankaj Mokashi
          </h1>
          <div className="text-xl font-medium">Web Developer</div>
        </div>
        {dropdownOpen && (
          <ul
            ref={dropdownRef}
            className="absolute top-16 left-0 right-0 flex md:hidden flex-col items-center justify-center text-sm bg-[#cabdbd] font-bold"
          >
            {navLinks.map((item, ind) => (
              <NavLink key={ind} data={item} />
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
