import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../app/components/Footer'

test('Footer renders correctly', () => {
    render(<Footer />)
    expect(screen.getByText(/MarkTale/i)).toBeDefined()
    expect(screen.getByText(/Contact Us/i)).toBeDefined()
})
