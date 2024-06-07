import React from "react";
import Logo from "/src/assets/logo1.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container">
        <div className="flex">
          <a href="#">
            <img src={Logo} alt="logo1" width={100} height={100} />
          </a>

          {/* link */}
          <div className="flex items-center justify-between gap-5">
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button>Get Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
