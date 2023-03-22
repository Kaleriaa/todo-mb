import { addTask } from '@entities/task/model'
import { Arrow } from '@features/task-toggle'
import React from 'react'
import { Input, Wrapper } from './styled'

export const TaskInput = () => {
    const [value, setValue] = React.useState<string>('')

    const getValue = (str: string) => {
        setValue(str)
    }
    const onEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && value) {
            addTask(value)
            setValue('')
        }
    }

    return (
        <Wrapper>
            <Arrow />
            <Input
                placeholder="What needs to be done?"
                onChange={(e) => getValue(e.target.value)}
                value={value}
                onKeyDown={onEnterDown}
            />
        </Wrapper>
    )
}
