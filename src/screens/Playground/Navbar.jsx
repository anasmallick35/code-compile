import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  height: ${({ isFullScreen }) => (isFullScreen ? '0' : '4.5rem')};
  background: linear-gradient(135deg, #1a237e, #3949ab);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.3s ease;
`;

const NavbarContent = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #0097d7;
  }
`;

const Logo = styled.img`
  width: 60px;
`;

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span {
    font-weight: 700;
  }
`;

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => navigate('/')}>
        <Logo src={logo} alt="Logo" />
        <MainHeading>
          <span>Code</span> Fresh
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
