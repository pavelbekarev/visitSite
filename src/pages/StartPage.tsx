import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/StartPage.scss";
import start_pageImage from "../img/start_page.png";    

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
                                <span className="profession__descr">
                                    психодиетолог, нутрициолог. <br />
                                    специалист по коррекции пищевого поведения <br />
                                    и избыточной массы тела
                                </span>
                            </div>
                            <a href="" className="contactButton__wrapper">Связаться</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}