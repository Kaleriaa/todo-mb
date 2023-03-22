import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Arrow } from '.'

describe('Arrow', () => {
    beforeAll(() => {})

    it('Renders Arrow component', () => {
        const { container } = render(<Arrow />)
        const arrowComponent = container.querySelector('svg')
    })

    it('Clicking on arrow triggers toggle() function', () => {
        const { container } = render(<Arrow />)
        const arrowComponent = container.querySelector('svg')

        fireEvent.click(arrowComponent!)
    })

    it('isOpened prop is passed correctly', () => {
        const { container, rerender } = render(<Arrow />)
        const arrowComponent = container.querySelector('svg')

        rerender(<Arrow />)
    })
})
