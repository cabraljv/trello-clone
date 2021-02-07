import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>
        <span className="trello-logo" />
      </h1>
      <p>Clone desenvolvido por João Victor Cabral</p>
    </Container>
  );
};

export default Header;
