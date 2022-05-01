import axios from 'axios';
import { useState, useEffect } from 'react';
import { Controls } from '../components/Controls/Controls';
import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { ALL_COUNTRIES } from '../utils/api';

export const HomePage = ({ countries, setCountries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    const handleSearch = (search, region) => {
        let data = [...countries];
        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }

        if (search) {
            data = data.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        setFilteredCountries(data);
    };

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country, index) => (
                    <Card key={index} country={country} />
                ))}
            </List>
        </>
    );
};
