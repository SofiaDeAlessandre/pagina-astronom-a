import { ImgSlide } from "../imgSlide/ImgSlide";
import img1 from "../assets-img/art.png";
import img2 from "../assets-img/art.png";
import img3 from "../assets-img/art.png";
import img4 from "../assets-img/art.png";

import style from "./infinitySlide.module.css";

export function InfinitySlide() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <ImgSlide imgUrl={img1} />
        <ImgSlide imgUrl={img2} />
        <ImgSlide imgUrl={img3} />
        <ImgSlide imgUrl={img4} />
      </ul>
    </div>
  );
}
