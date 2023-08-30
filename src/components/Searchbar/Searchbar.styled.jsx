import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 50px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.muted};
  :hover {
    background-color: ${props => props.theme.colors.btnSecondary};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 0;
  background-color: ${props => props.theme.colors.muted};

  svg {
    fill: ${props => props.theme.colors.btnSecondary};
    stroke: ${props => props.theme.colors.btnSecondary};
    stroke-width: 2px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    svg {
      transform: scale(1.2);
      fill: ${props => props.theme.colors.muted};
      stroke: ${props => props.theme.colors.muted};
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  transition: 0.5s;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.colors.btnSecondary};
  }
`;
