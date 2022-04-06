import axios from 'axios';
import { useState, useEffect } from 'react';

import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { ALL_COUNTRIES } from './utils/api';

function App() {
    const [countries, setCountries] = useState('');
    console.log(countries);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, [countries]);


    return (
        <>
            <Header></Header>
            <Main>
                <Controls></Controls>
                <List>
                    {countries.map((country) => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: 'Population',
                                    description:
                                        country.population.toLocalString(),
                                },
                                {
                                    title: 'Region',
                                    description: country.region.toLocalString(),
                                },
                                {
                                    title: 'Capital',
                                    description:
                                        country.capital.toLocalString(),
                                },
                            ],
                        };
                        return <Card key={country.name} {...countryInfo} />;
                    })}
                </List>
            </Main>
        </>
    );
}

export default App;
