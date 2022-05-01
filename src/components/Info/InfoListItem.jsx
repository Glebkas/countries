import styled from 'styled-components';

export const InfoListItem = styled.li`
    line-height: 1.8;
    font-size: var(--fs-md);

    @media (max-width: 767px) {
        font-size: var(--fs-sm);
    }
    & > b {
        font-weight: var(--fw-bold);
    }
`;
