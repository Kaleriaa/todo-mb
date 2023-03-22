import { Filters } from '@features/task-filter'
import { TaskInput } from '@features/task-input'
import { TasksList } from '@widgets/tasks-list'
import { List } from './styled'

export const Tasks = () => {
    return (
        <List>
            <TaskInput />
            <TasksList />
            <Filters />
        </List>
    )
}
