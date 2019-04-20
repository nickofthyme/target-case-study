import React from 'react'
import styled from '@emotion/styled';

const getUrl = (name) => {
  return `/static/assets/${name}.svg`;
}

const getSize = ({ small, large, size }) => {
  if (size) {
    return size;
  } else if (small) {
    return 20;
  } else if (large) {
    return 40;
  }

  return 30;
};

const StyledIcon = styled.img`
  user-select: none;
  ${(props) => {
    const size = getSize(props);
    return `height: ${size}px; width: ${size}px;`
  }}
  ${({ clickable }) => clickable ? 'cursor: pointer;' : ''}
`;

const Icon = ({ name, alt,...props }) => (
  <StyledIcon
    { ...props }
    src={getUrl(name)}
    alt={alt||name}
  />
);

export default Icon;
