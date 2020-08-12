import React, { useState } from 'react';
import {
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import IP from '../../images/BeyonceIvyPark.png'
import FP from '../../images/FreshPrince.png'
import VS from '../../images/VansSimpsons.png'

const items = [
  {
    id: 1,
    altText: 'Ivy Park x Adidas',
    caption: 'Ivy Park x Adidas',
    src: IP
  },
  {
    id: 2,
    altText: 'Jordan x Fresh Prince',
    caption: 'Jordan x Fresh Prince',
    src: FP
  },
  {
    id: 3,
    altText: 'Vans x Simpsons Collab',
    caption: 'Vans x Simpsons Collab',
    src: VS
  }
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >

        <img src={item.src} alt={item.altText} width="50%" height="500" />

        <CarouselCaption className="text-danger" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div align="middle">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: #f8f8f8;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;