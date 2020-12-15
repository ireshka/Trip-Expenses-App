import React from 'react';

import { StyledFooterWrapper, StyledLink, StyledParagraph } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledParagraph>
        Trip Expenses App: active maintainer{' '}
        <StyledLink href="https://github.com/ireshka" title="See ireshka Github profile">
          ireshka
        </StyledLink>
        {', '}
        originally created by Warsaw Group during{' '}
        <StyledLink href="https://coderscamp.edu.pl/" title="See CodersCamp Page">
          Coderscamp 2019/2020 edition
        </StyledLink>
        {'.'}
      </StyledParagraph>
      <StyledParagraph>
        More info and source code{' '}
        <StyledLink href="https://github.com/ireshka/Trip-Expenses-App.git" title="See on Github">
          here
        </StyledLink>
        {'. '}
        Project licensed under a{' '}
        <StyledLink href="https://opensource.org/licenses/MIT" title="See license text">
          MIT license.
        </StyledLink>
      </StyledParagraph>
    </StyledFooterWrapper>
  );
};

export default Footer;
