import "./style/home.css";
import Button from "../../components/ui/button/Button";
import bgVideo from "../../assets/images/gym-video.mp4";

export default function Header() {
  return (
    <div id="home">
      <div className="hero-div-bg">
        <video autoplay="autoplay" className="hero-bg">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="home">
          <div className="center-content text-center ">
            <p className="text text-white text-xl">
              Чтобы наслаждаться бесконечным здоровьем, надо работать над собой!
            </p>
            <h1 className="text-white text-7xl py-6">
              здоровое<span className="text-red-500">тело</span>
            </h1>
            <div className="btn-group flex gap-1 justify-center ">
              <a href="#map">
                <Button>становиться участником</Button>
              </a>
              <a href="#map">
                <Button>Дома фитнес</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
