import React, { useEffect } from "react";
import s from "./style.module.scss";

import t_Project from "@ctypes/project";

import addRollingEffect from "@utils/addRollingEffect";

import projects from "@constants/projects";

const s_project_proud = "on est fier de";
const last_project = {
  title: "Vuse Zone - Flavour Quiz",
};
const s_project_heading = "nos derniers projets";

const Projects = () => {
  useEffect(() => {
    if (!window) return;

    addRollingEffect({ block: s["block"], letter: s["letter"] });
  }, []);

  return (
    <div className={s["projects"]} data-scroll-section>
      <h2 className={s["heading"]}>{s_project_proud}</h2>

      <div className="divider white"></div>

      <h2 id="rolling-text" className={s["rolling-text"]}>
        {last_project.title}
      </h2>

      <h2 className={s["heading"]}>{s_project_heading}</h2>

      <div className={s["projects--project-group"]}>
        {projects.map((e: t_Project, i: number) => (
          <div className={s["item"]} key={`project_${i}`}>
            <h3 className={s["title"]}>{e.title}</h3>
            <p className={s["description"]}>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
