import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import ProfileSubtitleChip from './ProfileSubtitleChip';

describe('ProfileSubtitleChip', ()=>{
    it('should render the subtitle chip', ()=>{
        const {getByRole}=render(<ProfileSubtitleChip subtitle="About me" />)
        expect(getByRole('heading', {level: 2})).toBeInTheDocument()
        }
    )
})