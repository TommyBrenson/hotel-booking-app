import { Paper } from '@mui/material';
import React from 'react';
import Container from '../../common/Container';
import { SearchRoomsForm } from '../../ui/forms';
import config from '../../../config';

const HomePage: React.FC = () => {
  console.log(config.apiEndPoint);
  return (
    <main className='main-home__page'>
      <Container>
        <div className='main-home__wrapper'>
          <h1 className='visually-hidden'>Поиск номеров в отеле React Hotel result school</h1>
          <Paper elevation={3} className='form-card searchRooms-form'>
            <h2>Найдём номера под ваши пожелания</h2>
            <SearchRoomsForm />
          </Paper>
          <p className='main__text-wishes'>Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
