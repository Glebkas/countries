import { CardWrapper } from './CardWrapper';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardList } from './CardList';
import { CardListItem } from './CardListItem';
import { CardTitle } from './CardTitle';

export const Card = (img, name, info = [], onClick) => {
    return (
        <CardWrapper>
            <CardImage></CardImage>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                    ;
                </CardList>
            </CardBody>
        </CardWrapper>
    );
};
