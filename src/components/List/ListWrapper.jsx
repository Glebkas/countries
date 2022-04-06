import styled from 'styled-components';

export const ListWrapper = styled.section`
    width: 100;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat (1, fr);
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: repeat (2, fr);
        gap: 3rem;
        padding: 2.5rem 0;
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat (4, fr);
        gap: 4rem;
        padding: 4rem;

    } ;
`;
