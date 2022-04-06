const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES =
    BASE_URL + 'all?fields=name,capital,region,flags,population';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;
export const searchByCode = (codes) =>
    BASE_URL + 'alpha?=codes' + codes.join(',');
