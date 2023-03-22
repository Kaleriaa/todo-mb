import { createEvent, createStore } from 'effector'
import { Filter } from './type'

export const updateFilter = createEvent<Filter>()
export const $filter = createStore<Filter>(Filter.All).on(
    updateFilter,
    (_, filter) => filter,
)
