import styled from "styled-components";

export const HomeStyles = styled.div`
  display: grid;
  grid-template-rows: auto calc(100% - 564px + 54px);
  grid-template-areas:
    "image"
    "btns";
  height: 100%;
  .home__img__container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: calc(100vh - 564px);
    height: 564px;
  }
  .home__img {
    height: 100%;
    width: 100%;
    grid-area: image;
    border-radius: 32px;
  }
  .home__img__sport {
    position: absolute;
    bottom: 26px;
    left: 21px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 122.02%;
    color: #fefefe;
    object-fit: cover;
    margin: 0;
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
`;
