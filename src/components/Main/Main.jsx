import { MainContainer } from './MainContainer';
import { MainWrapper } from './MainWrapper';

export const Main = ({ children }) => {
    return (
        <MainWrapper>
            <MainContainer>{children}</MainContainer>
        </MainWrapper>
    );
};
