import PropTypes from 'prop-types';
import { DivBtnLoadMore, BtnLoadMore } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <DivBtnLoadMore>
      <BtnLoadMore type="button" onClick={onClick}>
        {text}
      </BtnLoadMore>
    </DivBtnLoadMore>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
