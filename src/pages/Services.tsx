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
                            <h1 className="services__h1">Предоставляю услуги управленческого консалтинга «Ресурс»</h1>
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
                                                <span>
                                                    <i>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   Диогностика процессов с целью выявления точек роста и составления индивидуального плана развития (ИПР);</li>
                                                    <li>—   Разработка стратегии роста и развития персонала.</li>
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
                                                <span>
                                                    <i>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   Построение оргструктуры компании и план найма, адаптация и обучения персонала, система наставничества;</li>
                                                    <li>—   Прописанные бизнес процессы;</li>
                                                    <li>—   Мотивация и показатели персонала;</li>
                                                    <li>—   Сопровождение работы от 1 до 3 месяцев.</li>
                                                </ul>
                                                <div className="prices__info">
                                                    
                                                </div>
                                                <a href="https://forms.gle/sJ8dzb5fJD8zPuTWA" target="_blank" className="registration__button">
                                                    Записаться
                                                </a>
                                            </div>
                                        }
                                    </div>

                                    

                                    <div className={`accordion-item `} >
                                        <div 
                                            className={`accordion-header`}
                                            onClick={() => {
                                                setitem1Visible(!item1Visible);
                                            }}
                                        >
                                            Создание стратегии развития и цели на год или полугодие
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
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   Анализ возможностей и рисков;</li>
                                                    <li>—   Пошаговый план развития и цель;</li>
                                                    <li>—   Пути достижения.</li>
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
                                            Создание и описание миссии, ценностей и этики компании
                                        </div>
                                        {
                                            item2Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        <i>
                                                            Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                        </i>
                                                    </span>
                                                    <ul className="list">
                                                        <li>—   Сформированное и прописаное видение, ценности и этика компании;</li>
                                                        <li>—   Оформленные и прописанные правила внутреннего трудового распорядка компании, правила взаимодействия и подход к работе;</li>
                                                        <li>—   Общее виденье всего персонала.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        <span>Данный пакет необходим при вводе в должность нового сотрудника.</span>
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
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </span>
                                                    <ul className="list">
                                                        <li>—   Структура компании;</li>
                                                        <li>—   Четкие показатели каждого отдела и должности;</li>
                                                        <li>—   Стратегия роста компании (куда, какие сотрудники нужны).</li>
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
                                            Описание бизнес-процесса и функционала
                                        </div>
                                        {
                                            item4Visible 
                                            &&
                                                <div 
                                                    className="accordion-content"
                                                >
                                                    <span>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </span>
                                                    <ul className="list">
                                                        <li>—   Описание регламента процессов каждого подразделения и их показатели;</li>
                                                        <li>—   Описание функционала каждой должности и kpi.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        <span>Данный пакет необходим при вводе в должность нового сотрудника.</span>
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
                                                        В процессе работы провожу опрос, анкетирование или интервью, формируем предложение на основе показателей.<br/> Примерный план мероприятий: на командообразование, улучшение коммуникаций, обучающие, анализирующие, планирование и т.д.<br/>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </span>
                                                    <ul className="list">
                                                        <li>—   Повышенная лояльность и вовлеченность сотрудников;</li>
                                                        <li>—   План и сроки мероприятий;</li>
                                                        <li>—   Профилактика выгорания;</li>
                                                        <li>—   Примерный бюджет на год.</li>
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
                                                        Проведение индивидуальной фокус группы и формируем план.<br/>
                                                        Работа с экспертом и тренером по повышению эффективности в сфере продаж и сервиса услуг.
                                                        
                                                        Описание сервиса услуг
                                                        Данный продукт получает. <br/>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </span>
                                                    <h4>Результаты</h4>
                                                    <ul className="list">
                                                        <li>—   Описание продукта компании;</li>
                                                        <li>—   План и сроки мероприятий;</li>
                                                        <li>—   Профилактика выгорания;</li>
                                                        <li>—   Примерный бюджет на год.</li>
                                                    </ul>
                                                    <div className="prices__info">
                                                        <span>Данный пакет необходим при вводе в должность нового сотрудника.</span>
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
                                                <span>
                                                    <i>
                                                        По словам Питера Друкера, «культура съедает стратегию на завтрак». Обратите внимание: на завтрак. То есть компания проснулась, умылась, привела в первичный порядок свои процессы, взяла стратегию, думает: «Пойду работать — стратегию воплощать». Села позавтракать...<br/> р-раз — а стратегия уже съедена.
                                                        <br/>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   Сделаем аудит;</li>
                                                    <li>—   Составим план;</li>
                                                    <li>—   Формируем ряд мероприятий, традиций компании;</li>
                                                    <li>—   Создаём атмосферу для повышения лояльности сотрудников при помощи стимула и мотивационых инструментов;</li>
                                                    <li>—   Пошаговый план внедрения.</li>
                                                </ul>
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
                                                <span>
                                                    <i>
                                                        Проведение индивидуальной фокус группы, после чего согласовываем план действий.<br/>
                                                        Под ваш запрос формируем цель и программу.
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   Командообразование;</li>
                                                    <li>—   Комуникации;</li>
                                                    <li>—   Анализ слабых и сильных сторон команды;</li>
                                                    <li>—   Вовлечённость персонала;</li>
                                                    <li>—   Развитие профессиональных компетенций сотрудников.</li>
                                                </ul>
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
                                                        После проведения индивидуальной фокус группы составим план со сроками.<br/> 
                                                        Перед вами примерный план абонемента с моим сопровождением:
                                                    </i>
                                                </span>
                                                <ul className="list">
                                                    <li>—   составление профиля кандидата - 1 вакансия;</li>
                                                    <li>—   размещение вакансии в каб. компании;</li>
                                                    <li>—   работа с откликами и поиск кандидатов на вашей платформе (оплата пакета за счет компании);</li>
                                                    <li>—   проведение тестового дня с новыми кандидатами и оценка компетенции;</li>
                                                    <li>—   составление плана стажировки;</li>
                                                    <li>—   организация и проведение аттестации сотрудника (итог аттестации);</li>
                                                    <li>—   подготовка должностных документов на 1 должности;</li>
                                                    <li>—   разработка мотивации должности - 1 вакансия;</li>
                                                    <li>—   разработка положения о конфиденциальности работы в компании;</li>
                                                    {/* <li>—   прописанный регламент работы 1 отдела.</li> */}
                                                    <li>—   сессия по ценностям и этики компании;</li>
                                                    <li>—   игра  практика на командообразование (1 игра);</li>
                                                    <li>—   консультации по управлению — 4 часов;</li>
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
                                                            Проведение 2-х часовой сессии со всеми топами компании.<br/>
                                                            Перед вами примерный план, что может входить в абонемент:
                                                        </i>
                                                    </span>
                                                    <ul className="list">
                                                        <li>—   составление профиля кандидата - 2 вакансии;</li>
                                                        <li>—   размещение 2 вакансий в каб. компании;</li>
                                                        <li>—   работа с откликами и поиск кандидатов на вашей платформе (оплата пакета за счет компании);</li>
                                                        <li>—   проведение тестового дня с новыми кандидатами и оценка компетенции;</li>
                                                        <li>—   составление плана стажировки;</li>
                                                        <li>—   организация и проведение аттестации сотрудника (итог аттестации); </li>
                                                        <li>—   подготовка должностных документов на 4 должности; </li>
                                                        <li>—   разработка мотивации должности;</li>
                                                        <li>—   разработка положения о конфиденциальности работы в компании;</li>
                                                        <li>—   прописанный регламент работы 1 отдела;</li>
                                                        <li>—   сессия по ценностям и этики компании;</li>
                                                        <li>—   игра  практика на командообразование (1 игра);</li>
                                                        <li>—   консультации по управлению — 10 часов;</li>
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