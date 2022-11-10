import React from "react";
import s from "./style.module.scss";

import t_MenuItem from "@ctypes/menuItem";

type Props = {
  isOpen: boolean;
  menuItems: t_MenuItem[];
};

const MenuSlide = (props: Props) => {
  const { isOpen, menuItems } = props;

  const slideMenuClasses = `${s["menu-slide"]} ${isOpen && s["opened"]}`;

  return (
    <div className={slideMenuClasses}>
      <ul className={s["item-group"]}>
        {menuItems.map((e, i) => (
          <li className={s["item"]} key={`menu_item_${i}`}>
            <p className={s["label"]}>{e.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSlide;
