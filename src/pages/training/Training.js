import React, { useState } from "react";
import Button from "../../components/ui/button/Button";
import topImg from "../../assets/images/line-dec.png";
import tabsIcon from "../../assets/images/tabs-first-icon.png";
import triningImg1 from "../../assets/images/training-image-01.jpg";
import triningImg2 from "../../assets/images/training-image-02.jpg";
import triningImg3 from "../../assets/images/training-image-03.jpg";
import triningImg4 from "../../assets/images/training-image-04.jpg";
import "./style/training.css";

const data = [
  {
    name: "йога",
    img: triningImg4,
    description:
      "Снижает тревожность, избавляет от страхов, помогает расслабиться, улучшает общее самочувствие. Этот факт был научно подтвержден и доказан. Улучшает фигуру, снижает вес. Асаны оказывают комплексное влияние: ускоряют обмен веществ, благотворно влияют на пищеварение, укрепляют мышечный корсет.",
  },
  {
    name: "для похудения",
    img: triningImg3,
    description:
      "Одно из самых больших преимуществ утренних упражнений — резкое улучшение метаболизма. Организм даже по окончании тренировки продолжит сжигать калории и работать быстрее. После того как вы позавтракаете, ваше тело будет использовать потребленную пищу как источник энергии, а не накапливать лишний жир.",
  },
  {
    name: "для набора веса",
    img: triningImg1,
    description:
      "Обязательно включайте многосуставные движения, то есть те, что задействуют несколько суставов и групп мышц: приседания, выпады, становую тягу, жим лёжа и стоя и другие. Они тренируют всё тело, прокачивают координацию, позволяют работать с большими весами и дают нужный стимул для роста мускулов.",
  },
  {
    name: "для пресса",
    img: triningImg2,
    description:
      "Никакой связи между тренировкой пресса и жиром на животе нет. Но, тем не менее, пресс качать необходимо и нужно, потому что упражнения для мышц брюшного пресса повышают приток крови к внутренним органам, нормализуют кровообращение и артериальное давление, улучшают работу пищеварительного тракта.",
  },
];
const Training = ({ admin = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div id="traning">
        <div className="container">
          <div
            className="training"
            style={{ padding: !admin ? "125px 0" : "0" }}
          >
            {!admin && (
              <div className="training-top">
                <h1>Тренировка</h1>
                <img src={topImg} alt="" />
                <p>Здесь выберите для себя!</p>
              </div>
            )}
            <div className="training-bottom flex justify-between gap-[60px]">
              <div className="training-left flex flex-col gap-[20px]">
                {data.map((el, index) => (
                  <div
                    onClick={() => setCurrentIndex(index)}
                    className="w-[350px] traning-item flex items-center cursor-pointer gap-3 p-[30px]"
                    key={index}
                  >
                    <img src={tabsIcon} alt="" />
                    <h4
                      className="capitalize text-[#232D39] text-[19px] font-semibold"
                      style={{
                        color: index === currentIndex ? "#ED563B" : "#232D39",
                      }}
                    >
                      {el.name}
                    </h4>
                  </div>
                ))}
                {!admin && (
                  <button className="py-[20px] bg-[#ED563B] text-[19px] text-white font-semibold rounded-md">
                    запись к нам!
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-[20px] items-start">
                <img className="w-full" src={data[currentIndex].img} alt="" />
                <h2 className="text-[#232D39] text-[23px] font-bold capitalize">
                  {data[currentIndex].name}
                </h2>
                <p
                  className="text-[#7A7A7A] text-[14px]"
                  style={{ lineHeight: "25px" }}
                >
                  {data[currentIndex].description}
                </p>
                <Button>Начать</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
