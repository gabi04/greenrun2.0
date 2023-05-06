import styled from "styled-components";

export const AppStyled = styled.div`
  padding: 54px 32px 20px;
  height: calc(100vh - 74px);
  width: calc(100vw - 64px);
  background-color: #e5e5e5;
  .app__content {
    display: grid;
    grid-template-areas:
      "header"
      "body"
      "footer";
    grid-template-rows: 33px calc(100% - 33px - 85px) 85px;
    width: 100%;
    height: 100%;
  }
  .app__content__header {
    grid-area: header;
  }
  .app__content__body {
    grid-area: body;
    height: inherit;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
  .app__content__footer {
    grid-area: footer;
    background: #ffffff;
    border-radius: 24px;
    padding: 13px 12px;
  }
`;
