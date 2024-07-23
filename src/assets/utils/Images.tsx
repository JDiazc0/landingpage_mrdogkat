import React from "react";

//Images
import Galleta from "../img/Galleta.png";
import Galletas from "../img/Galletas.png";
import Galletas_2 from "../img/Galletas_2.png";
import Goma_Cafe from "../img/Goma_Cafe.png";
import Goma_Naranja from "../img/Goma_Naranja.png";
import Goma_Roja from "../img/Goma_roja.png";
import Goma_Verde from "../img/Goma_Verde.png";
import Gomas from "../img/Gomas.png";
import Helado_Fresa_Banano from "../img/Helado_Fresa_Banano.jpeg";
import Helado_Higado from "../img/Helado_Higado.jpeg";
import Helado_Pollo from "../img/Helado_Pollo.jpeg";
import Helado_Pollo_Espinaca from "../img/Helado_Pollo_Espinaca.jpeg";
import Helado_Pollo_Remolacha from "../img/Helado_Pollo_Remolacha.jpeg";
import Helado_Pollo_Zanahoria from "../img/Helado_Pollo_Zanahoria.jpeg";
import Oreja_Deshidratada from "../img/Oreja_Deshidratada.jpeg";
import Orejas_Deshidratadas from "../img/Orejas_Deshidratadas.jpeg";
import Patas_Deshidratadas from "../img/Patas_Deshidratadas.jpeg";
import Patas_Deshidratadas_2 from "../img/Patas_Deshidratadas2.jpeg";

type ImageType = {
  [key: string]: string;
};

export const Images: ImageType = {
  Galleta,
  Galletas,
  Galletas_2,
  Goma_Cafe,
  Goma_Naranja,
  Goma_Roja,
  Goma_Verde,
  Gomas,
  Helado_Fresa_Banano,
  Helado_Higado,
  Helado_Pollo,
  Helado_Pollo_Espinaca,
  Helado_Pollo_Remolacha,
  Helado_Pollo_Zanahoria,
  Oreja_Deshidratada,
  Orejas_Deshidratadas,
  Patas_Deshidratadas,
  Patas_Deshidratadas_2,
};

interface ImageProps {
  name: keyof typeof Images;
  alt?: string;
  className: string;
}

export const Image: React.FC<ImageProps> = ({
  name,
  alt = "",
  className = "",
}) => <img src={Images[name]} alt={alt} className={className} />;
