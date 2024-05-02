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
                                <span className="profession__descr">
                                    Автор и интегратор проекта Ресурс <br/>
                                    HRBP, Управленец, педагог-психолог, коуч.
                                </span>
                            </div>
                            <a href="https://vk.com/im?sel=152908366" target="_blank" className="contactButton__wrapper">Связаться</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}