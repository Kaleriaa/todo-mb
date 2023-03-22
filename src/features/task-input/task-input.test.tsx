import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { TaskInput } from '.'

jest.mock('@entities/task/model', () => ({
    addTask: jest.fn(),
}))

describe('TaskInput', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })

    it('renders the component', () => {
        const { getByPlaceholderText } = render(<TaskInput />)
        expect(getByPlaceholderText('What needs to be done?')).toBeDefined()
    })

    it('updates the "value" state on input change', () => {
        const { getByPlaceholderText } = render(<TaskInput />)
        const inputField = getByPlaceholderText(
            'What needs to be done?',
        ) as HTMLInputElement
        fireEvent.change(inputField, { target: { value: 'foo' } })
        expect(inputField.value).toBe('foo')
    })

    it('calls "addTask" function on "Enter" key press', () => {
        const { getByPlaceholderText } = render(<TaskInput />)
        const inputField = getByPlaceholderText(
            'What needs to be done?',
        ) as HTMLInputElement
        fireEvent.change(inputField, { target: { value: 'foo' } })
        fireEvent.keyDown(inputField, { code: 'Enter' })
        const addTask = jest.fn()

        act(() => {
            addTask('foo')
        })
        expect(addTask).toBeCalledWith('foo')
        expect(inputField.value).toBe('')
    })
})
