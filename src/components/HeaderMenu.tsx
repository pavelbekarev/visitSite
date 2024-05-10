import { Link } from "react-router-dom";
import "../styles/HeaderMenu.scss";


export const HeaderMenu = (): JSX.Element => {
    return (
        <div className="headerMenu__wrapper">
            <ul className="headerList">
                <li className="headerList__item"><Link to={"/about"}>Обо мне</Link></li>
                <li className="headerList__item"><Link to={"/services"}>Услуги</Link></li>
                <li className="headerList__item"><Link to={"/reviews"}>Отзывы</Link></li>
                <li className="headerList__item"><Link to={"/contacts"}>Контакты</Link></li>
            </ul>
        </div>
    )
}
