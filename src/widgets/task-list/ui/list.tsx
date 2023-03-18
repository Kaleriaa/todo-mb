import { $tasks } from '@entities/task/model'
import { Task } from '@features/task-check'
import { Filters } from '@features/task-filter'
import { TaskInput } from '@features/task-input'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

export const Tasks = () => {
    const tasks = useUnit($tasks)

    return (
        <List>
            <TaskInput />
            {tasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
            <Filters />
        </List>
    )
}

const List = styled.div`
    margin-top: 30px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #fbfbfb,
        0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #fbfbfb,
        0 20px 1px -9px rgba(0, 0, 0, 0.15);
    padding: 20px 20px 0 20px;
`
