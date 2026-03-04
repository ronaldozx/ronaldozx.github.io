import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  box-shadow: 0 4px 20px rgba(97, 218, 251, 0.4);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 30px rgba(97, 218, 251, 0.6);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
`;
