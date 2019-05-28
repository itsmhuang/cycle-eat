import styled from 'styled-components';

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
  margin-top: 0;
  text-shadow: 1px 1px ${props => props.theme.colors.black};
`;

