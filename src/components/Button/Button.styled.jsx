import styled from 'styled-components';

export const DivBtnLoadMore = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

export const BtnLoadMore = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.muted};
  color: ${props => props.theme.colors.btnSecondary};
  font-weight: 600;
  cursor: pointer;

  &:hover,
  :focus-visible,
  :active {
    background-color: ${props => props.theme.colors.btnSecondary};
    color: ${props => props.theme.colors.muted};
  }
`;
