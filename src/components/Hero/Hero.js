import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Silvi Bordon <br />
          Full Stack Developer <br />
        </SectionTitle>
        <SectionText>
        "Success is not final, failure is not fatal: what really counts is the courage to continue - Winston Churchill."        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;