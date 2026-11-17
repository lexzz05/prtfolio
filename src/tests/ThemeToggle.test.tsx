import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeToggle } from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  it('calls the toggle handler when clicked', () => {
    const onToggle = jest.fn();
    render(<ThemeToggle theme="dark" onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /switch to light theme/i }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
