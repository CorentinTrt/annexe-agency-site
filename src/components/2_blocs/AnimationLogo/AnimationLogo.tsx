import React, { useEffect } from "react";
import s from "./style.module.scss";

const AnimationLogo = () => {
  useEffect(() => {
    if (!window) return;

    const logo = document.querySelector("#animated-logo");

    logo?.classList.add(s["animated"]);

    setTimeout(() => {
      logo?.classList.add(s["over"]);
    }, 5000);
  }, []);

  return (
    <div className={s["animation-logo"]}>
      <img
        id="animated-logo"
        src="/images/animation_logo.png"
        alt="Logo animation"
      />
    </div>
  );
};

export default AnimationLogo;
