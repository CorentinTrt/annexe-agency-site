import React, { useEffect, useState } from "react";
import s from "./style.module.scss";

import t_MenuItem from "@ctypes/menuItem";

import addBlinkEffect from "@utils/addBlinkEffect";

const menuItems = [
  {
    label: "about",
    href: "#about",
  },
  {
    label: "projects",
    href: "#projects",
  },
  {
    label: "contact",
    href: "#contact",
  },
];

type Props = {
  menuItems: t_MenuItem[];
  scrollDirection: "up" | "down";
  isOnMobile: boolean;
  onClickMenu: () => void;
};

const Header = (props: Props) => {
  const { scrollDirection, isOnMobile, onClickMenu } = props;

  const [state_isMenuOpen, setState_isMenuOpen] = useState(false);

  useEffect(() => {
    if (!window) return;

    // addBlinkEffect({
    //   targetClasse: s["blink-text-menu"],
    //   outClasse: s["out"],
    //   inClasse: s["in"],
    // });
  }, [isOnMobile]);

  const handleMenu = () => {
    onClickMenu();

    setState_isMenuOpen(!state_isMenuOpen);
  };

  const headerClasses = `${s["header"]} ${
    scrollDirection === "down" && s["hidden"]
  }`;
  const menuMobileClasses = `${s["header--menu-mobile"]} ${
    state_isMenuOpen && s["opened"]
  }`;
  const menuMobileButtonClasses = `${s["button"]} ${
    state_isMenuOpen && s["opened"]
  }`;

  return (
    <div className={headerClasses}>
      <div className={s["header--logo"]}></div>

      {!isOnMobile && (
        <div className={s["header--menu"]}>
          <ul
            id="blink-text"
            className={`${s["item-group"]} ${s["blink-text-menu"]}`}
          >
            {menuItems.map((e, i) => (
              <li className={s["item"]} key={`menu_item_${i}`}>
                <a>{e.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOnMobile && (
        <div className={menuMobileClasses}>
          <div className={menuMobileButtonClasses} onClick={handleMenu}>
            <div className={s["bars"]}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
