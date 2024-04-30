import { HeaderMenu } from "../components/HeaderMenu";
import ownerImage from "../img/start_page.png";
import "../styles/AboutMe.scss";
import line from "../img/Line.svg"

export const AboutMe = (): JSX.Element => {
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
                        <div className="aboutMe__wrapper">
                            <div className="upper__content">
                                <h1 className="upper__h1">Привет! Я - Наталья Верина</h1>
                                <span className="upper__text">
                                    Специалист по коррекции пищевого поведения <br />
                                    и избыточной массы тела, нутрициолог,<br/> психодиетолог
                                </span>
                            </div>
                            <img className="line" src={line} alt="" />
                            <div className="bottom__content">
                                <div className="bottomContent__image-wrapper">
                                    <img className="bottomContent__image" src={ownerImage} alt="ownerImage" />
                                </div>
                                <span className="bottom__text">
                                    Приведу к стройности<br/> без диет и ограничений!<br/> Со мной вы полюбите<br/> свое тело и сохраните<br/> результат навсегда
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    );
}