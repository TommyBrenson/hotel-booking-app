import { Divider } from '@material-ui/core';
import React from 'react';
import Container from '../../common/Container';
import MapCard from '../../common/MapCard';

const ContactsPage: React.FC = () => {
    return (
        <div className='contacts-page'>
            <h1>Контакты</h1>
            <div className='contacts-wrapper'>
                <div className='contacts-info'>
                    <p>Если у вас возник вопрос по бронированию, пожалуйста, свяжитесь с нами по телефону или с помощью формы обратной связи. Служба поддержки работает онлайн в режиме 24/7 без выходных и праздников.</p>
                    <div className='contacts-details'>
                        <div className='contacts_details-phone'>
                            <span className='smalltext_details'>Томск</span>
                            <span className='phone_number'>8 (913) 103-06-60</span>
                            <a className='phones_link' href='/'>Показать все номера</a>
                        </div>
                        <div className='contacts_details-feedback'>
                            <span className='smalltext_details'>Форма обратной связи</span>
                            <a className='feedback_link' href='/'>Написать нам</a>
                        </div>
                    </div>
                    <Divider light />
                    <p>Мы находимся в самом центре Томска, в деловом квартале. Рядом со зданием есть платная парковка для автомобилей и других транспортных средств.</p>
                </div>
                <MapCard />
            </div>
        </div>
    );
};

export default ContactsPage;