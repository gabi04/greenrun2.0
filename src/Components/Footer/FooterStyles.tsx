import styled from "styled-components";

export const Footertyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer__btn {
    height: 59px;
    width: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: white;
    border: none;
  }
  //TODO si me queda sufiente tiempo para el responsive hover
  .footer__btn--active {
    background: #f5f5f5;
    path {
      fill: #1a5be1;
    }
  }
`;
