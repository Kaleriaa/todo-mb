import { createStore, createEvent } from 'effector'

export const toggle = createEvent()
export const $toggledArrow = createStore<boolean>(true).on(
    toggle,
    (state) => !state,
)
