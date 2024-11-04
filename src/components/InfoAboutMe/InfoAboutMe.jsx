import style from "./style.module.css";
import { motion } from "framer-motion";
import img1 from "../../assets/interface.svg";
import img2 from "../../assets/html.svg";
import img3 from "../../assets/react.svg";
import img4 from "../../assets/press.svg";

function InfoAboutMe() {
  const obj = [
    {
      id: 1,
      img: img1,
      title: "Interface & Design",
      subtext: "Briefing, wireframe, UX, UI and branding.",
    },
    {
      id: 2,
      img: img2,
      title: "html & css",
      subtext: "Responsive websites with fast loading.",
    },
    {
      id: 3,
      img: img3,
      title: "React.js",
      subtext: "Build your system with node.js.",
    },
    {
      id: 4,
      img: img4,
      title: "WordPress",
      subtext: "Create your e-commerce or blog with PHP.",
    },
  ];
  return (
    <>
      <div className={style.contactingMe}>
        <div className={style.titleAboutMe}>
          <h1>about me</h1>
          <div className={style.line}></div>
        </div>
        <div className={style.infoAboutMe}>
          <div className={style.image}></div>
          <div className={style.infoName}>
            <h2>Marcos Oliveira</h2>
            <p>
              I'm more than one in love for Front-End. My experience with
              interface design turn me one extremely criterious with alignments,
              margins, colors and a lot other resorces in CSS. Today I work with
              projects in a whole world. Codifiding in my home office, in a
              quiet interior of São Paulo, Brazil.
            </p>
          </div>
        </div>
        <div className={style.blockExperience}>
          {obj.map((el) => {
            return (
              <div key={el.id} className={style.block}>
                <div>{el.img}</div>;
                <div></div>;
                <div>
                  <h2>{el.title}</h2>
                  <p>{el.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InfoAboutMe;
