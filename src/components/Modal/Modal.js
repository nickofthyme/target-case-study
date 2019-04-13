import React from "react";
import { createPortal } from "react-dom";
import styled from '@emotion/styled';

import Icon from '../Icon/Icon';

const Overlay = styled.aside`
  padding: ${({theme}) => theme.gp * 4}px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.overlay};
  z-index: ${({theme}) => theme.modalZIndex};
  height: 100vh;
  width: 100vw;
  top: 0;
`;

const Content = styled.div`
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: ${({theme}) => theme.gp * 3}px;
  border-radius: ${({theme}) => theme.borderRadius};
  position: relative;
  background-color: ${({theme}) => theme.grey};
`;

const FloatingIcon = styled(Icon)`
  margin: ${({theme}) => theme.gp / 2}px;
  position: absolute;
  top: 0;
  right: 0;
`;

const ScrollContainer = styled.div`
  overflow: scroll;
  max-height: calc(100vh - ${({theme}) => theme.gp * 14}px);
  max-width: calc(100vw - ${({theme}) => theme.gp * 14}px);
`;

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal((
      <Overlay>
        <Content>
          <FloatingIcon clickable name="close" onClick={this.props.onClose} />
          <ScrollContainer>
            {this.props.children}
          </ScrollContainer>
        </Content>
      </Overlay>
    ), this.el);
  }
}

export default Modal;
