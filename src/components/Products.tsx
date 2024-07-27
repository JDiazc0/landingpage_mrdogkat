import React from "react";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const popularProducts = [
    {
      imageName: "Helado_Pollo",
      name: "Helado de Pollo",
      description: "Helado de pollo artesanal",
      price: 3000,
    },
    {
      imageName: "Helado_Pollo_Espinaca",
      name: "Helado de Pollo & Espinaca",
      description: "Helado de pollo artesanal con espinaca",
      price: 3000,
    },
    {
      imageName: "Helado_Pollo_Zanahoria",
      name: "Helado de Pollo & Zanahoria",
      description: "Helado de pollo artesanal con zanahoria",
      price: 3000,
    },
    {
      imageName: "Helado_Pollo_Remolacha",
      name: "Helado de Pollo & Remolacha",
      description: "Helado de pollo artesanal con remolacha",
      price: 3000,
    },
    {
      imageName: "Helado_Fresa_Banano",
      name: "Helado de Fresa & Banano",
      description: "Helado artesanal de frutas tropicales",
      price: 3000,
    },
    {
      imageName: "Helado_Higado",
      name: "Helado de Higado",
      description: "Helado artesanal hecho con higados de pollo",
      price: 3000,
    },
  ];
  return (
    <>
      <section
        id="Productos"
        className="flex flex-col justify-center items-center ">
        <h2 className="font-arapey text-5xl m-5">Productos Populares</h2>
        <div className="grid grid-cols-3 gap-4">
          {popularProducts.map((index) => (
            <ProductCard
              imageName={index.imageName}
              name={index.name}
              description={index.description}
              price={index.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
