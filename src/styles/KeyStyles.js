import styled from 'styled-components';

export const NumberKey = styled.button`
  border: 1px solid #adadad;
  border-radius: 2px;
  margin: 5px;
  width: 60px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  font-size: 16px;
`;

export const EqualsKey = NumberKey.extend`
  background-color: #6078ff;
`;

export const OperationKey = NumberKey.extend`
  background-color: #d6d6d6;
`;
