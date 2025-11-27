import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CommentArea from '../components/CommentArea'

describe('Testing CommentArea mounting', () => {

    it('Check if CommentArea is mounted', async () => {

    render(<CommentArea/>)

    const comments = await screen.getByTestId('comment-area')

    expect( comments ).toBeInTheDocument()
    })

})