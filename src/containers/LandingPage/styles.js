import styled from 'styled-components';
import { NavBtn } from 'src/containers/NavBar/styles';
import Search from 'src/assets/svg/Search';

export const Container = styled.div`
  position: relative;
  color: ${props => props.theme.colors.white};
  height: 100%;
  min-height: 80vh;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: -61px;
  left: 0;
  height: 100vh;
  object-fit: cover;
  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

export const MainHeader = styled.h1`
  margin: 0;
  text-shadow: 1px 1px ${props => props.theme.colors.black};
`;

export const SubHeader = styled.h2`
  margin: 0 0 10px;
  text-shadow: 1px 1px ${props => props.theme.colors.black};
`;

export const SearchBarContainer = styled.div`
  display: flex;
  background-color: ${props => props && props.theme.colors.white};
  font-size: 16px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  width: 55%;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }
`;

export const SearchTitle = styled.h2`
  display: inline-block;
  margin: 0 10px 0 0;
  color: ${props => props && props.theme.colors.black};
  font-size: inherit;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  background-color: ${props => props && props.theme.colors.white};
  border: 0;
  font-size: inherit;
  outline: 0;
  padding: 0;
  font-family: inherit;
  flex: 2;
`;

export const SearchBtn = styled(NavBtn)`
  float: right;
  margin: 0;
`;

export const SearchIcon = styled(Search)`
  width: 18px;
  color: ${props => props && props.theme.colors.teal};
`;
