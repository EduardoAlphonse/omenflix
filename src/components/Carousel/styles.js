import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  height: auto;
`;

export const TitleStyle = styled.div`
  position: relative;
  left: 0;
  bottom: 15px;
  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `};

  width: 120%;
  height: 20px;

  @media (max-width: 800px) {
    height: 10px;
    bottom: 10px;
  }
`;

export const TitleLabel = styled.span`
  position: relative;
  z-index: 1;
  font-family: 'Lato';
  font-weight: 500;
  font-size: 30px;
  margin-left: 10px;
  
  @media (max-width: 800px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 46px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-top: 40px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
