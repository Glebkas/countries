import { IoSearch } from 'react-icons/io5';
import { InputContainer } from './InputContainer';
import { Input } from './Input';

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
    );
};


