import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            boxShadow: 'var(--shadow)',
            height: '48px',
            border: 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            margin: '0',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg)'
                : 'var(--colors-ui-base)',
        }),
    },
})`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;

    & > * {
        boxshadow: 'var(--shadow)';
        border-radius: var(--radii);
    }

    & * {
        color: var(--color-text) !important;
    }

    & > div[id] {
        background-color: var(--ui-color-base);
        padding: 0.25rem;
    }
`;
