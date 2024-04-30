import { useState } from "react";
import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/Services.scss";


export const Services = (): JSX.Element => {
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
                        <div className="services__wrapper">
                            <h1 className="services__h1">Услуги</h1>
                            <div className="servicesContent__wrapper">
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