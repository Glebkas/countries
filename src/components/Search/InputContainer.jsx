import styled from 'styled-components';

export const InputContainer = styled.label`
    background: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 480px;
    }
`;
