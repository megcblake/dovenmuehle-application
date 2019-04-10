import React from 'react';
import HeaderLink from './HeaderLink';
import Wrapper from './Wrapper';

const Nav = () => (
  <Wrapper>
    <HeaderLink to="/">Home</HeaderLink>
    <HeaderLink to="/display">Items</HeaderLink>
  </Wrapper>
);

export default Nav;
