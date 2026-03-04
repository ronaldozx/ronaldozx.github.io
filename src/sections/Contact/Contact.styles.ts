import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 8vw;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.content};
  background: rgba(0, 0, 0, 0.2);
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const ContactInfo = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 3rem;
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(10px);
    border-color: ${({ theme }) => theme.colors.primary}40;
  }
`;

export const ContactIcon = styled.div`
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}20,
    ${({ theme }) => theme.colors.secondary}20
  );
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ContactValue = styled.a`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  padding: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.5;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  font-family: 'Segoe UI', Arial, sans-serif;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(97, 218, 251, 0.4);
    animation: ${pulse} 1s ease infinite;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    animation: none;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary}40,
      ${({ theme }) => theme.colors.secondary}40
    );
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px) rotate(5deg);
    box-shadow: 0 10px 20px rgba(97, 218, 251, 0.3);
  }
`;
