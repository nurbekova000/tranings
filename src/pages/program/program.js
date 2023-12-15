import "./style/program.css";
import lineDec from "../../assets/images/line-dec.png";
import features from "../../assets/images/features-first-icon.png";

export default function Program() {
  return (
    <div id="program bg-black">
      <div className="container">
        <div className="program">
          <div className="top-content">
            <h1>
              ВЫБРАТЬ <span>ПРОГРАММУ</span>
            </h1>
            <img src={lineDec} alt="" />
            <p>
              Тренировочные зоны фитнес- <br /> клуба
            </p>
          </div>
          <div className="bottom-content">
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>БАССЕЙН</h2>
                <p>
                  Плавание в бассейне гармонично развивает все группы мышц,
                  укрепляет суставы и помогает поддерживать тело в тонусе.
                </p>
                <a href="">Оставить заявку</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
