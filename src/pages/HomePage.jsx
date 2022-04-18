import axios from 'axios';
import { useState, useEffect } from 'react';
import { Controls } from '../components/Controls/Controls';
import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import { ALL_COUNTRIES } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    // const handleCardClick = (country) => {
    //     navigate(`/country/${country.name}`);
    //     console.log(country.name);
    // };

    return (
        <>
            <Controls />
            <List>
                {countries.map((country, index) => (
                    <Card
                       
                        key={index}
                        country={country}
                    />
                ))}
            </List>
        </>
    );
};
