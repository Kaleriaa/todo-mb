import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 420px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--light-grey);
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
`
