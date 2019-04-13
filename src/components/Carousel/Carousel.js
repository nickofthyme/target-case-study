import React, { useState } from 'react'
import styled from '@emotion/styled';

import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  ${({ size }) => `
    height: ${size}px;
    width: ${size}px;
  `}
  ${({ clickable }) => clickable ? `cursor: pointer;` : ''}
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: ${({theme}) => theme.borderRadius};

  &:hover {
    background-color: ${({theme}) => theme.grey};
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ViewLarger = styled(Row)`
  align-items: center;
  padding: ${({ theme }) => theme.gp}px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.secondaryText};
    margin-left: ${({ theme }) => theme.gp};
  }
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [largeIndex, setLargeIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getNextIndex = () => currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;
  const getPreviousIndex = () => currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  const getIndecies = () => [getPreviousIndex(), currentIndex, getNextIndex()];

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const next = () => {
    setCurrentIndex(getNextIndex());
  }
  const previous = () => {
    setCurrentIndex(getPreviousIndex());
  }
  const setMainImage = ({ target }) => {
    setLargeIndex(target.dataset.index);
  }

  return (
    <>
      <Container>
        <StyledImage size={300} src={images[largeIndex].url} />

        <ViewLarger onClick={openModal}>
          <Icon name="zoom" />
          <span>View Larger</span>
        </ViewLarger>

        <Row>
          <ArrowContainer onClick={previous}>
            <Icon name="left-arrow"/>
          </ArrowContainer>
          {
            getIndecies().map((index) => {
              const { url, id } = images[index];
              return (
                <StyledImage
                  key={id}
                  src={url}
                  size={100}
                  clickable
                  onClick={setMainImage}
                  data-index={index}
                />
              )
            }
            )
          }
          <ArrowContainer onClick={next}>
            <Icon name="right-arrow"/>
          </ArrowContainer>
        </Row>
      </Container>
      {
        !showModal ? null :
        <Modal onClose={closeModal}>
          <StyledImage size={600} src={images[largeIndex].url} />
        </Modal>
      }
    </>
  );
};

export default Carousel;
