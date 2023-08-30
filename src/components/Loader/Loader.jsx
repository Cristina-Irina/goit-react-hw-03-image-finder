import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </LoaderWrap>
  );
};
