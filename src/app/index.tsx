import { Tasks } from '@widgets/todos-block'
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
