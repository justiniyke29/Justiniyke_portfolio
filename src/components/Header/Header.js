import React from 'react';
//import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Link } from 'react-scroll/modules';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link to='hero'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size='3rem'/> <Span >Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link to= 'projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to='tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
         <Link to='about'>
          <NavLink >About</NavLink>
          </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/justiniyke29' target='_blank' rel='noreferrer'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ikechukwu-anyanwu-42040a242/' target='_blank' rel='noreferrer'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/justiniyke29/' target='_blank' rel='noreferrer'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/justiniyke29' target='_blank' rel='noreferrer'>
        <AiFillTwitterSquare size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
