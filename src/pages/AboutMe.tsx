import { HeaderMenu } from "../components/HeaderMenu";
import ownerImage from "../img/start_page.png";
import "../styles/AboutMe.scss";
import line from "../img/Line.svg"

import image from "../img/about-1.jpg";
import { Link } from "react-router-dom";
// import image from "../img/about2.jpg";

export const AboutMe = (): JSX.Element => {
    return (
        <>
            <header className='headerMenu_header'>
                <section>
                    <div className="container">
                        <div className="headerMenu__wrapper">
                            <ul className="headerList">
                                <li className="headerList__item"><Link to={"/visitSite"}>главная</Link></li>
                                <li className="headerList__item"><Link to={"/services"}>услуги</Link></li>
                                <li className="headerList__item"><Link to={"/reviews"}>отзывы</Link></li>
                                <li className="headerList__item"><Link to={"/contacts"}>контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="aboutMe__wrapper">
                            <div className="upper__content">
                                <h1 className="upper__h1">Привет! Я - Наталья Верина</h1>
                                <span className="upper__text">
                                    Более 15 лет опыта работы с человеческим ресурсом.
                                    Данный опыт помог изучить изнутри разные бизнес процессы,
                                    сильные, слабые стороны в подборе и построении команды,
                                    в управлении и ее развитии, мотивации персонала.
                                </span>
                            </div>
                            <img className="line" src={line} alt="" />
                            <div className="bottom__content">
                                <div className="bottomContent__image-wrapper">
                                    <img className="bottomContent__image" src={image} alt="ownerImage" />
                                </div>
                                <span className="bottom__text">
                                    {/* Объединив вокруг себя мастеров и экспертов в разных отраслях, исполняю миссию вдохновения для реализации новых идей и проектов, с помощью команды профессионалов. */}
                                    Мы масштабируем Ваши возможности за счет наших ресурсов!<br/> Пиши и давай сотрудничать!
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    );
}