import styled from "styled-components";

export const AppStyled = styled.div`
  padding: 54px 32px 20px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: #e5e5e5;
  .app__content {
    display: grid;
    grid-template-areas:
      "body"
      "footer";
    grid-template-rows: calc(100% - 85px - 40px) 85px;
    row-gap: 40px;
    width: 100%;
    height: 100%;
  }
  .app__content__body {
    grid-area: body;
    height: inherit;
    box-sizing: border-box;
  }
  .app__content__footer {
    grid-area: footer;
    background: #ffffff;
    border-radius: 24px;
    padding: 13px 12px;
  }
`;
