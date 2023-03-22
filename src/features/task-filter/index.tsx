import { $filter, updateFilter } from '@entities/filter/model'
import { $tasksLeft, clearCompleted } from '@entities/task/model'
import { useUnit } from 'effector-react'
import { filtersValue } from './constant'
import { Clear, LeftItems, Panel, RadioGroup } from './styled'
import React from 'react'

export const Filters = () => {
    const [tasksLeft, filter] = useUnit([$tasksLeft, $filter])

    return (
        <Panel>
            <LeftItems>{tasksLeft.length} items left</LeftItems>
            <div>
                {filtersValue.map((item) => (
                    <RadioGroup key={item}>
                        <input
                            type="radio"
                            id={item}
                            name="filter"
                            value={item}
                            checked={item === filter}
                            onChange={() => updateFilter(item)}
                        />
                        <label htmlFor={item}>{item}</label>
                    </RadioGroup>
                ))}
            </div>
            <Clear onClick={() => clearCompleted()}>Clear completed</Clear>
        </Panel>
    )
}
