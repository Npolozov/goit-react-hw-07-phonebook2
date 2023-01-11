import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.9;
  background: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.06em;
  border-radius: 10px;
  border: none;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: white;
  }
`;

export const ConteinerButton = styled.div`
  margin-left: auto;
`;
