import  React, { useState } from "react";
import "react-dom";
import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/Reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="slider__block">
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae quae illo qui, facere tenetur mollitia, reiciendis aliquid dolor officiis dolore quaerat! Voluptatibus est nihil laboriosam quis magnam quam autem.</span>
      </div>
      <div>
        <span className="slider__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, animi! Velit veritatis, molestiae cumque veniam asperiores quas temporibus corrupti, beatae corporis, dignissimos maxime reiciendis repellat? Accusamus suscipit enim aperiam optio?</span>
      </div>
    </Slider>
  );
}



export const Reviews = () => {
    const [isRight, setIsRight] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const step = "400";

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
                        <div className="reviews__wrapper">
                            <h1 className="reviews__h1">Отзывы</h1>
                            <div className="slider__wrapper">
                                <SimpleSlider />

                            </div>
                            <h1 className="reviews__h1">Выполненные работы</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}