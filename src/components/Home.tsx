import React from "react";
import { Icon } from "../assets/utils/Icon";
import { Image } from "../assets/utils/Images";

const Home: React.FC = () => {
  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      <div className="font-arapey flex flex-col justify-center items-center h-screen w-[50%] relative z-10">
        <div>
          <h1 className="font-Signatra text-9xl text-secondary-500">
            Mr. DogKat
          </h1>
          <p className="text-3xl">snacks naturales</p>
          <button
            className="flex text-white text-lg bg-primary-500 rounded-2xl w-40 
            justify-around items-center shadow-md shadow-primary-600 active:scale-95">
            Ordena Ahora
            <Icon iconName="arrow" size={30} className="text-white rotate-90" />
          </button>
        </div>
      </div>
      <Icon
        iconName="elipse1"
        size={1300}
        className="absolute -top-64 -right-32 z-0"
      />
      <Image
        name="Galletas"
        alt="Galletas para mascotas"
        className="absolute top-3 right-10 w-[650px] h-[650px] z-20"
      />
    </section>
  );
};

export default Home;
