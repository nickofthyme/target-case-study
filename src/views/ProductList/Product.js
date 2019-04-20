import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${({theme}) => theme.gp}px;

  p {
  margin-top: ${({theme}) => theme.gp}px;

  }
`;

const Container = styled(Link)`
  display: flex;
  cursor: pointer;
  padding: ${({theme}) => theme.gp}px;
  color: ${({theme}) => theme.primaryText};

  &:hover {
    box-shadow: 0 0 0 1px #45495A25, 0 3px 6px 0 #45495A45;
    text-decoration: none;
  }
`;

const Product = ({
  id, title, description, image,
}) => (
  <Container to={`products/${id}`}>
    <Thumbnail src={ image } alt={ image } />

    <Details>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </Details>
  </Container>
);

export default Product;
