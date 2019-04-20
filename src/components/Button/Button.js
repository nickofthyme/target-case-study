import React from 'react'
import styled from '@emotion/styled'

const getTypeTheme = ({ primary, secondary, theme }) => {
  if (primary) {
    return `
      background: linear-gradient(to top, ${theme.red} 0%, ${theme.lightRed} 100%);
      color: ${theme.white};
      `
    } else if (secondary) {
      return `
      background: linear-gradient(to top, ${theme.primaryColor} 0%, ${theme.primaryColorLight} 100%);
      color: ${theme.white};
    `
  }

  return `
    background-color: ${theme.grey};
    color: ${theme.primaryColor};
  `;
}

const getSizeValues = ({ small, medium, theme }) => {
  if (small) {
    return `
      padding: ${theme.gp / 4}px ${theme.gp}px;
      font-size: 80%;
    `;
  } else if (medium) {
    return `
      padding: ${theme.gp / 2}px ${theme.gp}px;
      font-size: 100%;
    `;
  }

  return `
    padding: ${theme.gp}px ${theme.gp}px;
    font-size: 120%;
  `;
}

const getThemeValues = ({ theme }) => `
  border-radius: ${theme.borderRadius};
`;

const StyledButton = styled.button`
  ${getTypeTheme}
  ${getSizeValues}
  ${getThemeValues}
  border: 0;
  outline: 0;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  flex: 1;
  margin: ${({theme}) => theme.gp}px 0;

  &:not(:first-of-type) {
    margin-left: ${({theme}) => theme.gp / 2}px;
  }
`

const AbsoluteLabel = styled.small`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  text-align: center;
  user-select: none;
`

const Button = ({ subTitle, ...props }) => (
  <Container>
    <StyledButton {...props} />
    {
      !subTitle ? null : (
        <AbsoluteLabel className="bold">{ subTitle }</AbsoluteLabel>
      )
    }
  </Container>
);

export default Button;
