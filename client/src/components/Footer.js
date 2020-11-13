import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { focusStyle } from '../utils/mixins';

const FooterWrapper = styled.div`
  margin-top: auto;
  background-color: ${theme.colors.dark};
  padding: 10px 20px;
  width: 100%;
  text-align: center;
`;

const Paragraph = styled.p`
  color: ${theme.colors.neutralExtraLight};
  font-size: 12px;
`;

const Link = styled.a`
  border-bottom: 0 solid transparent;
  border-radius: ${theme.radius.sm};
  color: ${theme.colors.btnMainLight};
  cursor: pointer;
  font-size: 12px;
  padding: 0 0.2rem;
  text-decoration: none;
  transition: 0.3s all;
  &:hover {
    border-bottom: 1px solid ${theme.colors.btnMainLight};
  }
  &:focus {
    ${focusStyle}
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Paragraph>
        Trip Expenses App: active maintainer{' '}
        <Link href="https://github.com/ireshka" title="See ireshka Github profile">
          ireshka
        </Link>
        {', '}
        originally created by Warsaw Group during{' '}
        <Link href="https://coderscamp.edu.pl/" title="See CodersCamp Page">
          Coderscamp 2019/2020 edition
        </Link>
        {'.'}
      </Paragraph>
      <Paragraph>
        More info and source code{' '}
        <Link href="https://github.com/ireshka/Trip-Expenses-App.git" title="See on Github">
          here
        </Link>
        {'. '}
        Project licensed under a{' '}
        <Link href="https://opensource.org/licenses/MIT" title="See license text">
          MIT license.
        </Link>
      </Paragraph>
    </FooterWrapper>
  );
};

export default Footer;
