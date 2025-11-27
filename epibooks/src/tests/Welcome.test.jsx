import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Welcome from '../components/Welcome'

describe('Testing initial mounting', () => {
    
    it('checks if <Welcome/> is mounted correctly', () => {

        render(<Welcome/>)

        const welcome = screen.getByText('Benvenuti in EpiBooks!')

        expect(welcome).toBeInTheDocument()
    })
    
    }
)