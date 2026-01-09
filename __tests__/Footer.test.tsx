import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../app/components/Footer'

test('Footer renders correctly', () => {
    render(<Footer />)
    // Check that at least one element contains MarkTale
    expect(screen.getAllByText(/MarkTale/i).length).toBeGreaterThan(0)
    // Check for specific section header
    expect(screen.getByText(/Contact Us/i)).toBeDefined()
})
