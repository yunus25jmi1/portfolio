import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './App';

test('renders MD YUNUS name', () => {
  render(<Component />);
  const nameElement = screen.getByText(/MD YUNUS/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders Summary section', () => {
  render(<Component />);
  const summaryElement = screen.getByText(/Summary/i);
  expect(summaryElement).toBeInTheDocument();
});

test('renders Education section', () => {
  render(<Component />);
  const educationElement = screen.getByText(/Education/i);
  expect(educationElement).toBeInTheDocument();
});

test('renders Experience section', () => {
  render(<Component />);
  const experienceElement = screen.getByText(/Experience/i);
  expect(experienceElement).toBeInTheDocument();
});

test('renders Skills section', () => {
  render(<Component />);
  const skillsElement = screen.getByText(/Skills/i);
  expect(skillsElement).toBeInTheDocument();
});

test('renders Certifications section', () => {
  render(<Component />);
  const certificationsElement = screen.getByText(/Certifications/i);
  expect(certificationsElement).toBeInTheDocument();
});
