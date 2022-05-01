import styled from 'styled-components';

export const CardWrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    cursor: pointer;
    overflow: hidden;

    @media (max-width: 767px) {
        margin: 0 30px;
    } ;
`;
