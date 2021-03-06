import { useState, useEffect } from 'react';
import { ControlsWrapper } from './ControlsWrapper';
import { Search } from '../Search/Search';
import { CustomSelect } from '../CustomSelect/CustomSelect';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

export const Controls = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
    }, [search, region]);

    return (
        <ControlsWrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            ></CustomSelect>
        </ControlsWrapper>
    );
};
