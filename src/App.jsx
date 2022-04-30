import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        index
                        path='/'
                        element={
                            <HomePage
                                countries={countries}
                                setCountries={setCountries}
                            />
                        }
                    ></Route>
                    <Route path='/country/:name' element={<Details />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;
