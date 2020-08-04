import styled from 'styled-components';

export const VideoLabelContainer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35px;
  background-color: ${({ categoryColor }) => categoryColor};
`;

export const VideoLabel = styled.span`
  position: absolute;
  left: 0;
  right: auto;
  bottom: 0;
  white-space: nowrap;
  padding: 5px;

  transition: transform 5s linear;
`;

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  &:hover ${VideoLabel},
  &:focus ${VideoLabel} {
    transform: translateX(calc(-1 * (100% - 298px)));
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
