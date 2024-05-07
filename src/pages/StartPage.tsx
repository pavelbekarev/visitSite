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
                                            <span>В сфере HR управления, стратегического коучинга, структуры и развития персонала.</span><br/><br/>
                                        </div>
                                        <div className="span__wrapper">
                                            <h4>{"> 15 лет опыта работы"}</h4>
                                            <span>Основываясь на опыте более 15 лет в сфере бизнеса и организации различных проектов, разработала ряд стратегий закрывающие основные запросы работы с персоналом и развития бизнеса.</span><br/><br/> 
                                        </div>
                                        <div className="span__wrapper">
                                            <h4>Моя миссия</h4>
                                            <span> — это находить ресурс для развития и достижения цели. Сотрудничество со мной позволит вам быть уверенным управленцем надежной команды!</span><br/><br/>
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