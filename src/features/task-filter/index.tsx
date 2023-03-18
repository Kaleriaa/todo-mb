import { $tasksLeft, clearCompleted } from '@entities/task/model'
import { useUnit } from 'effector-react'
import { filtersValue } from './constant'
import { Clear, LeftItems, Panel, RadioGroup } from './styled'

export const Filters = () => {
    const tasksLeft = useUnit($tasksLeft)

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
                        />
                        <label htmlFor={item}>{item}</label>
                    </RadioGroup>
                ))}
            </div>
            <Clear onClick={() => clearCompleted()}>Clear completed</Clear>
        </Panel>
    )
}
