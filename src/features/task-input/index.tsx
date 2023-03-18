import { addTask } from '@entities/task/model'
import React from 'react'
import { Input } from './styled'

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
        <Input
            placeholder="What needs to be done?"
            onChange={(e) => getValue(e.target.value)}
            value={value}
            onKeyDown={onEnterDown}
        />
    )
}
