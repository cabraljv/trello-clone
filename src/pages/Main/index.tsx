import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Board from '../../components/Board';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
};

export default Main;
