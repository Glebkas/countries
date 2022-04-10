import { CardWrapper } from './CardWrapper';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardList } from './CardList';
import { CardListItem } from './CardListItem';
import { CardTitle } from './CardTitle';

export const Card = (props) => {
    let info = [
        {
            title: 'Population',
            description: props.country.population,
        },
        {
            title: 'Region',
            description: props.country.region,
        },
        {
            title: 'Capital',
            description: props.country.capital,
        },
    ];

    return (
        <CardWrapper>
            <CardImage src={props.country.flags.png}></CardImage>
            <CardBody>
                <CardTitle>{props.country.name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </CardWrapper>
    );
};
