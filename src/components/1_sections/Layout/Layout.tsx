import React, { ReactNode, useEffect, useState } from "react";
import s from "./style.module.scss";

// import ASScroll from "@ashthornton/asscroll";

// import AnimationLogo from "@blocs/AnimationLogo/AnimationLogo";
import Header from "@blocs/Header/Header";
import MenuSlide from "@blocs/MenuSlide/MenuSlide";

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
  children: ReactNode;
};

enum scrollDirection {
  up = "up",
  down = "down",
}

const Layout = ({ children }: Props) => {
  const [state_scrollDirection, setState_scrollDirection] = useState(
    scrollDirection.up
  );
  const [state_isOnMobile, setState_isOnMobile] = useState(false);
  const [state_isMenuOpen, setState_isMenuOpen] = useState(false);

  useEffect(() => {
    if (!window) return;

    // const scroll = new ASScroll();

    // scroll.enable();

    // let scrollPosition = 0;
    // scroll.on("scroll", (scrollPos: number) => {
    //   if (Math.floor(scrollPos) >= scrollPosition) {
    //     setState_scrollDirection(scrollDirection.down);
    //     scrollPosition = Math.floor(scrollPos);
    //   } else if (Math.ceil(scrollPos) <= scrollPosition) {
    //     setState_scrollDirection(scrollDirection.up);
    //     scrollPosition = Math.ceil(scrollPos);
    //   }
    // });

    let scrollPos = 0;
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      window.pageYOffset > scrollPos
        ? setState_scrollDirection(scrollDirection.down)
        : setState_scrollDirection(scrollDirection.up);
      scrollPos = window.pageYOffset;
    });

    checkIsMobileLayout();

    window.addEventListener("resize", () => {
      checkIsMobileLayout();
    });
  }, []);

  const checkIsMobileLayout = () => {
    if (window.innerWidth >= 1024) {
      setState_isOnMobile(false);
    } else {
      setState_isOnMobile(true);
    }
  };

  useEffect(() => {
    if (state_isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state_isMenuOpen]);

  const handleMenu = () => {
    setState_isMenuOpen(!state_isMenuOpen);
  };

  return (
    <main className={s["layout"]}>
      <Header
        menuItems={menuItems}
        scrollDirection={state_scrollDirection}
        isOnMobile={state_isOnMobile}
        onClickMenu={handleMenu}
      />

      {state_isOnMobile && (
        <MenuSlide isOpen={state_isMenuOpen} menuItems={menuItems} />
      )}

      <div asscroll-container="true">{children}</div>
    </main>
  );
};

export default Layout;
