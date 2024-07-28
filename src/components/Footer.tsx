import React from "react";
import { Icon } from "../assets/utils/Icon";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="flex flex-row font-roboto text-secondary-300 font-light justify-around">
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <Icon iconName="mrdogkat" size={50} />
              <p className="font-Signatra text-secondary-500 text-4xl mx-5">
                Mr. DogKat
              </p>
            </div>
            <p>Snacks naturales</p>
            <div className="flex flex-row">
              <div
                className="rounded-full bg-primary-500 h-[30px] w-[30px] 
                flex justify-center items-center mx-2 my-10">
                <Icon iconName="whatsapp" size={20} className="text-white" />
              </div>
              <div
                className="rounded-full bg-primary-200 h-[30px] w-[30px] 
                flex justify-center items-center mx-2 my-10">
                <Icon
                  iconName="instagram"
                  size={20}
                  className="text-secondary-500"
                />
              </div>
            </div>
          </div>
          <ul>
            <li className="font-bold text-secondary-500">Menú principal</li>
            <li className="my-5">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="my-5">
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="my-5">
              <a href="#productos">Productos</a>
            </li>
            <li className="my-5">
              <a href="beneficios">Beneficios</a>
            </li>
          </ul>
          <ul>
            <li className="font-bold text-secondary-500">Información</li>
            <li className="my-5">Contacto</li>
          </ul>
          <ul>
            <li className="font-bold text-secondary-500">Dirección</li>
            <li className="my-5">123 Main Street</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
