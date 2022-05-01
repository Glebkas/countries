import { InfoImage } from './InfoImage';
import { InfoTitle } from './InfoTitle';
import { InfoWrapper } from './InfoWrapper';
import { InfoListContainer } from './InfoListContainer';
import { InfoList } from './InfoList';
import { InfoListItem } from './InfoListItem';
import { InfoMeta } from './InfoMeta';
import { InfoTagGroup } from './InfoTagGroup';
import { InfoTag } from './InfoTag';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { searchByCode } from '../../utils/api';

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        navigate,
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios
                .get(searchByCode(borders))
                .then(({ data }) =>
                    setNeighbors(data.map((country) => country.name))
                );
    }, [borders]);

    return (
        <InfoWrapper>
            <InfoImage src={flag} alt={name}></InfoImage>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <InfoListContainer>
                    <InfoList>
                        <InfoListItem>
                            <b>Native Name:</b>
                            {` ${nativeName}`}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Population:</b>
                            {` ${population}`}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Region:</b>
                            {` ${region}`}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Sub Region:</b>
                            {` ${subregion}`}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Capital:</b>
                            {` ${capital}`}
                        </InfoListItem>
                    </InfoList>
                    <InfoList>
                        <InfoListItem>
                            <b>Top Level Domain:</b>
                            {topLevelDomain.map((domain) => (
                                <span key={domain}>{` ${domain}`}</span>
                            ))}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Currency:</b>
                            {currencies.map((currency) => (
                                <span
                                    key={currency.code}
                                >{` ${currency.name}`}</span>
                            ))}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Languages:</b>
                            {languages.map((language) => (
                                <span
                                    key={language.name}
                                >{` ${language.name}`}</span>
                            ))}
                        </InfoListItem>
                    </InfoList>
                </InfoListContainer>
                <InfoMeta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries </span>
                    ) : (
                        <InfoTagGroup>
                            {neighbors.map((border) => (
                                <InfoTag
                                    onClick={() =>
                                        navigate(`/country/${border}`)
                                    }
                                    key={border}
                                >
                                    {border}
                                </InfoTag>
                            ))}
                        </InfoTagGroup>
                    )}
                </InfoMeta>
            </div>
        </InfoWrapper>
    );
};
