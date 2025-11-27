import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CommentArea from '../components/CommentArea'

describe('Testing CommentArea mounting', () => {

    it('Check if CommentArea is mounted', () => {

    render(<CommentArea/>)

    const comments = screen.getByTestId('comment-area')

    expect(comments).toBeInTheDocument()
    })

})