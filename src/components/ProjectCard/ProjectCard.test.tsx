import React from "react";
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/projects";

describe('ProjectCard', () => {
    it('renders project information correctly', () => {
      const project = PROJECTS[0];
      const { getByText } = render(<ProjectCard project={project} />);
      expect(getByText(project.name)).toBeInTheDocument();
      expect(getByText(project.description)).toBeInTheDocument();
      expect(getByText(project.tags[0])).toBeInTheDocument();
    });

    it('renders all the tags from a project', ()=>{
      const project = PROJECTS[0];
      const { getByTestId } = render(<ProjectCard project={project} />);
      const tagsContainer= getByTestId('tags');
      expect(tagsContainer.children).toHaveLength(project.tags.length);
    })

    const panacticProject = 'Panactic';

  });