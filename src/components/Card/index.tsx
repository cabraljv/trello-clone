import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { Container } from './styles';

interface IProps {
  index: number;
  content: string;
  card_id: number;
}

const Card: React.FC<IProps> = ({ index, content, card_id }) => {
  return (
    <Draggable draggableId={`card_id-${card_id}`} index={index}>
      {(provided, snapshot) => (
        <Container
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{content}</p>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
