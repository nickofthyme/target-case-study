import React, { useState } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { Stars, Modal } from '../../components';

const Row = styled.div`
  display: flex;
`;

const Overall = styled.div`
  display: flex;
  margin: ${({theme}) => theme.gp}px;
  margin-top: ${({theme}) => theme.gp * 2}px;
  align-items: flex-end;

  .overall {
    margin-left: ${({theme}) => theme.gp / 2}px;
    flex: 1;
  }

  .view-all {
    text-align: right;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Reviews = styled.div`
  padding: ${({ theme }) => theme.gp}px;
  background-color: ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.borderRadius};

  h3 {
    margin-top: ${({theme}) => theme.gp / 2}px;
  }
`;

const Header = styled.div`
  flex: 1;
`;

const Review = styled.div`
  flex: 1;

  &:not(:last-of-type) {
    margin-bottom: ${({theme}) => theme.gp * 2}px;
  }
`;

const AllReviews = styled.div`
  max-width: 500px;

  h1 {
    text-align: center;
    margin-bottom: ${({theme}) => theme.gp}px;
  }
`;

const ProductReviews = ({ reviews, pro, con, rating }) => {
  const [showModal, setShowModal] = useState(false);
  const showAllReviews = () => setShowModal(true);
  const closeAllReviews = () => setShowModal(false);
  const renderReview = ({ title, overallRating, review, screenName, reviewKey, datePosted }) => {
    const date = dayjs(datePosted).format('MMMM DD, YYYY');
    return (
      <Review key={reviewKey}>
        <Stars size={16} stars={overallRating} />
        <h3 className="bold">{title}</h3>
        <p>{review}</p>
        <br/>
        <p><a href="">{screenName}</a> | {date}</p>
      </Review>
    );
  }

  return (
    <>
      <Overall>
        <Stars stars={rating} />
        <span className="overall bold">overall</span>
        <span
          className="view-all bold"
          onClick={showAllReviews}
        >
          view all { reviews.length } Reviews
        </span>
      </Overall>
 
      <Reviews>
        <Row>
          <Header>
            <h2>PRO</h2>
            <span>most helpful 4-5 star review</span>
          </Header>
          <Header>
            <h2>CON</h2>
            <span>most helpful 1-2 star review</span>
          </Header>
        </Row>

        <hr/>

        <Row>
          { renderReview(pro) }
          { renderReview(con) }
        </Row>

        {/* { reviews.map(({overallRating}) => overallRating) } */}
      </Reviews>
      {
        !showModal ? null :
        <Modal onClose={closeAllReviews}>
          <AllReviews>
            <h1>All Reviews</h1>
            { reviews.map(renderReview) }
          </AllReviews>
        </Modal>
      }
    </>
  );
};

export default ProductReviews;
