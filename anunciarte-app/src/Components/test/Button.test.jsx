import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../atoms/Button';

describe('Button', () => {
  it('should render the correct content', () => {
    render(<Button style="BlueButton" text="Contact" arrow={false} />);

    expect(screen.getAllByText('Contact')).toBeDefined();
    expect(screen.queryByText('➔')).toBeNull(); 
  });

  it('should render the arrow icon when the arrow prop is true', () => {
    render(<Button style="BlueButton" text="Contact" arrow={true} />);

    expect(screen.getAllByText('Contact')).toBeDefined();
    expect(screen.getAllByText('➔')).toBeDefined();
  });
});

