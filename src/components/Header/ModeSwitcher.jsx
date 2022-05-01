import styled from 'styled-components';

export const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-md);
    cursor: pointer;
    font-weight: var(--fw-normal);
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;

    @media (max-width: 767px) {
        font-size: var(--fs-vsm);
    }
`;
