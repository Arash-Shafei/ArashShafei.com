import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const linkNames = [
    {
      id: 1,
      link: "home",
    },
    //{
    //id: 2,
    //link: "experience",
    //},
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  const [MobileNav, setMobileNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-blue-50 fixed shadow-xl">
      <div>
        <h1 className="text-4xl ml-2 font-signature text-black">
          Arash Shafei
        </h1>
      </div>

      <ul className="hidden md:flex">
        {linkNames.map(({ id, link }) => (
          <li key={id} className="nav-links">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
        onClick={() => setMobileNav(!MobileNav)}
      >
        {MobileNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {MobileNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-200 via-white to-blue-200 text-black">
          {linkNames.map(({ id, link }) => (
            <li className="nav-mobile-links">
              <Link
                onClick={() => setMobileNav(!MobileNav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
