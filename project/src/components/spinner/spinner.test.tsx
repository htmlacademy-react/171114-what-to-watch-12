import { render, screen } from '@testing-library/react';
import Spinner from './spinner';
const loading = true;

describe('Component: Spinner', () => {
  it('renders plain block', () => {
    render(
      <Spinner loading={loading}/>
    );
    expect(screen.getByTestId('loader'))
      .toBeInTheDocument();
  });
});
