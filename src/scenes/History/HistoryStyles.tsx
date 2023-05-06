import styled from "styled-components";

export const HistoryStyles = styled.div`
  height: inherit;
  overflow-y: scroll;
  .history__title {
    margin: 24px 0 8px;
    color: rgb(22, 22, 23);
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 122.02%;
    letter-spacing: -0.055em;
  }

  .history__text--one {
    margin: 8px 0;
    color: rgb(35, 34, 50);
    opacity: 0.8;
    font-family: Epilogue;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 148.02%;
  }

  .history__text--two {
    margin: 8px 0;
    color: #161617;
    opacity: 0.8;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 148.02%;
  }
  .hisory__sport {
    margin: 14px 0px;
    border-radius: 12px;
    height: 77px;
    background-color: #ffff;
    display: grid;
    grid-template-columns: 80% 20%;
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
