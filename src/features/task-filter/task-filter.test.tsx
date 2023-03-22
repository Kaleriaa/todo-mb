import React from 'react'
import { updateFilter } from '@entities/filter/model'
import { Filter } from '@entities/filter/type'
import { clearCompleted } from '@entities/task/model'
import { Task } from '@entities/task/type'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Filters } from '.'

jest.mock('effector-react', () => ({
    useUnit: jest.fn(),
}))

describe('<Filters />', () => {
    it('renders filters and left items with correct values', () => {
        const tasksLeft: Task[] = [
            { id: 'gg', text: 'Task 1', isClosed: true },
            { id: 'ff', text: 'Task 2', isClosed: true },
            { id: 'qq', text: 'Task 3', isClosed: true },
        ]
        const useUnit = jest.fn()

        const filter: Filter = Filter.All
        ;(useUnit as jest.Mock).mockReturnValueOnce([tasksLeft, filter])

        const { container } = render(<Filters />)

        const leftItemsElement = screen.getByText('0 items left')
        const allRadioButton: HTMLInputElement =
            container.querySelector('input[value="All"]')!

        expect(leftItemsElement).toBeDefined()
        expect(allRadioButton).toBeDefined()
        expect(allRadioButton.checked).toBe(true)
    })

    it('calls updateFilter when radio button is clicked', () => {
        const tasksLeft: Task[] = []
        const filter = Filter.Active
        const updateFilterMock = jest.fn()
        updateFilter.watch(updateFilterMock)
        const useUnit = jest.fn()

        ;(useUnit as jest.Mock).mockReturnValueOnce([tasksLeft, filter]) // Using Jest's `mockReturnValueOnce` to specify the return value for this test only

        act(() => {
            updateFilter(filter)
        })
        render(<Filters />)

        const activeRadioButton = screen.getByLabelText('Active')
        fireEvent.click(activeRadioButton)

        expect(updateFilterMock).toHaveBeenCalledTimes(1)
        expect(updateFilterMock).toHaveBeenCalledWith(Filter.Active)
    })

    it('calls clearCompleted when clear button is clicked', () => {
        const tasksLeft: Task[] = []
        const filter = Filter.All
        const clearCompletedMock = jest.fn()
        const useUnit = jest.fn()

        ;(useUnit as jest.Mock).mockReturnValueOnce([tasksLeft, filter])

        render(<Filters />)
        act(() => {
            clearCompleted()
        })

        const clearButton = screen.getByRole('button', {
            name: 'Clear completed',
        })
        fireEvent.click(clearButton)

        expect(clearCompletedMock).toHaveBeenCalledTimes(0)
    })
})
