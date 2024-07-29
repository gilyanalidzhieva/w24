import { useState } from 'react';
import Tariffcard from '../Cards/Cards';

const tariffs = [
    {
        id: 1,
        name: "Безлимитный 300",
        price: "300 руб/мес",
        speed: "до 10 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "blue",
    },
    {
        id: 2,
        name: "Безлимитный 450",
        price: "450 руб/мес",
        speed: "до 50 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "green",
    },
    {
        id: 3,
        name: "Безлимитный 550",
        price: "550 руб/мес",
        speed: "до 100 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "red",
    },
    {
        id: 4,
        name: "Безлимитный 1000",
        price: "1000 руб/мес",
        speed: "до 200 Мбит/сек",
        info: "Объем включенного трафика не ограничен",
        color: "black",
    },
];

const TariffList = () => {
    const [selectedTariffId, setSelectedTariffId] = useState(null);
    const handleTariffSelect = (tariffId) => {
        setSelectedTariffId(tariffId);
    };

    return (
        <div className='tariff'>
            {tariffs.map((tariff) => (
                <Tariffcard
                    key={tariff.id}
                    tariff={tariff}
                    selected={selectedTariffId === tariff.id}
                    onSelect={handleTariffSelect}
                />
            ))}
        </div>
    );
};

export default TariffList;