import styled from 'styled-components';
import heroImgPath from 'public/assets/bike-menu.jpg';

export const Container = styled.div`
  //margin: 0 auto;
  position: relative;
  //top: 0;
  //left: 0;
  //min-height: 100vh;

  
  //background-size: cover;
  color: ${props => props.theme.colors.white};
  margin: 0 auto;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: -61px;
  left: 0;
  height: 100vh;
`;


