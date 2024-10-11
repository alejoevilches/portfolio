import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import FooterComponent from './FooterComponent';

describe('FooterComponent', () => {
    it('renders the footer component', () => {
        const { getByRole } = render(<FooterComponent />);
        expect(getByRole('paragraph')).toBeInTheDocument();
    });
})