import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { TitleComponent } from './TitleComponent';

describe('TitleComponent', () => {
  it('renders the title', () => {
    const title = 'Test Title';
    const { getByText } = render(<TitleComponent title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('renders with correct classes', () => {
    const title = 'Test Title';
    const { getByText } = render(<TitleComponent title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toHaveClass('px-4 text-center text-6xl font-bold');
    expect(titleElement.parentElement).toHaveClass('flex mx-auto');
  });
});