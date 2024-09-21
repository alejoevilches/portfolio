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
});