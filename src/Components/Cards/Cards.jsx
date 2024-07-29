import './Cards.scss';

const Tariffcard = ({ tariff, selected, onSelect }) => {
    const handleClick = () => {
        onSelect(tariff.id);
    };
    const cardStyle = {
        backgroundColor: selected ? tariff.color : 'yellow',
    };

    return (
        <div className={`container $(color)`} style={cardStyle} onClick={handleClick}>
            <h3>{tariff.name}</h3>
            <p>{tariff.price}</p>
            <p>{tariff.speed}</p>
            <p>{tariff.info}</p>
        </div>
    );
};

export default Tariffcard;