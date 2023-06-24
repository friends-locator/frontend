import React from 'react';
import './Welcome.scss';
import Button from "../button/Button";
import Carousel from "../Carousel/Carousel";

function Welcome() {
  return (
    <main className="welcome">
        <Carousel />
        <div className="welcome__button-container">
          <Button label="Зарегистрироваться" type="button" size="large" color="primary"/>
          <Button label="Войти" type="button" size="large" color="secondary"/>
        </div>
    </main>
  );
}

export default Welcome;
