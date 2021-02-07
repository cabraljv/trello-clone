import styled from 'styled-components';

interface IProps {
  isDragging: boolean;
}

export const Container = styled.div<IProps>`
  background: #fff;
  box-shadow: 0 1px 0 rgb(9, 30, 66, 0.25);
  padding: 8px 10px;
  border-radius: 3px;
  transform: rotate(0deg);
`;
