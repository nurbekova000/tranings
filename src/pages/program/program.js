import "./style/program.css";
import lineDec from "../../assets/images/line-dec.png";
import features from "../../assets/images/features-first-icon.png";

export default function Program() {
  return (
    <div id="program bg-black">
      <div className="container" id="programing">
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
                <a href="/">Оставить заявку</a>
              </div>
            </div>
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>ТРЕНАЖЕРНЫЙ ЗАЛ</h2>
                <p>
                  Поможет поддерживать тело в нужном тонусе и избежать многих
                  проблем со здоровьем.
                </p>
                <a href="/">Оставить заявку</a>
              </div>
            </div>
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>ЗОНА КАРДИО ТРЕНАЖЁРОВ</h2>
                <p>
                  Развивают дыхательную систему,повышают выносливость и помогают
                  похудеть.
                </p>
                <a href="/">Оставить заявку</a>
              </div>
            </div>
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>ЗАЛЫ ГРУППОВЫХ ТРЕНИРОВОК</h2>
                <p>
                  Это повысит эффективность упражнений и позволит достичь цели в
                  короткий срок.
                </p>
                <a href="/">Оставить заявку</a>
              </div>
            </div>
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>ЗОНА ЕДИНОБОРСТВ</h2>
                <p>
                  Развивают выносливость,ловкость и координацию движений. Секции
                  единоборств нацелены на укрепление и набор мышечной массы.
                </p>
                <a href="/">Оставить заявку</a>
              </div>
            </div>
            <div className="block">
              <div className="block-left">
                <img src={features} alt="" />
              </div>
              <div className="block-right">
                <h2>
                  ЗОНА ДЛЯ ФУНКЦИОНАЛЬНЫХ <br />
                  ТРЕНИРОВОК
                </h2>
                <p>Укрепление физической формы и повышение выносливости.</p>
                <a href="/">Оставить заявку</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
