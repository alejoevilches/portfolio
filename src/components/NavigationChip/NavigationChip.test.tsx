import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { NavigationChip } from './NavigationChip';
import { Sections } from "@/constants/sections"

describe('NavigationChipTests', ()=>{
    it('renders the sections', ()=>{
        const { getByText } = render(<NavigationChip />);
        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('Profile')).toBeInTheDocument();
        expect(getByText('Contact')).toBeInTheDocument();
    })

    it('renders the navigation chip with the correct number of sections', () => {
        const { getAllByRole } = render(<NavigationChip />);
        expect(getAllByRole('link')).toHaveLength(Sections.length);
      });
})