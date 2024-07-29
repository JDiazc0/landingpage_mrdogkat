import React from "react";
import { Icon } from "../assets/utils/Icon";
import { Image, Images } from "../assets/utils/Images";

interface ProductCardProps {
  imageName: keyof typeof Images;
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageName,
  name,
  description,
  price,
}) => {
  const contactWhatsApp = (product: string) => {
    const phoneNumber = "573016358795";
    const message = `Hola, me gustaría comprar ${product}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-b-xl h-[470px] w-[350px] hover:cursor-default m-5">
        <div>
          <Image
            name={imageName}
            className="w-[350px] h-[350px] rounded-t-xl"
          />
        </div>
        <div className="font-arapey">
          <p className="text-secondary-800 ml-2 text-2xl">{name}</p>
          <p className="text-secondary-200 ml-2">{description}</p>
          <div className="flex justify-between items-center mt-5 mb-3">
            <p className="text-primary-500 ml-2 text-xl font-roboto font-extrabold">
              $ {price}
            </p>
            <button
              onClick={() => contactWhatsApp(name)}
              className="rounded-full bg-primary-100 h-[30px] w-[30px] flex justify-center items-center mr-2 hover:cursor-pointer">
              <Icon iconName="shop" size={20} className="text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
