import React from 'react';
import DisplayWrapper from './styles/DisplayWrapper';

const Screen = ({ content }) => (
  <DisplayWrapper>
    <div>{content}</div>
  </DisplayWrapper>
);

export default Screen;
