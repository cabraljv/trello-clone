import React, { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { DragDropContext } from 'react-beautiful-dnd';
import List from '../List';
import { Container } from './styles';
import api_data from '../../services/data';

const Board: React.FC = () => {
  const [data, setData] = useState(api_data);

  const onDragEnd = useCallback(
    (result) => {
      const { destination, source } = result;
      if (!destination) return;

      if (
        destination.droppableId === source.droppableId &&
        source.index === destination.index
      )
        return;

      const fromItem = source.index;
      const fromGroup = parseInt(source.droppableId.replace('group-', ''), 10);
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
    },
    [data]
  );
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((item, index) => (
          <List
            key={item.id}
            name={item.name}
            cards={item.cards}
            groupIndex={index}
          />
        ))}
      </DragDropContext>

      <button className="add-list" type="button">
        <FiPlus size={20} />
        <p>Criar outra lista</p>
      </button>
    </Container>
  );
};

export default Board;
