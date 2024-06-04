import { render, screen } from '@testing-library/react'
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


test("Header renders successfully", () => {
    render(
    <MemoryRouter>
        <Header/>
    </MemoryRouter>
);

    const element = screen.getByText(/Test technique/i);

    expect(element).toBeInTheDocument();
})