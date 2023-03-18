import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1.5px solid var(--light-grey);
    label {
        display: grid;
        grid-template-columns: 1em auto;
        gap: 25px;
        font-size: 20.5px;
        color: var(--dark-text);
    }
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
        width: 27px;
        height: 27px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        clip-path: polygon(
            84.62% 14.6%,
            46.63% 66.56%,
            17.55% 44.5%,
            19.76% 41.37%,
            45.76% 61.1%,
            81.53% 12.18%
        );
        background-color: var(--check-color);
    }
    :checked::before {
        transform: scale(1);
    }
`
