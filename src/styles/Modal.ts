import styled from "styled-components";

export const BG = styled.div`
  /* background-color: rgba(0, 0, 0, 0.2); */
  width: 100%;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
  width: 450px;
  height: 390px;
  background: white;
  z-index: 10;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

