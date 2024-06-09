import Logo from "/src/assets/logo1.png";
import { Coffee01Icon } from "../../assets/icons/Icon";
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={Logo} alt="logo1" width={100} height={100} />
          </a>

          {/* link */}
          <div className="flex items-center justify-between gap-5">
            <ul className="hidden md:flex items-center gap-5">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-300 hover:scale-105"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className=" bg-primary/70 hover:scale-105 duration-300 text-white px-4 py-2 rounded-full flex items-center gap-1">
              <Coffee01Icon className="text-xl text-white drop-shadow-sm cursor-pointer" />
              Get Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
