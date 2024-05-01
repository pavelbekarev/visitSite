import  React, { useState } from "react";
import "react-dom";
import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/Reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="slider__block">
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, animi! Velit veritatis, molestiae cumque veniam asperiores quas temporibus corrupti, beatae corporis, dignissimos maxime reiciendis repellat? Accusamus suscipit enim aperiam optio?</span>
      </div>
    </Slider>
  );
}



export const Reviews = () => {
    const [isRight, setIsRight] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const step = "400";
    const [item1Visible, setitem1Visible]= useState<Boolean>(false);
    const [item2Visible, setitem2Visible]= useState<Boolean>(false);
    const [item3Visible, setitem3Visible]= useState<Boolean>(false);

    return (
        <>
            <header className='headerMenu_header'>
                <section>
                    <div className="container">
                        <HeaderMenu />
                    </div>
                </section>
            </header>  
            <main>
                <section>
                    <div className="container">
                        <div className="reviews__wrapper">
                            <h1 className="reviews__h1">Отзывы</h1>
                            <div className="slider__wrapper">
                                <SimpleSlider />
                            </div>
                            <h1 className="reviews__h1">Выполненные работы</h1>
                            <div className="works__wrapper">
                                <div className="accordion">
                                    <div className={`accordion-item ${item1Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem1Visible(!item1Visible);
                                            }}
                                        >
                                            Консультация
                                        </div>
                                        {
                                            item1Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item1Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                <ul className="list">
                                                    <li>—   Сбор анамнеза. Выявление психологических и физиологических причин лишнего веса</li>
                                                    <li>—   Анализ рациона по дневнику питания</li>
                                                    <li>—   Рекомендации по питанию, изменению пищевого поведения, регуляции эмоционального состояния в зависимости от вашего запроса на консультацию</li>
                                                </ul>
                                                <div className="prices__info">
                                                    <span>ONLINE</span>
                                                    <div className="price">
                                                        <span>50 минут</span>
                                                        <span>5000 руб. (80$)</span>
                                                    </div>
                                                </div>
                                                <a href="" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem2Visible(!item2Visible);
                                            }}
                                        >
                                            Индивидуальное сопровождение
                                        </div>
                                        {
                                            item2Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    Content for section 2
                                                </div>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem3Visible(!item3Visible);
                                            }}
                                        >
                                            Консультация
                                        </div>
                                        {
                                            item3Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    Content for section 3
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}