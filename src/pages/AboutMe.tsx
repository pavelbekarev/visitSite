import { HeaderMenu } from "../components/HeaderMenu";
import ownerImage from "../img/start_page.png";
import "../styles/AboutMe.scss";
import line from "../img/Line.svg"
import "../styles/HeaderMenu.scss";

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
                                <li className="headerList__item"><Link to={"/"}>Главная</Link></li>
                                <li className="headerList__item"><Link to={"/services"}>Услуги</Link></li>
                                <li className="headerList__item"><Link to={"/reviews"}>Отзывы</Link></li>
                                <li className="headerList__item"><Link to={"/contacts"}>Контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section>
                    <div className="upper__content__bg"></div>
                    <div className="container">
                        <div className="aboutMe__wrapper">
                            <div className="upper__content">
                                <h1 className="upper__h1">Приветствую Вас!<br/> Я - Наталья Верина</h1>
                                <ul className="upper__text">
                                    <li>Эксперт в сфере управления человеческим ресурсом и стратегического планирования. Основатель Управленского консалтинга «Ресурс».</li>
                                    <li>Мой опыт работы помог мне изучить изнутри разные бизнес процессы, их оптимизацию и внедрение.Занималась подбором и построением команды, оргструктурой компании. Внедрила адаптацию и наставническую программу. И всё это привело меня к основам управления персоналом. <br/>Можно сколько угодно подбирать и обучать кадры, тратить большой бюджет, терять прибыль, если нет здравого управления командой.</li>
                                    <li>В прошлом активный деятель в региональных социальных проектах области, предприниматель около 10 лет, автор трёх масштабных проектов, тренингов, играпактик.
                                    Фасилитатор.
                                    Из последнего HR бизнес партнёр с компетенциями стратегического коучинга.
                                    Управленец.</li>
                                    
                                </ul>
                            </div>
                            {/* <img className="line" src={line} alt="" /> */}
                            <div className="bottom__content">
                                <div className="bottomContent__image-wrapper">
                                    <img className="bottomContent__image" src={image} alt="ownerImage" />
                                </div>
                                <span className="bottom__text">
                                    {/* Объединив вокруг себя мастеров и экспертов в разных отраслях, исполняю миссию вдохновения для реализации новых идей и проектов, с помощью команды профессионалов. */}
                                    Бизнес для меня как миссия.
                                    Находить решение для развития и масштабирования проектов, обеспечивающие развитие человеческого ресурса.<br/><br/>
                                    Пишите и давайте сотрудничать!
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    );
}