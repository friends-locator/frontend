import React from 'react';
// import PropTypes from 'prop-types';
import './Welcome.scss';
// import Button from "../button/Button";
import Carousel from "../Carousel/Carousel";

function Welcome() {
  return (
    <main className="welcome">
        <Carousel />
    </main>
  );
}

export default Welcome;


// function Welcome({ title, description }) {
//   const props = {
//     title,
//     description
//   }
//
//   return (
//     <main className="welcome">
//       <section className="welcome__container">
//         <img className="welcome__img" alt="изображение"/>
//         <h1 className="welcome__title">{props.title}</h1>
//         <p className="welcome__description">{props.description}</p>
//         <div className="welcome__button-container">
//           <Button label="Зарегистрироваться" type="button" size="large" color="primary"/>
//           <Button label="Войти" type="button" size="large" color="secondary"/>
//         </div>
//       </section>
//     </main>
//   );
// }
// Welcome.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };
//
// // Welcome.defaultProps = {
//   // isOpen: false,
//   // onClose: undefined,
//   // onSubmit: undefined,
// // };
//
// export default Welcome;
