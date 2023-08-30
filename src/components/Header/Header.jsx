import React from 'react';
import { HeaderStyled } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
};
