import styled from '@emotion/styled'

export const Primary = styled.button`
    background-color: #6495ED;
    border-radius: 3px;
    border-style: solid;
    width: 40%;
    border-color: #6495ED;
    font-size: 0.9rem;
    margin-right: 4px;
    font-family: 'Courier New', Courier, monospace;

    &:hover {
        background-color: #1561AC;
        color: white;
    }
`

export const Secondary = styled.button`
    background-color: #06C183;
    border-radius: 3px;
    border-style: solid;
    border-radius: 6px;
    border-color: #06C183;
    font-size: 0.9rem;
    margin-right: 4px;
    font-family: 'Courier New', Courier, monospace;

    &:hover {
        background-color: #3E9651;
        color: white;
    }
`

export const Danger = styled.button`
    background-color: #F18D99;
    border-radius: 3px;
    border-style: solid;
    width: 40%;
    border-color: #F18D99;
    font-size: 0.9rem;
    font-family: 'Courier New', Courier, monospace;

    &:hover {
        background-color: #B44541;
        color: white;
    }
`