import React from 'react'
import styled from '@emotion/styled';

import Icon from '../Icon/Icon';

const Container = styled.div`
  display: flex;
`;

const Stars = ({ stars, max = 5, size }) => (
  <Container title={`${stars} of ${max} stars`}>
    {
      Array(max).fill(1).map((v, index) => (
        <Icon size={size} name={index >= stars ? "star" : "star-red"} key={index}/>
      ))
    }
  </Container>
);

export default Stars;
