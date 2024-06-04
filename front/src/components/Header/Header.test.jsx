import { render, screen } from '@testing-library/react'
import Header from './Header';

test("Header renders successfully", () => {
    render(<Header/>);

    const element = screen.getByText(/Test technique/i);

    expect(element).toBeInTheDocument();
})