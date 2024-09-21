import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { NavigationSection } from './NavigationSection';

describe('NavigationSection Tests', () => {
    it('renders the navigation section', () => {
        const { getByRole } = render(<NavigationSection />);
        expect(getByRole('navigation')).toBeInTheDocument();
    })
})