import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderTitle = styled(Link).attrs({
    to: '/',
})`
    color: var(--colors-text);
    font-size: var(--fs-dsbg);
    text-decoration: none;
    font-weight: var(--fw-bold);

    @media (max-width: 767px) {
        font-size: var(--fs-sm);
    } ;
`;
