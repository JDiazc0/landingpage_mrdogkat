import React, { useEffect, useState } from "react";
import { Icon } from "../assets/utils/Icon";
import { Image } from "../assets/utils/Images";
import "../assets/styles/animations.css";

const Benefits: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [animationClass, setAnimationClass] = useState("shrink-animation");

  const benefits = [
    {
      iconName: "natural",
      text: "100% Naturales",
    },
    {
      iconName: "durability",
      text: "Entretenimiento de larga duración",
    },
    {
      iconName: "trainer",
      text: "Facilita los entrenamientos",
    },
    {
      iconName: "healty",
      text: "Reduce el estres",
    },
    {
      iconName: "tooth",
      text: "Ayuda con la limpieza dental",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("shrink-animation");
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % benefits.length);
      }, 1500);
      setTimeout(() => {
        setAnimationClass("");
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { iconName, text } = benefits[index];

  return (
    <>
      <section
        id="beneficios"
        className="flex justify-center items-center h-[75vh]">
        <div
          className="relative flex flex-col justify-center items-end 
          bg-secondary-500 w-[1100px] h-[330px] rounded-2xl shadow-inner-custome">
          <div className="mx-20 w-[600px]">
            <h2 className="font-Signatra text-primary-500 text-4xl mx-10">
              Beneficios
            </h2>
            <div
              className={`flex justify-center items-center ${animationClass}`}>
              <Icon iconName={iconName} size={80} className="text-white mx-3" />
              <p className="font-arapey text-white text-4xl">{text}</p>
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
