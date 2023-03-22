import { $filter } from '@entities/filter/model'
import { Filter } from '@entities/filter/type'
import { $tasks } from '@entities/task/model'
import { sample } from 'effector'

export const $filterTasks = sample({
    source: { tasks: $tasks, filter: $filter },
    fn: ({ tasks, filter }) => {
        if (filter === Filter.Active)
            return tasks.filter(({ isClosed }) => !isClosed)
        if (filter === Filter.Completed)
            return tasks.filter(({ isClosed }) => isClosed)
        return tasks
    },
})
