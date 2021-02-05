import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrumPad from './DrumPad';

describe('<DrumPad />', () => {
  test('it should mount', () => {
    render(<DrumPad />);
    
    const drumPad = screen.getByTestId('DrumPad');

    expect(drumPad).toBeInTheDocument();
  });
});