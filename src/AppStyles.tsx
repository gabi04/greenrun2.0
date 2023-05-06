import styled from "styled-components";

export const AppStyled = styled.div`
  height: calc(100vh - 74px);
  width: calc(100vw - 64px);
  display: grid;
  grid-template-areas:
    "header"
    "body"
    "footer";
  margin: 54px 32px 20px;
  .header {
    grid-area: header;
  }
  .body {
    grid-area: body;
  }
  .body__title {
    color: rgb(22, 22, 23);
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 122.02%;
    letter-spacing: -0.055em;
    margin: 24px 0 8px;
  }

  .body__text--one {
    font-family: Epilogue;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 148.02%;
    color: rgb(35, 34, 50);
    opacity: 0.8;
    margin: 8px 0;
  }

  .body__text--two {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 148.02%;
    color: #161617;
    opacity: 0.8;
    margin: 8px 0;
  }
  .hisory__sport {
    height: 77px;
    margin: 14px 0px;
    border: 1px solid;
    display: grid;
    grid-template-columns: 80% 20%;
    border-radius: 12px;
  }
  .hisory__sport__img__container {
    position: relative;
    height: 77px;
  }
  .hisory__sport__img {
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }

  .hisory__sport__name {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 122.02%;
    letter-spacing: -0.045em;
    color: #fefefe;
  }
  .hisory__sport__icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
