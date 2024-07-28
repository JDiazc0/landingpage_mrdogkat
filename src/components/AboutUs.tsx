import React from "react";
import { Icon } from "../assets/utils/Icon";
import { Image } from "../assets/utils/Images";

const AboutUs: React.FC = () => {
  return (
    <>
      <section
        id="nosotros"
        className="relative h-screen w-full flex flex-col justify-center items-end">
        <div className="flex flex-col p-8 z-10">
          <h2 className="font-Signatra text-primary-500 text-4xl">Nosotros</h2>
          <p className="max-w-2xl text-secondary-500 font-arapey text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            ratione dolor nisi nemo fugiat labore totam in eaque ex corrupti
            magni sint explicabo quae dolore aspernatur sed libero, itaque
            dolorem?
          </p>
        </div>

        <Icon
          iconName="elipse2"
          size={1300}
          className="absolute top-1/2 left-64 transform -translate-x-1/2 -translate-y-1/2 z-0 "
        />
        <Image
          name="Galletas_2"
          alt="Galletas para mascotas"
          className="absolute left-0 w-[650px] h-[650px]"
        />
      </section>
    </>
  );
};

export default AboutUs;
