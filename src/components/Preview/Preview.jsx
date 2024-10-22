import style from "./style.module.css";

function Preview() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <p>Hi, My name is Agil Zulfa</p>
          <h1>Full Stack Developer</h1>
          <p className={style.pFocus}>
            focus in harnessing the power of Next.js with Express.js and REST
            API to craft dynamic web applications. creating seamless user
            experiences that bring ideas to life.
          </p>
          <div className={style.button}>Learn About me</div>
        </div>
        <div className={style.myFoto}>
          <div className={style.image}></div>
        </div>
      </div>

      <div className={style.contactingMe}>
        sdghszdflkgjas;odflgj'alskdjfg;alsjfdglakhsf;dahsdlkashdg;skhdg
      </div>
    </>
  );
}

export default Preview;
