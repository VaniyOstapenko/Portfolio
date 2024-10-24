import style from "./style.module.css";
import { motion } from "framer-motion";

function Preview() {
  const animation = {
    hiddenHorizontal: {
      x: 100,
      opacity: 0,
    },
    visibleHorizontal: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
    hiddenVertical: {
      y: -100,
      opacity: 0,
    },
    visibleVertical: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
    hiddenButton: {
      y: -100,
      opacity: 0,
    },
    visibleButton: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
      boxShadow: "5px 5px 5px rgba(5, 5, 5, 0.5)",
    }),
    whileHover: {
      scale: 1.1,
      boxShadow: "8px 8px 8px rgba(8, 8, 8, 0.8)",
      cursor: "pointer",
    },
    whileTap: {
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      scale: 1,
    },
  };

  return (
    <>
      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ once: true }}
        className={style.wrapper}
      >
        <div className={style.info}>
          <motion.p custom={1} variants={animation}>
            Hi, My name is Agil Zulfa
          </motion.p>
          <motion.h1 custom={2} variants={animation}>
            Full Stack <br />
            Developer
          </motion.h1>
          <motion.p custom={3} variants={animation} className={style.pFocus}>
            focus in harnessing the power of Next.js with Express.js and REST
            API to craft dynamic web applications. creating seamless user
            experiences that bring ideas to life.
          </motion.p>

          <motion.div
            custom={4}
            initial="hiddenButton"
            whileInView="visibleButton"
            viewport={{ once: true }}
            whileHover={animation.whileHover}
            whileTap={animation.whileTap}
            className={style.button}
            variants={animation}
          >
            Learn About me
          </motion.div>
        </div>

        <motion.div
          custom={1}
          variants={animation}
          className={style.myFoto}
        ></motion.div>
      </motion.div>

      <div className={style.contactingMe}>
        sdghszdflkgjas;odflgj'alskdjfg;alsjfdglakhsf;dahsdlkashdg;skhdg
      </div>
    </>
  );
}

export default Preview;
