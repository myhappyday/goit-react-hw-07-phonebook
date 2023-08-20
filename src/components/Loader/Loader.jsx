import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={100}
        width={100}
        color="rgba(185, 183, 240, 0.8)"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgba(185, 183, 240, 0.8)"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </LoaderWrapper>
  );
};

export default Loader;
