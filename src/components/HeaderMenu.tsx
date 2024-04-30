import { Link } from "react-router-dom";
import "../styles/HeaderMenu.scss";


export const HeaderMenu = (): JSX.Element => {
    return (
        <div className="headerMenu__wrapper">
            <ul className="headerList">
                <li className="headerList__item"><Link to={"/about"}>обо мне</Link></li>
                <li className="headerList__item"><Link to={"/services"}>услуги</Link></li>
                <li className="headerList__item"><Link to={"/reviews"}>отзывы</Link></li>
                <li className="headerList__item"><Link to={"/contacts"}>контакты</Link></li>
            </ul>
        </div>
    )
}
