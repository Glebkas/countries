import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { searchByCountry } from '../utils/api';
import { Button } from '../components/Button/Button';
import { Info } from '../components/Info/Info';

export const Details = () => {
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    const { name } = useParams();

    console.log(country);
    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountry(data[0]));
    }, [name]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack></IoArrowBack>
                Back
            </Button>
            {country && <Info navigate={navigate} {...country} />}
        </div>
    );
};
