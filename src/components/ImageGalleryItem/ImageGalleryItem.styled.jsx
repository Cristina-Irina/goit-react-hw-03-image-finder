import styled from 'styled-components';

export const GalleryItem = styled.li`
  background-color: rgb(231, 231, 229);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 10px 10px 18px -12px #000000;
  background: #40414f;
  padding: 4px;
  transition: transform 250ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ImageStyle = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
