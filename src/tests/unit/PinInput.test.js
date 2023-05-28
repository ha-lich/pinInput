// pinInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PinInput from '@components/PinInput';

describe('PinInput', () => {
  test('should update pinDigits when input value changes', () => {
    const { container } = render(<PinInput />);
    const inputElements = container.querySelectorAll('input');

    fireEvent.change(inputElements[0], { target: { value: '1' } });
    fireEvent.change(inputElements[1], { target: { value: '2' } });
    fireEvent.change(inputElements[2], { target: { value: '3' } });
    fireEvent.change(inputElements[3], { target: { value: '4' } });

    expect(inputElements[0].value).toBe('1');
    expect(inputElements[1].value).toBe('2');
    expect(inputElements[2].value).toBe('3');
    expect(inputElements[3].value).toBe('4');
  });

  test('should toggle secret mode when button is clicked', () => {
    const { container, getByText } = render(<PinInput />);
    const secretModeButton = getByText('Enable Secret Mode');

    fireEvent.click(secretModeButton);
    const inputElements = container.querySelectorAll('input');

    expect(inputElements[0].type).toBe('password');
    expect(inputElements[1].type).toBe('password');
    expect(inputElements[2].type).toBe('password');
    expect(inputElements[3].type).toBe('password');

    fireEvent.click(secretModeButton);

    expect(inputElements[0].type).toBe('text');
    expect(inputElements[1].type).toBe('text');
    expect(inputElements[2].type).toBe('text');
    expect(inputElements[3].type).toBe('text');
  });

  // Add more test cases as needed
});
