import { Triangle } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Triangle
        height="40"
        width="40"
        color="#484c8a"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};
