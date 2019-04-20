import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from '@emotion/styled';
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import { mq } from '../../styles';
import { ProductActions } from '../../store/actions';
import { Carousel, Icon, Button } from '../../components';
import ProductReviews from './ProductReviews';

dayjs.extend(isBetween)

const DetailsContainer = styled.div`
  display: flex;
  margin: ${({theme}) => theme.gp * 4}px;
  flex-direction: row;

  ${mq.small} {
    flex-direction: column;
    margin: 0;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 ${({theme}) => theme.gp}px;

  .title {
    text-align: center;
    margin: ${({theme}) => theme.gp * 2}px;
  }
`;

const MainActions = styled.div`
  display: flex;

  ${mq.small} {
    flex-direction: column;
  }
`

const SecondaryActions = styled.div`
  display: flex;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: ${({theme}) => theme.gp}px 0;
  padding: ${({theme}) => `${theme.gp / 4}px ${theme.gp}px`};
  border: 1px solid ${({theme}) => theme.grey};
  border-radius: ${({theme}) => theme.borderRadius};

  .label {
    flex: 1;
  }

  h2 {
    padding: 0 ${({theme}) => theme.gp / 2}px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: flex-end;

  h2 {
    margin-right: ${({theme}) => theme.gp / 2}px;
  }
`

const Returns = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.secondaryText};
  margin: ${({theme}) => theme.gp * 2}px 0;

  hr {
    height: 100%;
    margin: 0 ${({theme}) => theme.gp}px;
  }
`

const Promos = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({theme}) => theme.gp}px 0;

  hr {
    width: 100%;
    margin: ${({theme}) => theme.gp}px 0;
  }

  .promo {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: ${({theme}) => theme.gp / 2}px;
    color: ${({theme}) => theme.red};
  }
`
const Highlights = styled.div`
  margin: ${({theme}) => theme.gp}px 0;

  ul {
    color: ${({theme}) => theme.secondaryText};
    padding-inline-start: ${({theme}) => theme.gp}px;
  }

  li {
    margin: ${({theme}) => theme.gp / 2}px 0;
  }
`

const ProductDetail = ({ match, loadProduct, product }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadProduct(match.params.productId);
  }, [match.params.productId]);

  const getImages = ([image]) => {
    const {
      PrimaryImage,
      AlternateImages,
    } = image;

    return [...PrimaryImage, ...AlternateImages].map(({ image }) => {
      const id = image.substr(image.lastIndexOf('/') + 1);

      return { id, url: image };
    })
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementtQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  const renderIfOnline = (jsx) => {
    return ['0', '1'].includes(product.purchasingChannelCode) ? jsx : null
  }

  const renderIfInStore = (jsx) => {
    return ['0', '2'].includes(product.purchasingChannelCode) ? jsx : null
  }
  const renderPromotions = (promotions) => {
    // TODO add back to render only active promos
    // const activePromotions = promotions.filter(({ startDate, endDate, }) => dayjs().isBetween(startDate, endDate))
    const activePromotions = promotions;
    return activePromotions.length === 0 ? null : (
      <Promos>
        <hr/>
          {
            activePromotions.map((promotion) => (
              <div className="promo" key={promotion.promotionIdentifier}>
                <Icon small name="tag-red"/>
                <h3>{promotion.Description[0].shortDescription}</h3>
              </div>
            ))
          }
        <hr/>
      </Promos>
    )
  };

  const renderHighlights = (highlights) => (
    <Highlights>
      <h1>product highlights</h1>
      <ul>
        {
          highlights.map((highlight) => (
            <li key={highlight} dangerouslySetInnerHTML={{__html: highlight}}></li>
          ))
        }
      </ul>
    </Highlights>
  );
    
  if (product) {
    const {
      title,
      Offers,
      Promotions,
      ItemDescription,
    } = product;

    return (
      <DetailsContainer>
        <ColumnContainer>
          <h1 className="title light">{title}</h1>
          <Carousel images={ getImages(product.Images) } />
          <ProductReviews
            reviews={product.CustomerReview[0].Reviews}
            pro={product.CustomerReview[0].Pro[0]}
            con={product.CustomerReview[0].Con[0]}
            rating={product.CustomerReview[0].consolidatedOverallRating}
          />
        </ColumnContainer>

        <ColumnContainer>
          <Price>
            <h2 className="bold">{ Offers[0].OfferPrice[0].formattedPriceValue }</h2>
            <span>{ Offers[0].OfferPrice[0].priceQualifier }</span>
          </Price>
          { renderPromotions(Promotions) }

          {
            renderIfOnline(
              <Quantity>
                <span className="label">quantity:</span>
                
                <Icon large clickable name="remove" onClick={ decrementtQuantity } />
                <h2 className="bold">{ quantity }</h2>
                <Icon large clickable name="add" onClick={ incrementQuantity } />
              </Quantity>
            )
          }

          <MainActions>
            {
              renderIfInStore(
                <Button secondary subTitle="find in a store">
                  Pick up in store
                </Button>
              )
            }
            { renderIfOnline(<Button primary>Add to cart</Button>) }
          </MainActions>

          <Returns>
            <h2>returns</h2>
            <hr/>
            <small dangerouslySetInnerHTML={{__html: product.ReturnPolicy[0].legalCopy }}></small>
          </Returns>

          <SecondaryActions>
            <Button small>Add to registry</Button>
            <Button small>Add to list</Button>
            <Button small>Share</Button>
          </SecondaryActions>
          
          { renderHighlights(ItemDescription[0].features) }

          <Button style={{ width: '50%' }} medium>Full Overview</Button>
        </ColumnContainer>
      </DetailsContainer>
    );
  }

  return <div>loading</div>;
};


const mapStateToProps = ({ product }) => ({
  product: product.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadProduct: ProductActions.loadProduct,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
