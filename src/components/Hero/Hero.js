import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding id='hero'>
    <LeftSection>
      <SectionTitle main center>
        Welcome, I am <br />
        Justin a Mern Developer
      </SectionTitle>
      <SectionText>
      I am a full-stack developer specialized in building and occasionally designing exceptional digital experiences.
       Currently, I am focused on building responsive full-stack web applications.
      </SectionText>
      <Button onClick={()=> window.location = 'mailto:justiniyke1995@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;