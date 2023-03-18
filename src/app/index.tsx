import { Tasks } from '@widgets/task-list/ui/list'
import React from 'react'
import { Container, Label } from './ui/styled'

export const App = () => {
    return (
        <Container>
            <Label>todos</Label>
            <Tasks />
        </Container>
    )
}
