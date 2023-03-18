import styled from 'styled-components'

export const Panel = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1.5px solid #ebebeb;
`
export const LeftItems = styled.span`
    color: var(--filter-color);
`
export const Clear = styled.button`
    cursor: pointer;
    color: var(--filter-color);
    appearance: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
`
export const RadioGroup = styled.div`
    display: inline-block;
    margin-left: 5px;
    input[type='radio'] {
        display: none;
        transition: all 0.3s;
    }
    input[type='radio']:checked + label {
        border-radius: 5px;
        background-color: transparent;
        box-shadow: none;
        border: 1.5px solid var(--pink-color);
    }
    label {
        border: 1.5px solid transparent;
        color: var(--filter-color);
        font-size: 16px;
        display: inline-block;
        cursor: pointer;
        padding: 0px 10px;
        line-height: 26px;
        user-select: none;
    }
`
