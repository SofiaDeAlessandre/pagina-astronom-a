import { Card } from "./components/components/card/Card";
import { MainContainter } from "./layout/MainContainter/mainContainter";

import { Header } from "./components/components/Header";
import { InfinitySlide } from "./infinitySlide/InfinitySlide";
import image0 from "./assets-img/eclipse.jpg";
import image1 from "./assets-img/luna-img.jpg";
import image2 from "./assets-img/atardecer-img.jpg";
import image3 from "./assets-img/tormenta-img.jpg";
import image4 from "./assets-img/eclipse-sol.jpg";
import image5 from "./assets-img/luna-full.jpeg";
import { Footer } from "./components/components/Footer";
import { Introduccion } from "./components/components/Introduccion";

function App() {
  return (
    <>
      <Header />
      <InfinitySlide />
      <Introduccion />
      <MainContainter>
        <Card
          className="cards"
          nameImg="Eclipse total de Luna- Mayo/2022"
          image={image0}
        />
        <Card nameImg="Luna llena" image={image1} />
        <Card nameImg="Atardecer" image={image2} />
        <Card nameImg="Luna" image={image5} />
        <Card nameImg="Tormenta" image={image3} />
        <Card nameImg="Eclipse parcial de Sol- Febrero/2017" image={image4} />
      </MainContainter>
      <Footer></Footer>
    </>
  );
}

export default App;
