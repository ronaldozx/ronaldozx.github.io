import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

interface LanguageButtonProps {
  $active: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : 'transparent'};
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
`;
