import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.spacing(4)} 0;

  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: scroll;

  animation-name: backdrop;
  animation-duration: 300ms;
  animation-timing-function: ease;
  @keyframes backdrop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  width: 90%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(8)};
  box-shadow: ${p => p.theme.shadow.userMenu};

  background-color: ${p => p.theme.colors.bgcMain};
  border-radius: 10px;

  @media screen and (max-height: 500px) and (orientation: landscape) {
    position: static;
    top: 0;
    left: 0;
    transform: translate(0,0);
  }
`