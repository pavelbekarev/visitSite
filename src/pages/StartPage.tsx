import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/StartPage.scss";
import start_pageImage from "../img/start_page.jpg";    

export const StartPage = (): JSX.Element => {
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
                        <div className="startPage__content">
                            <div className="image__wrapper">
                                <img src={start_pageImage} alt="Изображение" />
                            </div>
                            <div className="info__content">
                                <h2 className="owner__name">НАТАЛЬЯ ВЕРИНА</h2>
                                <div className="profession__descr">
                                    {/* <h3>Немного фактов</h3> */}
                                    <div>
                                        <div className="span__wrapper">
                                            <h4>Эксперт</h4>
                                            <span>Эксперт в сфере управления человеческим ресурсом и стратегического планирования. <br/>Основатель Управленского консалтинга «Ресурс».</span><br/><br/>
                                        </div>
                                        <div className="span__wrapper">
                                            <h4>Управленческий консалтинг «Ресурс»</h4>
                                            <span>Компания «Ресурс» уникальна тем, что объединяет мастеров и экспертов различных областей, создавая тем самым мощный ресурс для реализации самых смелых идей. География наших услуг охватывает всю Россию, что делает нас незаменимыми партнерами для малого и среднего бизнеса, а также для социальных проектов.</span><br/><br/>
                                        </div>
                                        <div className="span__wrapper">
                                            <h4>{"> 15 лет опыта работы"}</h4>
                                            <ul>
                                                <li>
                                                    Основываясь на опыте более 15 лет в сфере бизнеса и организации различных проектов, убедилась что люди это главный ресурс!
                                                </li>
                                                <li>
                                                    Изучив психологию и стили управления, успешно применила свои знания в работе с шестью компаниями и холдингом.
                                                </li>
                                                <li>
                                                    Разработала ряд стратегий закрывающие основные запросы для развития и масштабирования бизнеса.
                                                </li>
                                                
                                            </ul><br/><br/> 
                                        </div>
                                        <div className="span__wrapper">
                                            <h4>Моя миссия</h4>
                                            <span> — это находить ресурс для развития и достижения цели. <br/>Сотрудничество со мной позволит Вам быть уверенным управленцем надежной команды!</span><br/><br/>
                                        </div>
                                        <div className="span__wrapper">
                                            <span>Предлагаю Вам встречу, после чего сделаем индивидуальный план действий!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://vk.com/im?sel=152908366" target="_blank" className="contactButton__wrapper">Связаться</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}