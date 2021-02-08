import React from 'react';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from '../Card';

import { Container } from './styles';

interface IProps {
  groupIndex: number;
  name: string;
  cards: {
    id: number;
    content: string;
  }[];
}

const List: React.FC<IProps> = ({ groupIndex, name, cards }) => {
  return (
    <Draggable draggableId={`list-${groupIndex}`} index={groupIndex}>
      {(listProvided) => (
        <Container ref={listProvided.innerRef} {...listProvided.draggableProps}>
          <div className="list-header" {...listProvided.dragHandleProps}>
            <h3>{name}</h3>
            <button type="submit">
              <FiMoreHorizontal />
            </button>
          </div>

          <Droppable type="CARD" droppableId={`group-${groupIndex}`}>
            {(provided) => (
              <div
                className="cards-zone"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((item, index) => (
                  <Card
                    key={item.id}
                    card_id={item.id}
                    content={item.content}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <footer>
            <button className="add-card" type="button">
              <FiPlus size={18} /> <p>Adicionar outro card</p>
            </button>
          </footer>
        </Container>
      )}
    </Draggable>
  );
};

export default List;
