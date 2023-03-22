import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1.5px solid var(--light-grey);
`
export const Label = styled.label<{ isClosed: boolean }>`
    display: grid;
    grid-template-columns: 1em auto;
    gap: 25px;
    font-size: 21px;
    color: ${(props) =>
        props.isClosed ? 'var(--light-grey)' : 'var(--dark-text)'};
    text-decoration-line: ${(props) =>
        props.isClosed ? 'line-through' : 'none'};
    text-decoration-thickness: 1px;
`
export const CheckBox = styled.input`
    appearance: none;
    -webkit-appearance: none;
    border: 1.5px solid var(--light-grey);
    width: 28px;
    height: 28px;
    color: var(--dark-text);
    border-radius: 50%;
    display: grid;
    place-content: center;
    ::before {
        content: '';
        width: 26px;
        height: 26px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        clip-path: polygon(
            72.93% 21.1%,
            42.35% 72.87%,
            22.28% 52.87%,
            25.06% 50.09%,
            41.07% 66.04%,
            68.98% 18.77%
        );
        background-color: var(--check-color);
    }
    :checked {
        border-color: #cee0dc;
        ::before {
            transform: scale(1);
        }
    }
    :focus {
        outline: none;
    }
`
