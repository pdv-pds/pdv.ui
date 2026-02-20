import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;  
  background: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  padding: 50px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
