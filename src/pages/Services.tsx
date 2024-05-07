import { useState } from "react";
import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/Services.scss";


export const Services = (): JSX.Element => {
    const [item1Visible, setitem1Visible]= useState<Boolean>(false);
    const [item2Visible, setitem2Visible]= useState<Boolean>(false);
    const [item3Visible, setitem3Visible]= useState<Boolean>(false);
    const [item4Visible, setitem4Visible]= useState<Boolean>(false);
    const [item5Visible, setitem5Visible]= useState<Boolean>(false);
    const [item6Visible, setitem6Visible]= useState<Boolean>(false);
    const [item7Visible, setitem7Visible]= useState<Boolean>(false);
    const [item8Visible, setitem8Visible]= useState<Boolean>(false);
    const [item9Visible, setitem9Visible]= useState<Boolean>(false);
    const [item10Visible, setitem10Visible]= useState<Boolean>(false);
    const [item11Visible, setitem11Visible]= useState<Boolean>(false);
    const [item12Visible, setitem12Visible]= useState<Boolean>(false);

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
                        <div className="services__wrapper">
                            <h1 className="services__h1">Услуги</h1>
                            <div className="servicesContent__wrapper">
                                <div className="accordion">
                                    <div className={`accordion-item ${item1Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem9Visible(!item9Visible);
                                            }}
                                        >
                                            HR-аудит компании
                                        </div>
                                        {
                                            item9Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item9Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   Диогностика процессов с целью выявления точек роста и составления индивидуального плана развития (ИПР)</li>
                                                    <li>—   Разработка стратегии роста численности компании</li>
                                                </ul>
                                                <div className="prices__info">
                                                    
                                                </div>
                                                <a href="https://forms.gle/eN1hoSGFJ7Yua6Kc9" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>
                                    <div className={`accordion-item ${item10Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem10Visible(!item10Visible);
                                            }}
                                        >
                                            HR-архитектура
                                        </div>
                                        {
                                            item10Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item9Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   Построение работы с персоналом</li>
                                                    <li>—   Сопровождение работы</li>
                                                    <li>—   От 1 до 3 месяцев</li>
                                                </ul>
                                                <div className="prices__info">
                                                    
                                                </div>
                                                <a href="https://forms.gle/sJ8dzb5fJD8zPuTWA" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>

                                    

                                    <div className={`accordion-item ${item1Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem1Visible(!item1Visible);
                                            }}
                                        >
                                            Создание стратегии развития и цели на полгода или год
                                        </div>
                                        {
                                            item1Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item1Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                <span>
                                                    <i>
                                                        После проведения сессии (минимум 4 часа сессия или по 2 часа в несколько дней) 
                                                    </i>
                                                </span>
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   Построение оргструктуры компании и план найма, адаптация и обучения персонала, система наставничества</li>
                                                    <li>—   Прописанные бизнес процессы</li>
                                                    <li>—   Мотивация и показатели персонала.</li>
                                                </ul>
                                                <div className="prices__info">
                                                   
                                                </div>
                                                <a href="https://forms.gle/wvTUph8bpFpZoUEK7" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem2Visible(!item2Visible);
                                            }}
                                        >
                                            Сессия по созданию ценностей и этики компании
                                        </div>
                                        {
                                            item2Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        <i>
                                                            Проведение 2-х часовой сессии со всеми топами компании.
                                                        </i>
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Общее виденье и правила как осуществляется работа внутри компании  (взаимодействие и подход к работе).</li>
                                                        <li>—   Оформленный в документ для ознакомления новым сотрудникам при трудоустройстве.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/8vKE64quj55sJUSLA" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem3Visible(!item3Visible);
                                            }}
                                        >
                                            Оргструктура компании
                                        </div>
                                        {
                                            item3Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        Иерархия и порядок взаимодействия отделов
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Структура компании</li>
                                                        <li>—   Четкие показатели каждого отдела</li>
                                                        <li>—   Стратегия роста компании (куда какие сотрудники нужны)</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/gsP2DJ4sQiqiFJZb9" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem4Visible(!item4Visible);
                                            }}
                                        >
                                            Оформление бизнес процессов и распределение функционала между подразделениями
                                        </div>
                                        {
                                            item4Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        Задействованы руководители отделов. Срок 1 месяц (зависит от объема компании)
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Прописанный регламент процессов каждой должности  и показатели</li>
                                                        <li>—   Прописанный функционал должности и показатели.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/so8SJjkKgtY7zssLA" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>

                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem5Visible(!item5Visible);
                                            }}
                                        >
                                            План мотивационных мероприятий для персонала
                                        </div>
                                        {
                                            item5Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                    В процессе работы провожу опрос, анкетирование или интервью, формирую план исходя показателям (на командообразование, улучшение коммуникаций, обучающие, анализирующие, планирование …) 
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Повышенная лояльность и вовлеченность сотрудников</li>
                                                        <li>—   План и сроки мероприятий</li>
                                                        <li>—   Профилактика выгорания</li>
                                                        <li>—   Примерный бюджет на год</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/4uhNBXUQeKYLpQki6" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>

                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem6Visible(!item6Visible);
                                            }}
                                        >
                                            Книга продукта
                                        </div>
                                        {
                                            item6Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        Работа с экспертом и тренером для отдела продаж.
                                                    </span>
                                                    {/* <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Повышенная лояльность и вовлеченность сотрудников</li>
                                                        <li>—   План и сроки мероприятий</li>
                                                        <li>—   Профилактика выгорания</li>
                                                        <li>—   Примерный бюджет на год</li>
                                                    </ul> */}
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/xWhH1CJar6SKdT5K8" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>
                                    <div className={`accordion-item ${item11Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem11Visible(!item11Visible);
                                            }}
                                        >
                                            Создание корпоративной культуры
                                        </div>
                                        {
                                            item11Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item1Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                {/* <span>
                                                    <i>
                                                        После проведения сессии (минимум 4 часа сессия или по 2 часа в несколько дней) 
                                                    </i>
                                                </span>
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   Построение оргструктуры компании и план найма, адаптация и обучения персонала, система наставничества</li>
                                                    <li>—   Прописанные бизнес процессы</li>
                                                    <li>—   Мотивация и показатели персонала.</li>
                                                </ul> */}
                                                <div className="prices__info">
                                                   
                                                </div>
                                                <a href="https://forms.gle/XxzYbCeBJ3nev4i9A" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>
                                    <div className={`accordion-item ${item12Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem12Visible(!item12Visible);
                                            }}
                                        >
                                            Проведение деловых игр и тренингов
                                        </div>
                                        {
                                            item12Visible 
                                            &&
                                            <div 
                                                className={`accordion-content ${item1Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                {/* <span>
                                                    <i>
                                                        После проведения сессии (минимум 4 часа сессия или по 2 часа в несколько дней) 
                                                    </i>
                                                </span>
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   Построение оргструктуры компании и план найма, адаптация и обучения персонала, система наставничества</li>
                                                    <li>—   Прописанные бизнес процессы</li>
                                                    <li>—   Мотивация и показатели персонала.</li>
                                                </ul> */}
                                                <div className="prices__info">
                                                   
                                                </div>
                                                <a href="https://forms.gle/jBYakWaSS6b4U3Xz9" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>


                            <h1 className="services__h1">Пакеты</h1>
                            <div className="servicesContent__wrapper">
                                <div className="accordion">
                                    <div className={`accordion-item ${item7Visible ? "accordion__animation" : ""}`} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem7Visible(!item7Visible);
                                            }}
                                        >
                                            Абонемент на месяц
                                        </div>
                                        {
                                            item7Visible 
                                            &&
                                            <form 
                                                className={`accordion-content ${item1Visible ? "accordion__animation" : ""}`}
                                                // style={(item1Visible || !item1Visible) && {transition: "0.3s all ease"}}
                                            >
                                                <span>
                                                    <i>
                                                        После проведения сессии (минимум 4 часа сессия или по 2 часа в несколько дней) 
                                                    </i>
                                                </span>
                                                <h4>Результаты</h4>
                                                <ul className="list">
                                                    <li>—   составление профиля кандидата - 1 вакансия;</li>
                                                    <li>—   размещение вакансии в каб. компании;</li>
                                                    <li>—   работа с откликами и поиск кандидатов на вашей платформе (оплата пакета за счет компании).</li>
                                                    <li>—   проведение тестового дня с новыми кандидатами и оценка компетенции;</li>
                                                    <li>—   составление плана стажировки;</li>
                                                    <li>—   организация и проведение аттестации сотрудника (итог аттестации);</li>
                                                    <li>—   подготовка должностных документов на 1 должности;</li>
                                                    <li>—   разработка мотивации должности - 1 вакансия;</li>
                                                    <li>—   разработка положения о конфиденциальности работы в компании;</li>
                                                    {/* <li>—   прописанный регламент работы 1 отдела.</li> */}
                                                    <li>—   сессия по ценностям и этики компании;</li>
                                                    <li>—   игра  практика на командообразование (1 игра)</li>
                                                    <li>—   консультации по управлению — 4 часов.</li>
                                                    <li>—   скидка 10% на все сессии и участие в проектах консалтинга.</li>
                                                </ul>
                                                <div className="prices__info">
                                                   
                                                </div>
                                                <a 
                                                    type="submit" 
                                                    href="https://forms.gle/oRj2uiEAWbi2zu7i8" 
                                                    target="_blank" 
                                                    className="registration__button"
                                                >
                                                    Записаться
                                                </a>
                                            </form>
                                        }
                                    </div>
                                    <div className="accordion-item">
                                        <div 
                                            className="accordion-header"
                                            onClick={() => {
                                                setitem8Visible(!item8Visible);
                                            }}
                                        >
                                            абонемент на квартал
                                        </div>
                                        {
                                            item8Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        <i>
                                                            Проведение 2-х часовой сессии со всеми топами компании.
                                                        </i>
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   составление профиля кандидата - 2 вакансии;</li>
                                                        <li>—   размещение 2 вакансий в каб. компании;</li>
                                                        <li>—   работа с откликами и поиск кандидатов на вашей платформе (оплата пакета за счет компании).</li>
                                                        <li>—   проведение тестового дня с новыми кандидатами и оценка компетенции;</li>
                                                        <li>—   составление плана стажировки;</li>
                                                        <li>—   организация и проведение аттестации сотрудника (итог аттестации); </li>
                                                        <li>—   подготовка должностных документов на 4 должности; </li>
                                                        <li>—   разработка мотивации должности</li>
                                                        <li>—   разработка положения о конфиденциальности работы в компании;</li>
                                                        <li>—   прописанный регламент работы 1 отдела.</li>
                                                        <li>—   сессия по ценностям и этики компании;</li>
                                                        <li>—   игра  практика на командообразование (1 игра)</li>
                                                        <li>—   консультации по управлению — 10 часов.</li>
                                                        <li>—   скидка 10% на все сессии и участие в проектах консалтинга.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        
                                                    </div>
                                                    <a href="https://forms.gle/FQKburrJSt4fsD9a6" target="_blank" className="registration__button">
                                                        Записаться
                                                    </a>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}