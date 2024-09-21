import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import SkillChip from './SkillChip';
import { TAGS_ENUM } from "@/types/projectTypes";

describe('SkillChip Tests', () => {
    it('renders the skill chip', () => {
      const skill = TAGS_ENUM.REACT;
      const { getByText } = render(<SkillChip skill={skill} />);
      expect(getByText(skill)).toBeInTheDocument();
    });
  });