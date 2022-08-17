import { ThreeDots } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ThreeDots height="27" width="27" color="#ffffff" ariaLabel="loading" />
    </div>
  );
};
