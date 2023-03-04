import styled from '@emotion/styled'

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 30px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 250px);
    }
`