import styled from 'styled-components';
import { NavBtn } from 'src/containers/NavBar/styles';
import Search from 'src/assets/svg/Search';

export const SearchBarForm = styled.form`
  display: flex;
  background-color: ${props => props && props.theme.colors.white};
  outline: 0;
  padding: 10px;
  margin: 0 auto;
  width: 55%;
  border-radius: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  .form-group {
    position: relative;
    flex: 2;
    margin-right: 10px;
  }

  .form-input {
    display: inline-block;
    background-color: ${props => props && props.theme.colors.white};
    border: 0;
    font-size: inherit;
    outline: 0;
    padding: 0;
    font-family: inherit;
    width: 100%;
  }

  .autocomplete-container {
    position: absolute;
    top: 30.5px;
    background-color: ${props => props && props.theme.colors.white};
    border: 0;
    border-top: ${props =>
      props && `1px solid ${props.theme.colors.lightGray}`};
    width: 100%;
    text-align: left;
  }
`;

export const SearchTitle = styled.h2`
  display: inline-block;
  margin: 0 10px 0 0;
  color: ${props => props && props.theme.colors.black};
  font-size: inherit;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  display: inline-block;
  background-color: ${props => props && props.theme.colors.white};
  border: 0;
  font-size: inherit;
  outline: 0;
  padding: 0;
  font-family: inherit;
  width: 100%;
`;

export const SearchBtn = styled(NavBtn)`
  background-color: ${props => props && props.theme.colors.white};
  float: right;
  margin: 0;
`;

export const SearchIcon = styled(Search)`
  width: 18px;
  color: ${props => props && props.theme.colors.teal};
`;
