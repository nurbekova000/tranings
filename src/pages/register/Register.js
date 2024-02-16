import React from "react";
import "./style/register.css";
import Button from "../../components/ui/button/Button";

const Register = () => {
  return (
    <div id="register">
      <div className="container">
        <div className="register">
          <div className="center-content">
            <h1>
              НЕ <span>ДУМАЙТЕ,</span> НАЧНИТЕ <span>СЕГОДНЯ</span>!
            </h1>
            <p>
              Спорт и правильное питание важны для здоровья: улучшают физическую
              форму, повышают энергию и способствуют общему благополучию.
            </p>
            <a href="#map">
              <Button>запись</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
