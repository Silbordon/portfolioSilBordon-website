import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Silvi Bordon <br />
        </SectionTitle>
        <SectionText>
        I am a very persevering and curious person. During the first years of my working life, I dedicated myself to what I studied, I was a Biochemist and specialized in hematology. However, I was still looking for something that motivated me and allowed me to grow constantly. In that search, I found code and, while the change was difficult, each day is a confirmation of my decision. I found what I like to do and now it's just a matter of continuing to move forward and grow. I love coding and always try to give my best. I enjoy working in a team and on projects that improve people's lives. I believe that if you do what you love, you can become the best version of yourself, so I want to believe that I am on that path.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;