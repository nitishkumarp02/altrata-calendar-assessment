/* eslint-env vitest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Calendar from '../components/Calendar';

describe('Calendar component', () => {
  test('renders month and year', () => {
    const date = new Date(2022, 9, 3);
    render(<Calendar date={date} />);
    expect(screen.getByText(/October 2022/i)).toBeInTheDocument();
  });

  test('renders weekdays', () => {
    const date = new Date(2022, 9, 3);
    render(<Calendar date={date} />);
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    days.forEach(d => expect(screen.getByText(d)).toBeInTheDocument());
  });

  test('highlights selected date', () => {
    const date = new Date(2022, 9, 3);
    render(<Calendar date={date} />);
    const elements = screen.getAllByText('3'); // sometimes multiple "3"s exist
    const highlighted = elements.find(el => el.className.includes('selected'));
    expect(highlighted).toBeTruthy();
  });

    test('renders month days correctly', () => {
        const date = new Date(2022, 9, 3);
        render(<Calendar date={date} />);
        const allOnes = screen.getAllByText('1');
        const currentMonthOne = allOnes.find(el => !el.className.includes('outside'));
        const all31s = screen.getAllByText('31');
        const currentMonth31 = all31s.find(el => !el.className.includes('outside'));
        expect(currentMonthOne).toBeTruthy();
        expect(currentMonth31).toBeTruthy();
    });


  test('renders days outside current month', () => {
    const date = new Date(2022, 9, 3);
    render(<Calendar date={date} />);
    const all30s = screen.getAllByText('30');
    const outsideDay = all30s.find(el => el.className.includes('outside'));
    expect(outsideDay).toBeTruthy();
  });
});
