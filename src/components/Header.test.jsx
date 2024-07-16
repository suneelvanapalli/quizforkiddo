import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
