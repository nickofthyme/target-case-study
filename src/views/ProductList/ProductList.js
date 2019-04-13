import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/styled';

import { ProductsActions } from '../../store/actions';
import Product from './Product';

const Container = styled.div`
  width: 800px;
  margin: ${({theme}) => 2 * theme.gp}px auto;
`;

const ProductList = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, []);

  const getPrimaryImage = ([image = {}]) => {
    if (image.PrimaryImage && image.PrimaryImage[0]) {
      return image.PrimaryImage[0].image || '';
    }

    return '';
  };

  const renderProduct = ({
    title,
    itemId,
    shortDescription,
    Images,
  }) => (
    <Product
      key={ itemId }
      id={ itemId }
      title={ title }
      description={ shortDescription }
      image={ getPrimaryImage(Images) }
    />
  );

  return (
    <Container>
      { products.map(renderProduct) }
    </Container>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProducts: ProductsActions.loadProducts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
