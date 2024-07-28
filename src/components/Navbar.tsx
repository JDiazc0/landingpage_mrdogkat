import React, { useState } from "react";
import { Icon } from "../assets/utils/Icon";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Productos", href: "#productos" },
    { name: "Beneficios", href: "#beneficios" },
  ];

  return (
    <>
      <header className="fixed w-screen shadow-md text-secondary-500 z-50 bg-white">
        <nav className="flex items-center justify-between p-2">
          <div className="flex justify-center items-center">
            <Icon iconName="mrdogkat" size={60} className="m-2" />
            <h2 className="font-Signatra text-5xl m-2">Mr.DogKat</h2>
          </div>
          <div className="font-arapey flex justify-between text-2xl hidden md:flex">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="mr-10">
                {item.name}
              </a>
            ))}
          </div>
          <div className="mr-20 md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={openMenu}
              onClick={handleMenu}>
              {openMenu ? (
                <Icon
                  iconName="close"
                  size={30}
                  className="text-secondary-500"
                />
              ) : (
                <Icon
                  iconName="menu"
                  size={30}
                  className="text-secondary-500"
                />
              )}
            </button>
          </div>
        </nav>

        {/* Menu movil */}

        <div
          className={`md:hidden font-arapey text-2xl transition-all duration-500 easi-in-out transform ${
            openMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}>
          <div className="flex flex-col justify-center items-center">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="mt-5">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
