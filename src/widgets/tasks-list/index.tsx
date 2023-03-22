import { Task } from '@features/task-check'
import { $toggledArrow } from '@features/task-toggle/model'
import { $filterTasks } from '@widgets/todos-block/model'
import { useUnit } from 'effector-react'
import { Wrapper } from './styled'

export const TasksList = () => {
    const [tasks, isOpened] = useUnit([$filterTasks, $toggledArrow])

    if (!isOpened) return null

    return (
        <Wrapper>
            {tasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </Wrapper>
    )
}
