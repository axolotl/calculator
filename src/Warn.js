import React from 'react';
import { WarnWrapper, WarnText } from './styles/WarnStyles';

const Warn = ({ warning }) => {
  return (
    <WarnWrapper>
      <WarnText>[WARNING] {warning}</WarnText>
    </WarnWrapper>
  );
};

export default Warn;
