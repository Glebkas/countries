import axios from 'axios';
import { useState, useEffect } from 'react';

import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { ALL_COUNTRIES } from './utils/api';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    return (
        <>
            <Header />
            {console.log(countries)}
            <Main>
                <Controls />
                <List>
                    {countries.map((country, index) => (
                        <Card key={index} country={country} />
                    ))}
                </List>
            </Main>
        </>
    );
}

export default App;
