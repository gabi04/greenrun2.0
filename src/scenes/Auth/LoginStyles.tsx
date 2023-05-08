import styled from "styled-components";

export const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .login__title {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 122.02%;
    color: #161617;
    text-align: center;
  }
  .login__text {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 148.02%;
    color: #232232;
    opacity: 0.8;
  }
  .login__user__label {
    position: relative;
    display: grid;
    height: 67px;
    width: 100%;
    border-radius: 18px;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.06);
    grid-template-areas:
      "label"
      "input";
    margin: 10px 0;
  }
  .login__form__span {
    position: absolute;
    top: 6px;
    left: 12px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 122.02%;
    color: rgb(60, 60, 60);
    opacity: 0.6;
  }
  .login__from__input {
    border-radius: 18px;
    border: none;
    grid-area: input;
    padding: 0 12px;
  }
  .login__form__link {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 122.02%;
    color: rgba(35, 34, 50, 0.8);
    display: block;
  }
  .login__form__submit {
    display: block;
    height: 66px;
    width: 122px;
    background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
    border-radius: 25px;
    border: none;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 122.02%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 22px 0;
  }
`;
