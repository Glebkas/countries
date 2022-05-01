import styled from 'styled-components';

export const InfoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 16px;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
        margin-top: 23px;
    } ;
`;
