import React from 'react';
import { NumberKey, EqualsKey, OperationKey } from './styles/KeyStyles';

const Key = ({ onClick, children }) => {
  if (children === '=') {
    return <EqualsKey onClick={onClick}>{children}</EqualsKey>;
  } else if (Number.isInteger(children) || children === '.') {
    return <NumberKey onClick={onClick}>{children}</NumberKey>;
  } else {
    return <OperationKey onClick={onClick}>{children}</OperationKey>;
  }
};

export default Key;
