import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
`;

export const RightColumn = styled.div`
  height: calc(100vh - 61px);
  width: 40%;
  overflow-y: scroll;
`;

export const Map = styled.div`
  height: calc(100vh - 101px);
`;
