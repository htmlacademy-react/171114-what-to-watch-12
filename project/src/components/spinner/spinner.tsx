import { CSSProperties } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const override: CSSProperties = {
  display: 'block',
  position: 'relative',
  margin: '2',
  borderColor: '#3d0000',
  top: '200px',
  left: '50%',
  zIndex: '100'
};

type SpinnerProps = {
  loading: boolean;
};

function Spinner ({loading}: SpinnerProps): JSX.Element {
  return (
    <div className="sweet-loading">
      <BeatLoader
        color='#2B1B1B'
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
}

export default Spinner;
