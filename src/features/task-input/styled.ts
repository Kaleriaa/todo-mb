import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
`

export const Input = styled.input`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 10px 15px;
    font-size: 21px;
    color: var(--dark-text);
    width: 80%;
    ::placeholder {
        color: var(--light-grey);
        font-style: italic;
        font-weight: 100;
    }
`
