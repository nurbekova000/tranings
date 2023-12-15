import "./style/home.css";
import Button from "../../components/ui/button/Button";

export default function Header() {
  return (
    <div id="home">
      {/* <video>
        <source src="assets/images/gym-video.mp4" type="video/mp4" />
      </video> */}
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
              <Button>становиться участником</Button>
              <Button>Дома фитнес</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
