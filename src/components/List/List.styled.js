import styled from 'styled-components';
export const ListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 20px;
  column-gap: 20px;
`;

export const ItemStyle = styled.li`
  display: grid;
  grid-template-columns: 1fr 20%;
  grid-template-rows: 1fr;
  gap: 10px;
  align-items: center;
  padding: 5px;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const TotalParagraf = styled.p`
  margin-bottom: 10px;
`;
