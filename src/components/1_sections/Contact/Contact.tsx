import React from "react";
import s from "./style.module.scss";

import t_Contact from "@ctypes/contact";
import t_Adress from "@ctypes/adress";

import GoogleMap from "@svgs/google_map.svg";

const s_have_talk = "envie de discuter ?";
const s_story = "raconte nous ton histoire";
const s_emailAdress = "infos@annexe.com";
const s_comeVisit = "ou viens nous voir";

const contacts = [
  {
    name: "Marc",
    cellNumber: 1234567890,
    job: "Fondateur, relation commercial",
  },
  {
    name: "Corentin",
    cellNumber: 1234567890,
    job: "Fondateur, direction technique",
  },
];

const adress: t_Adress = {
  number_street: "2030 Pie-IX Blvd #207",
  city_province_zipcode: "Montreal (QC) H1V 2C8",
  state: "Canada",
};

const Contact = () => {
  return (
    <div className={s["contact"]} data-scroll-section>
      <div className={`${s["contact--cellphone"]} ${s["section"]}`}>
        <h2 className={s["talk"]}>{s_have_talk}</h2>

        <div className="divider"></div>

        <div className={s["group"]}>
          {contacts.map((e: t_Contact, i) => (
            <div className={s["item"]} key={`contact_${i}`}>
              <div>
                <h4 className={s["name"]}>{e.name}</h4>
                <p className={s["job"]}>{e.job}</p>
              </div>
              <p className={s["cell-number"]}>{`+1 ${e.cellNumber}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${s["contact--other"]} ${s["section"]}`}>
        <h2 className={s["story"]}>{s_story}</h2>

        <div className="divider"></div>

        <h4 className={s["email-adress"]}>{s_emailAdress}</h4>

        <div className={s["visit"]}>
          <h2 className={s["come"]}>{s_comeVisit}</h2>
          <GoogleMap />
        </div>

        <div className="divider"></div>

        <div className={s["adress"]}>
          <p>{adress.number_street}</p>
          <p>{adress.city_province_zipcode}</p>
          <p>{adress.state}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
