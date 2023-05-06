import styled from "styled-components";

export const HomeStyles = styled.div`
  display: grid;
  grid-template-rows: 564px calc(100% - 564px);
  grid-template-areas:
    "image"
    "btns";
  height: 100%;
  .home__img {
    height: 100%;
    width: 100%;
    grid-area: image;
    border-radius: 32px;
  }
  .home__btns {
    grid-area: btns;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home__btns__btn {
    height: 51px;
    width: 51px;
    border-radius: 100%;
    border: none;
    margin: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  }

  .home__btns__btn--active {
    width: 81px;
    height: 81px;
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    path {
      fill: white;
    }
  }

  .home__img__container {
    position: relative;
  }

  .home__img__sport {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 122.02%;
    color: #fefefe;
  }
`;
