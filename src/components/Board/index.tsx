import React, { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../List';
import { Container } from './styles';
import api_data from '../../services/data';

const Board: React.FC = () => {
  const [data, setData] = useState(api_data);

  const onDragEnd = useCallback(
    (result) => {
      const { destination, source, type } = result;
      if (!destination) return;
      if (type === 'CARD') {
        if (
          destination.droppableId === source.droppableId &&
          source.index === destination.index
        )
          return;

        const fromItem = source.index;
        const fromGroup = parseInt(
          source.droppableId.replace('group-', ''),
          10
        );
        const toGroup = parseInt(
          destination.droppableId.replace('group-', ''),
          10
        );
        const toItem = destination.index;

        let aux = data;
        const item = aux[fromGroup].cards[fromItem];

        aux[fromGroup].cards.splice(fromItem, 1);

        aux[toGroup].cards.splice(toItem, 0, item);

        setData(aux);
      } else if (type === 'COLUMN') {
        const fromItem = source.index;
        const toItem = destination.index;

        const aux = data;

        const item = aux[fromItem];
        aux.splice(fromItem, 1);
        aux.splice(toItem, 0, item);

        setData(data);
      }
    },
    [data]
  );
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <div
              className="lists"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.map((item, index) => (
                <List
                  key={item.id}
                  name={item.name}
                  cards={item.cards}
                  groupIndex={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <button className="add-list" type="button">
          <FiPlus size={20} />
          <p>Criar outra lista</p>
        </button>
      </Container>
    </DragDropContext>
  );
};

export default Board;
