import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am a very persevering and curious person. During the early years of my professional life I dedicated myself to what I studied, I was a Biochemist and specialized in hematology. However, I was still looking for something that would motivate me and allow me to constantly grow. In that search I found code and, although the change was difficult, every day is a confirmation of my decision. I found what I like to do and now it's just a matter of continuing to advance and grow. I love programming and always try to give my best. I enjoy working in teams and on projects that improve people's lives. Throughout my training I met many people who helped me develop different skills (communication, active listening, organization, leadership) and to whom I am extremely grateful. I believe that if you do what you love, you can become the best version of yourself, that's why I want to believe that I am on that path.      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
