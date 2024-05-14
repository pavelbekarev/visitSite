import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/Contacts.scss";


export const Contacts = () => {
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
                        <div className="contacts__wrapper">
                            <h1 className="contacts__h1">Контакты</h1>
                            <span className="contacts__text">Чтобы записаться на консультацию или задать вопрос, напишите мне</span>
                            <a className="social" href="tg://resolve?domain=Natal_verina" target="_blank">Telegram</a>
                            <a className="social" href="https://vk.com/im?sel=152908366" target="_blank">ВКонтакте</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}