import { createEvent, createStore, sample } from 'effector'
import { Task } from '../type'
import { generateId } from '../utils'

export const addTask = createEvent<string>()
export const toggleTask = createEvent<string>()
export const clearCompleted = createEvent()

export const $tasks = createStore<Task[]>([]).on(addTask, (tasks, text) => [
    { id: generateId(), text, isClosed: false },
    ...tasks,
])

sample({
    clock: toggleTask,
    source: $tasks,
    filter: (tasks, taskId) => tasks.some(({ id }) => taskId === id),
    fn: (tasks, taskId) => {
        const index = tasks.findIndex(({ id }) => taskId === id)
        const task = tasks[index]
        return [
            ...tasks.slice(0, index),
            { ...task, isClosed: !task.isClosed },
            ...tasks.slice(index + 1, tasks.length),
        ]
    },
    target: $tasks,
})
sample({
    clock: clearCompleted,
    source: $tasks,
    fn: (tasks) => tasks.filter((t) => !t.isClosed),
    target: $tasks,
})

export const $tasksLeft = sample({
    source: $tasks,
    fn: (tasks) => tasks.filter((t) => !t.isClosed),
})
