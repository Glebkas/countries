import styled from 'styled-components';

export const Input = styled.input.attrs({
    type: 'search',
    placeHolder: 'Search for a country…',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--colors-text);
    width: 100%;
    background: var(--colors-ui-base);
`;
