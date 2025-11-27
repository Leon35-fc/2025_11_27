import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AllTheBooks from '../components/AllTheBooks'

describe('Testing Card creation', () =>{
    it('Check if all the Cards are created', async () => {
        render(<AllTheBooks/>)

        const cardList = await screen.findAllByRole('img')

        expect(cardList).toHaveLength(150)
    })
})