import React from "react";
import { Icon } from "../assets/utils/Icon";
import { Image } from "../assets/utils/Images";
import "../assets/styles/animations.css";

const Benefits: React.FC = () => {
  return (
    <>
      <section
        id="beneficios"
        className="flex justify-center items-center h-[75vh]">
        <div
          className="relative flex flex-col justify-center items-end 
          bg-secondary-500 w-[1100px] h-[330px] rounded-2xl shadow-inner-custome">
          <div className="mx-20">
            <h2 className="font-Signatra text-primary-500 text-4xl mx-10">
              Beneficios
            </h2>
            <div className="flex justify-center items-center">
              <Icon iconName="trainer" size={100} className="text-white" />
              <p className="font-arapey text-white text-5xl">
                Mejora el entrenamiento
              </p>
            </div>
          </div>
          <Image
            name="Gomas"
            className="absolute w-[440px] h-[440px] top-1/2 -left-16 -translate-y-[60%]"
          />
          <Image
            name="Goma_Naranja"
            className="absolute w-[37px] h-[46px] bottom-1 left-16 rotate-[30deg] float-animation"
          />
          <Image
            name="Goma_Roja"
            className="absolute w-[120px] h-[90px] -top-24 left-32 float-animation"
          />
          <Image
            name="Goma_Verde"
            className="absolute w-[169px] h-[79px] rotate-[60deg] -top-10 left-64 float-animation"
          />
          <Icon
            iconName="bars"
            size={70}
            className="absolute -top-7 -right-7"
          />
        </div>
      </section>
    </>
  );
};

export default Benefits;
