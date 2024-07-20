import style from "./imgSlide.module.css";

export function ImgSlide({ imgUrl }) {
  return (
    <li className={style.slide_item}>
      <img src={imgUrl} alt="Imagen de planeta" className={style.slide_img} />
    </li>
  );
}
