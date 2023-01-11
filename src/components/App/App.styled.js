import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 0 0 20px 0;
  width: 600px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const WrapperContact = styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 600px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 32px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  background: #2196f3;
  display: inline-block;
  letter-spacing: 0.06em;
  border-radius: 4px;
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
