import React from "react";

// Icons
import Natural from "../svg/bxs--leaf.svg?react";
import Trainer from "../svg/healthicons--guide-dog.svg?react";
import Healty from "../svg/healthicons--health.svg?react";
import Tooth from "../svg/mdi--tooth.svg?react";
import Durability from "../svg/mdi--clock-outline.svg?react";
import WhatsApp from "../svg/ic--baseline-whatsapp.svg?react";
import Instagram from "../svg/mdi--instagram.svg?react";
import Shop from "../svg/mdi--shopping-cart-outline.svg?react";
import Arrow from "../svg/ph--arrow-up-thin.svg?react";
import Menu from "../svg/mingcute--menu-line.svg?react";
import Close from "../svg/mingcute--close-line.svg?react";
import MrdogkatIcon from "../svg/MrDogKat_icon.svg?react";
import Ellipse1 from "../svg/Ellipse_1.svg?react";
import Ellipse2 from "../svg/Ellipse_2.svg?react";
import Bars from "../svg/Bar_Decoration.svg?react";

type IconType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Icons: IconType = {
  natural: Natural,
  trainer: Trainer,
  healty: Healty,
  tooth: Tooth,
  durability: Durability,
  whatsapp: WhatsApp,
  instagram: Instagram,
  shop: Shop,
  arrow: Arrow,
  menu: Menu,
  close: Close,
  mrdogkat: MrdogkatIcon,
  elipse1: Ellipse1,
  elipse2: Ellipse2,
  bars: Bars,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof Icons;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  size,
  className,
  ...props
}) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? (
    <IconComponent
      width={size}
      height={size}
      className={className}
      {...props}
    />
  ) : null;
};
