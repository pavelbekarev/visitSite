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
        <span className="slider__text">Наталья Верина - настоящий профессионал в области разработки стратегий для бизнеса. Ее консультации по управлению персоналом были очень полезными, а деловые встречи и игры, которые она проводит, помогают развивать командный дух. Очень довольны ее работой!</span>
        <br/>
        <span className="reviewAuthor__name">Ольга Худышкина</span>
      </div>
      <div>
        <span className="slider__text">Наталья Верина отличный консультант! Ее стратегии для бизнеса действительно работают - мы заметили значительное улучшение в работе компании. Она также обладает уникальным подходом к управлению персоналом и проведению деловых встреч. Рекомендую!</span>
        <br/>
        <span className="reviewAuthor__name">Валерий Максимов</span>
      </div>
      <div>
        <span className="slider__text">Наталья помогла нам создать эффективную стратегию для нашего бизнеса и оказала ценную помощь в управлении персоналом. Ее деловые встречи и игры помогли укрепить команду и повысить эффективность работы. Спасибо за уникальный подход к делу!</span>
        <br/>
        <span className="reviewAuthor__name">Анатолий Тарасов</span>
      </div>
      <div>
        <span className="slider__text">С Натальей я уверенно разработала стратегию для своего бизнеса и изменила подход к управлению персоналом. Ее деловые встречи и игры не только увлекают, но и приносят реальный результат. Очень благодарна за ее профессионализм и энергию!</span>
        <br/>
        <span className="reviewAuthor__name">Милана Леонова</span>
      </div>
      <div>
        <span className="slider__text">Наталья - истинный эксперт в разработке стратегий для бизнеса и управлении персоналом. Ее деловые встречи и игры помогли нам внедрить позитивные изменения в компании. Рекомендую ее как высококвалифицированного консультанта!</span>
        <br/>
        <span className="reviewAuthor__name">Данил Круглов</span>
      </div>
      <div>
        <span className="slider__text">Благодаря Наталье мы разработали успешную стратегию для нашего бизнеса и значительно улучшили работу команды. Ее профессионализм и увлекательные деловые встречи делают работу с ней по-настоящему интересной и продуктивной. Спасибо за отличную работу!</span>
        <br/>
        <span className="reviewAuthor__name">Евгений Орехов</span>
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

                            {/* Выполненные работы */}
                            {/* <h1 className="reviews__h1">Выполненные работы</h1>
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
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}