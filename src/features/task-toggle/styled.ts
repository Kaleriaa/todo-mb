import styled from 'styled-components'

export const StyledSVG = styled.svg<{ isOpened: boolean }>`
    transform: ${({ isOpened }) => !isOpened && 'rotate(-180deg)'};
    color: var(--light-grey);
    cursor: pointer;
    width: 26px;
    height: 26px;
    transition: all 0.3s ease-in-out;
`
