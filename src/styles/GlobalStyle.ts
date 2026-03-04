import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-user-select: none; 
    -ms-user-select: none;    
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #06070f;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.primary}
    );
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary} #06070f;
  }

  body {
    background: ${({ theme }) => theme.colors.background.main};
    min-height: 100vh;
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
    position: relative;
  }

  .shooting-star {
    position: fixed;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fff;
    z-index: ${({ theme }) => theme.zIndex.content};
    pointer-events: none;
    box-shadow: 0 0 6px 1px rgba(255,255,255,0.6);
  }

  .shooting-star::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 160px;
    height: 1.5px;
    background: linear-gradient(to left, transparent 0%, rgba(200,230,255,0.9) 100%);
    transform: translateY(-50%);
    border-radius: 2px;
  }
`;
