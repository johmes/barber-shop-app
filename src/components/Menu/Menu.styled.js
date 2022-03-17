import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  top: ${({ visible }) => visible ? '0' : '-3.75rem'};
  height: 3.75rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  transition: top .3s;
  z-index: 10;
  background: ${({ theme }) => theme.cardBackgroundColor} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;


  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 4rem;
  }


`;

export const NavLink = styled(Link)`
  margin: 0 1.2rem;
  color: ${({ theme }) => theme.colorAccent};
  font-weight: ${({ theme }) => theme.fontMedium};
  text-transform: uppercase;
  letter-spacing: 0.09rem;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    color: ${({ theme }) => theme.primaryDark};

    transition: color .3s linear;
    font-size: 1rem;
    padding: 1.5rem 0;


  }

  .Cta {
    color: ${({ theme }) => theme.textColorPrimary};
  }

  &:hover{
    transition: all .2s linear;
  }



  h1 {
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.smallTextFont};
    text-align: center;
    margin: 0 auto;
    transition: .2s linear;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    letter-spacing: 0px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: ${({ theme }) => theme.mediumTextFont};
    }

  }

`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 2rem;
    margin: 0;
    flex-direction: column;
    transition: transform .3s ease-in;
    background: ${({ theme }) => theme.primaryLight};
    opacity: ${({ open }) => open ? '1' : '0'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 11;
    
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  @keyframes fadeout {
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
  }
`;