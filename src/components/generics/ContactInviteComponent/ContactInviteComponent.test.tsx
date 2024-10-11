import React from 'react';
import '@testing-library/jest-dom'
import {render} from '@testing-library/react';
import ContactInviteComponent from './ContactInviteComponent';

describe('ContactInviteComponent', () => {
    it('renders the contact invite component', () => {
        const { getByText } = render(<ContactInviteComponent />);
        expect(getByText('Ready to create great things together?')).toBeInTheDocument();
    });
})